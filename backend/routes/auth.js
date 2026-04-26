import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// ── Cookie config ─────────────────────────────────────────────────────────────
const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url ?? null,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

/** Strip sensitive fields before sending user to the client */
function safeUser(user) {
  const { password_hash, google_id, ...safe } = user;
  return safe;
}

/** Helper: get first row from a libsql ResultSet */
function firstRow(rs) {
  if (!rs.rows.length) return null;
  return rs.rows[0];
}

// ── POST /api/auth/register ───────────────────────────────────────────────────
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body ?? {};

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ error: "Name, email and password are required." });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters." });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existing = firstRow(
      await db.execute({ sql: "SELECT id FROM users WHERE email = ?", args: [normalizedEmail] })
    );
    if (existing) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }

    const password_hash = bcrypt.hashSync(password, 12);
    const insertResult = await db.execute({
      sql: "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      args: [name.trim(), normalizedEmail, password_hash],
    });

    const user = firstRow(
      await db.execute({
        sql: "SELECT * FROM users WHERE id = ?",
        args: [insertResult.lastInsertRowid],
      })
    );

    const token = signToken(user);
    res.cookie("token", token, COOKIE_OPTIONS);
    res.status(201).json({ user: safeUser(user) });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ── POST /api/auth/login ──────────────────────────────────────────────────────
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body ?? {};

    if (!email?.trim() || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const user = firstRow(
      await db.execute({
        sql: "SELECT * FROM users WHERE email = ?",
        args: [email.trim().toLowerCase()],
      })
    );

    // Use same error for wrong email OR wrong password to prevent enumeration attacks
    if (!user || !user.password_hash || !bcrypt.compareSync(password, user.password_hash)) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const token = signToken(user);
    res.cookie("token", token, COOKIE_OPTIONS);
    res.json({ user: safeUser(user) });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = firstRow(
      await db.execute({ sql: "SELECT * FROM users WHERE id = ?", args: [req.user.id] })
    );
    if (!user) {
      res.clearCookie("token");
      return res.status(404).json({ error: "User not found." });
    }
    res.json({ user: safeUser(user) });
  } catch (err) {
    console.error("Me error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

// ── POST /api/auth/logout ─────────────────────────────────────────────────────
router.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });
  res.json({ success: true });
});

// ── GET /api/auth/google ──────────────────────────────────────────────────────
// Stub — returns a helpful error until Google credentials are configured
router.get("/google", (req, res) => {
  if (!process.env.GOOGLE_CLIENT_ID) {
    // Redirect back to login with an error param so the UI can show a toast
    const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:5173";
    return res.redirect(`${frontendUrl}/login?error=google_not_configured`);
  }
  res.status(501).json({ error: "Google OAuth integration pending." });
});

export default router;
