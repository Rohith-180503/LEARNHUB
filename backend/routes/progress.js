import { Router } from "express";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// ── GET /api/progress/:courseId ─────────────────────────────────────────────
// Returns which lessons the user has completed for a specific course
router.get("/:courseId", authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;
    const result = await db.execute({
      sql: `
        SELECT p.lesson_id 
        FROM progress p
        JOIN lessons l ON p.lesson_id = l.id
        JOIN modules m ON l.module_id = m.id
        WHERE p.user_id = ? AND m.course_id = ? AND p.completed = 1
      `,
      args: [req.user.id, courseId]
    });
    
    // Return array of completed lesson IDs
    res.json(result.rows.map(row => row.lesson_id));
  } catch (error) {
    console.error("GET /api/progress error:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

// ── POST /api/progress/:lessonId ────────────────────────────────────────────
// Mark a lesson as completed (or incomplete if status is passed)
router.post("/:lessonId", authenticate, async (req, res) => {
  try {
    const { lessonId } = req.params;
    const { completed = 1 } = req.body;

    await db.execute({
      sql: `
        INSERT INTO progress (user_id, lesson_id, completed, updated_at) 
        VALUES (?, ?, ?, datetime('now'))
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET 
          completed = excluded.completed,
          updated_at = excluded.updated_at
      `,
      args: [req.user.id, lessonId, completed]
    });

    res.json({ message: "Progress updated" });
  } catch (error) {
    console.error("POST /api/progress error:", error);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

export default router;
