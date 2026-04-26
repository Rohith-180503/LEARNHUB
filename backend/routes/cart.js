import { Router } from "express";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// ── GET /api/cart ────────────────────────────────────────────────────────────
// Fetch user's server-side cart items
router.get("/", authenticate, async (req, res) => {
  try {
    const result = await db.execute({
      sql: `
        SELECT c.* 
        FROM courses c
        JOIN cart_items ci ON c.id = ci.course_id
        WHERE ci.user_id = ?
        ORDER BY ci.added_at DESC
      `,
      args: [req.user.id]
    });
    res.json(result.rows);
  } catch (error) {
    console.error("GET /api/cart error:", error);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// ── POST /api/cart/sync ──────────────────────────────────────────────────────
// Sync frontend cart with backend (overwrite or merge)
router.post("/sync", authenticate, async (req, res) => {
  try {
    const { courseIds } = req.body; // Array of course IDs from frontend
    if (!Array.isArray(courseIds)) return res.status(400).json({ error: "Invalid data" });

    // In a real app, we'd do this in a transaction. 
    // Simplest: Clear current and insert new.
    await db.execute({
      sql: "DELETE FROM cart_items WHERE user_id = ?",
      args: [req.user.id]
    });

    for (const id of courseIds) {
      await db.execute({
        sql: "INSERT OR IGNORE INTO cart_items (user_id, course_id) VALUES (?, ?)",
        args: [req.user.id, id]
      });
    }

    res.json({ message: "Cart synced successfully" });
  } catch (error) {
    console.error("POST /api/cart/sync error:", error);
    res.status(500).json({ error: "Failed to sync cart" });
  }
});

export default router;
