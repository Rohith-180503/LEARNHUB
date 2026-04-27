import { db, initDb } from "./db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function seed() {
  console.log("🌱 Starting database seed...");
  
  await initDb();

  const coursesCount = await db.execute("SELECT COUNT(*) as count FROM courses");
  if (coursesCount.rows[0].count > 0) {
    console.log("⏭️ Courses already exist. Skipping seed.");
    return;
  }

  let courses = [];
  try {
    const DATA_PATH = path.join(__dirname, "coursesData.json");
    const content = fs.readFileSync(DATA_PATH, "utf-8");
    // The file is a JS array string, not strict JSON. We'll use a safer eval-like approach or just a simple parse.
    // Since we know the structure, we can do a dirty parse or just write it as a .json in the first place.
    // For now, we'll try a safe-ish eval of the array.
    courses = eval(`(${content})`);
  } catch (e) {
    console.warn("⚠️ Could not load coursesData.json, using fallback mock data.", e);
    courses = [
      { title: "Introduction to Web Dev", instructor: "LearnHub", price: 0, category: "web-development", description: "Start your journey here." }
    ];
  }

  console.log(`📚 Seeding ${courses.length} courses...`);
  
  for (const course of courses) {
    const result = await db.execute({
      sql: `INSERT INTO courses (title, instructor, price, img, category, description, duration, level, rating, students_enrolled)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        course.title,
        course.instructor || "Instructor",
        course.price || 0,
        course.img || "",
        course.category || "General",
        course.description || "",
        course.duration || "10h",
        course.level || "beginner",
        course.rating || 4.5,
        course.studentsEnrolled || 100
      ]
    });

    const courseId = result.lastInsertRowid;

    for (let m = 1; m <= 3; m++) {
      const modResult = await db.execute({
        sql: `INSERT INTO modules (course_id, title, sort_order) VALUES (?, ?, ?)`,
        args: [courseId, `Module ${m}: Essentials`, m]
      });
      
      const moduleId = modResult.lastInsertRowid;

      for (let l = 1; l <= 4; l++) {
        await db.execute({
          sql: `INSERT INTO lessons (module_id, title, video_url, duration, sort_order) VALUES (?, ?, ?, ?, ?)`,
          args: [
            moduleId,
            `Lesson ${l}: Concept & Practice`,
            "https://www.w3schools.com/html/mov_bbb.mp4",
            "10 min",
            l
          ]
        });
      }
    }
  }

  console.log("✅ Seeding complete!");
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seed().catch(console.error);
}
