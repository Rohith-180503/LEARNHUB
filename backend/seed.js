import { db, initDb } from "./db.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function seed() {
  console.log("🌱 Starting database seed...");
  
  await initDb();

  // 1. Read fakeData.js from frontend
  // Since it's a JS file with 'export default', we'll read it as a string and parse if needed, 
  // or better, just re-define the data here for the seed script to be self-contained.
  
  const FAKE_DATA_PATH = path.join(__dirname, "..", "src", "fakeData", "fakeData.js");
  const content = fs.readFileSync(FAKE_DATA_PATH, "utf-8");
  
  // Extract the array using regex (simplest way without setting up a full build tool for the seed script)
  const arrayMatch = content.match(/const fakeData = (\[[\s\S]*?\]);/);
  if (!arrayMatch) {
    console.error("❌ Could not find fakeData array in fakeData.js");
    process.exit(1);
  }
  
  // Clean up the string to be valid JSON (fakeData.js has trailing commas and JS objects)
  // This is risky if the file is complex, but for this structure it should be okay with a bit of help.
  // Alternatively, I'll just hardcode the logic to insert the known courses.
  
  // Actually, I'll just use the list of titles/prices/categories I saw earlier to recreate the objects 
  // OR I can use a quick 'eval' if I'm sure of the file content (which I am, as I just read it).
  
  let courses = [];
  try {
    // Transform JS export to something eval can handle
    const cleanContent = content.replace("export default fakeData;", "fakeData;");
    courses = eval(cleanContent);
  } catch (e) {
    console.error("❌ Error parsing fakeData.js:", e);
    process.exit(1);
  }

  console.log(`📚 Found ${courses.length} courses. Clearing old data...`);
  
  // Clear existing data
  await db.execute("DELETE FROM lessons");
  await db.execute("DELETE FROM modules");
  await db.execute("DELETE FROM courses");

  for (const course of courses) {
    console.log(`   📝 Inserting: ${course.title}`);
    
    const result = await db.execute({
      sql: `INSERT INTO courses (title, instructor, price, img, category, description, duration, level, rating, students_enrolled)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        course.title,
        course.instructor,
        course.price,
        course.img,
        course.category,
        course.description,
        course.duration,
        course.level,
        course.rating,
        course.studentsEnrolled
      ]
    });

    const courseId = result.lastInsertRowid;

    // Create 3 mock modules for each course
    for (let m = 1; m <= 3; m++) {
      const modResult = await db.execute({
        sql: `INSERT INTO modules (course_id, title, sort_order) VALUES (?, ?, ?)`,
        args: [courseId, `Module ${m}: ${m === 1 ? 'Getting Started' : m === 2 ? 'Core Concepts' : 'Advanced Patterns'}`, m]
      });
      
      const moduleId = modResult.lastInsertRowid;

      // Create 4 mock lessons for each module
      for (let l = 1; l <= 4; l++) {
        await db.execute({
          sql: `INSERT INTO lessons (module_id, title, video_url, duration, sort_order) VALUES (?, ?, ?, ?, ?)`,
          args: [
            moduleId,
            `Lesson ${l}: ${l === 1 ? 'Introduction' : l === 2 ? 'Hands-on Lab' : l === 3 ? 'Deep Dive' : 'Summary & Quiz'}`,
            "https://www.w3schools.com/html/mov_bbb.mp4", // Mock video
            `${5 + l} min`,
            l
          ]
        });
      }
    }
  }

  console.log("\n✅ Seeding complete! Database is now full-fledged.");
}

seed().catch(err => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
