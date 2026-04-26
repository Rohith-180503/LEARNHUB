import jwt from "jsonwebtoken";

/**
 * Express middleware that reads the JWT from the httpOnly cookie,
 * verifies it, and attaches the decoded payload to req.user.
 * Returns 401 if missing or invalid.
 */
export function authenticate(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired session. Please log in again." });
  }
}
