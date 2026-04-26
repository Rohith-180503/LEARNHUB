import { createClient } from "@libsql/client";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "learnhub.db");

// file: URL for local SQLite file — no server needed
export const db = createClient({ url: `file:${DB_PATH}` });

/** Run schema migrations on startup */
export async function initDb() {
  // Users
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      name          TEXT    NOT NULL,
      email         TEXT    UNIQUE NOT NULL,
      password_hash TEXT,
      google_id     TEXT    UNIQUE,
      avatar_url    TEXT,
      role          TEXT    NOT NULL DEFAULT 'student',
      created_at    TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `);

  // Courses
  await db.execute(`
    CREATE TABLE IF NOT EXISTS courses (
      id               INTEGER PRIMARY KEY AUTOINCREMENT,
      title            TEXT    NOT NULL,
      instructor       TEXT    NOT NULL,
      price            REAL    NOT NULL,
      img              TEXT,
      category         TEXT    NOT NULL,
      description      TEXT,
      duration         TEXT,
      level            TEXT,
      rating           REAL    DEFAULT 0,
      students_enrolled INTEGER DEFAULT 0,
      created_at       TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `);

  // Modules
  await db.execute(`
    CREATE TABLE IF NOT EXISTS modules (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id  INTEGER NOT NULL,
      title      TEXT    NOT NULL,
      sort_order INTEGER NOT NULL,
      FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
    )
  `);

  // Lessons
  await db.execute(`
    CREATE TABLE IF NOT EXISTS lessons (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id  INTEGER NOT NULL,
      title      TEXT    NOT NULL,
      video_url  TEXT,
      duration   TEXT,
      sort_order INTEGER NOT NULL,
      FOREIGN KEY (module_id) REFERENCES modules (id) ON DELETE CASCADE
    )
  `);

  // Enrollments (Ownership)
  await db.execute(`
    CREATE TABLE IF NOT EXISTS enrollments (
      user_id     INTEGER NOT NULL,
      course_id   INTEGER NOT NULL,
      enrolled_at TEXT    NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, course_id),
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
      FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
    )
  `);

  // Progress
  await db.execute(`
    CREATE TABLE IF NOT EXISTS progress (
      user_id      INTEGER NOT NULL,
      lesson_id    INTEGER NOT NULL,
      completed    INTEGER DEFAULT 0, -- 0 or 1
      updated_at   TEXT    NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, lesson_id),
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
      FOREIGN KEY (lesson_id) REFERENCES lessons (id) ON DELETE CASCADE
    )
  `);

  // Server-side Cart
  await db.execute(`
    CREATE TABLE IF NOT EXISTS cart_items (
      user_id    INTEGER NOT NULL,
      course_id  INTEGER NOT NULL,
      added_at   TEXT    NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, course_id),
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
      FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE
    )
  `);

  // Password Resets
  await db.execute(`
    CREATE TABLE IF NOT EXISTS password_resets (
      email      TEXT    PRIMARY KEY,
      token      TEXT    NOT NULL,
      expires_at TEXT    NOT NULL
    )
  `);

  console.log("✅ SQLite database ready at:", DB_PATH);
}
