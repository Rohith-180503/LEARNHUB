import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FAKE_DATA_PATH = path.join(__dirname, "frontend", "src", "fakeData", "fakeData.js");
const OUTPUT_PATH = path.join(__dirname, "backend", "coursesData.json");

const content = fs.readFileSync(FAKE_DATA_PATH, "utf-8");
const cleanContent = content.replace("export default", "const data = ") + "\n console.log(JSON.stringify(data));";

// We'll just extract the data part manually since it's simple
const arrayMatch = content.match(/const fakeData = (\[[\s\S]*?\]);/);
if (arrayMatch) {
    // This is JS, not JSON, so we can't JSON.parse it directly.
    // But we can write it to a file.
    fs.writeFileSync(OUTPUT_PATH, arrayMatch[1]);
    console.log("✅ coursesData.json created (as JS-like array string)");
}
