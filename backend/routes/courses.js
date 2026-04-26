import { Router } from "express";
import { db } from "../db.js";

const router = Router();

// ── GET /api/courses ─────────────────────────────────────────────────────────
// Returns all courses, with optional filtering by category or search term
router.get("/", async (req, res) => {
  try {
    const { category, search } = req.query;
    let sql = "SELECT * FROM courses";
    let args = [];

    if (category || search) {
      sql += " WHERE";
      const conditions = [];
      if (category) {
        conditions.push(" category = ?");
        args.push(category);
      }
      if (search) {
        conditions.push(" (title LIKE ? OR description LIKE ?)");
        args.push(`%${search}%`);
        args.push(`%${search}%`);
      }
      sql += conditions.join(" AND");
    }

    sql += " ORDER BY created_at DESC";

    const result = await db.execute({ sql, args });
    res.json(result.rows);
  } catch (error) {
    console.error("GET /api/courses error:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

// ── GET /api/courses/:id ─────────────────────────────────────────────────────
// Returns detailed course info including its modules and lessons
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Get course info
    const courseRes = await db.execute({
      sql: "SELECT * FROM courses WHERE id = ?",
      args: [id]
    });

    if (courseRes.rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    const course = courseRes.rows[0];

    // 2. Get modules
    const modulesRes = await db.execute({
      sql: "SELECT * FROM modules WHERE course_id = ? ORDER BY sort_order ASC",
      args: [id]
    });

    const modules = modulesRes.rows;

    // 3. Get lessons for each module
    // We'll do this in a single query for efficiency and map them back
    const lessonsRes = await db.execute({
      sql: `
        SELECT l.*, m.id as module_id 
        FROM lessons l
        JOIN modules m ON l.module_id = m.id
        WHERE m.course_id = ?
        ORDER BY m.sort_order ASC, l.sort_order ASC
      `,
      args: [id]
    });

    const lessons = lessonsRes.rows;

    // 4. Assemble the structure
    const curriculum = modules.map(mod => ({
      ...mod,
      lessons: lessons.filter(l => l.module_id === mod.id)
    }));

    res.json({
      ...course,
      curriculum
    });
  } catch (error) {
    console.error("GET /api/courses/:id error:", error);
    res.status(500).json({ error: "Failed to fetch course details" });
  }
});

export default router;
