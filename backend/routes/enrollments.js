import { Router } from "express";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// ── GET /api/enrollments/me ──────────────────────────────────────────────────
// Returns all courses the current user owns
router.get("/me", authenticate, async (req, res) => {
  try {
    const result = await db.execute({
      sql: `
        SELECT c.*, e.enrolled_at 
        FROM courses c
        JOIN enrollments e ON c.id = e.course_id
        WHERE e.user_id = ?
        ORDER BY e.enrolled_at DESC
      `,
      args: [req.user.id]
    });
    res.json(result.rows);
  } catch (error) {
    console.error("GET /api/enrollments/me error:", error);
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
});

// ── POST /api/enrollments ────────────────────────────────────────────────────
// Manually enroll a user (usually called by payment webhook, but also for free courses)
router.post("/", authenticate, async (req, res) => {
  try {
    const { courseId } = req.body;
    if (!courseId) return res.status(400).json({ error: "Course ID required" });

    await db.execute({
      sql: "INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?, ?)",
      args: [req.user.id, courseId]
    });

    res.json({ message: "Successfully enrolled" });
  } catch (error) {
    console.error("POST /api/enrollments error:", error);
    res.status(500).json({ error: "Enrollment failed" });
  }
});

export default router;
