import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { initDb } from "./db.js";
import { seed } from "./seed.js";
import authRouter from "./routes/auth.js";
import coursesRouter from "./routes/courses.js";
import enrollmentsRouter from "./routes/enrollments.js";
import progressRouter from "./routes/progress.js";
import cartRouter from "./routes/cart.js";
import paymentsRouter from "./routes/payments.js";

const app = express();
const PORT = process.env.PORT ?? 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  process.env.FRONTEND_URL,
]
  .filter(Boolean)
  .map((url) => url.replace(/\/$/, ""));

app.use(
  cors({
    origin: true, // This will reflect the request origin, allowing all
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/api/auth", authRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/enrollments", enrollmentsRouter);
app.use("/api/progress", progressRouter);
app.use("/api/cart", cartRouter);
app.use("/api/payments", paymentsRouter);

app.get("/api/health", (_, res) =>
  res.json({ status: "ok", timestamp: new Date().toISOString() })
);

// ── 404 fallback ──────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
});

// ── Bootstrap ─────────────────────────────────────────────────────────────────
async function bootstrap() {
  await initDb(); 
  await seed(); // Auto-seed if courses table is empty
  app.listen(PORT, () => {
    console.log(`\n🚀 LearnHub API running at http://localhost:${PORT}`);
    console.log(`   Health: http://localhost:${PORT}/api/health\n`);
  });
}

bootstrap().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
