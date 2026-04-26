import { createClient } from "@libsql/client";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "learnhub.db");

// file: URL for local SQLite file — no server needed
export const db = createClient({ url: `file:${DB_PATH}` });

/** Run schema migrations on startup */
export async function initDb() {
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
  console.log("✅ SQLite database ready at:", DB_PATH);
}
