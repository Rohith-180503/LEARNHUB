import { Router } from "express";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

// ── GET /api/progress/:courseId ───────────────────────────────────────────────
// Returns progress (completed lessons) for a specific course for the current user
router.get("/:courseId", authenticate, async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.id;

    const result = await db.execute({
      sql: `
        SELECT p.lesson_id, p.completed 
        FROM progress p
        JOIN lessons l ON p.lesson_id = l.id
        JOIN modules m ON l.module_id = m.id
        WHERE p.user_id = ? AND m.course_id = ?
      `,
      args: [userId, courseId]
    });

    res.json(result.rows);
  } catch (error) {
    console.error("GET /api/progress error:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

// ── POST /api/progress/toggle ────────────────────────────────────────────────
// Toggles the completion status of a lesson
router.post("/toggle", authenticate, async (req, res) => {
  try {
    const { lessonId, completed } = req.body;
    const userId = req.user.id;

    if (!lessonId) {
      return res.status(400).json({ error: "Lesson ID is required" });
    }

    const status = completed ? 1 : 0;

    await db.execute({
      sql: `
        INSERT INTO progress (user_id, lesson_id, completed)
        VALUES (?, ?, ?)
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET
          completed = excluded.completed,
          updated_at = datetime('now')
      `,
      args: [userId, lessonId, status]
    });

    res.json({ success: true, lessonId, completed: status === 1 });
  } catch (error) {
    console.error("POST /api/progress/toggle error:", error);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

export default router;
