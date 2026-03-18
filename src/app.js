import express from "express";
import cors from "cors";

import ctuIIRouter from "./app/routes/ctuII.route.js";
import diRouter from "./app/routes/di.route.js";
import db from "./app/database/database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// /api/ctuII/
app.use("/api/ctuII/", ctuIIRouter);

// /api/di/
app.use("/api/di/", diRouter);

// Middleware xu ly loi
app.use((req, res, next) => {
  return next(ApiError(404, "Không tìm thấy tài nguyên"));
});

// Xu ly loi tap trung
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Có lỗi từ phía Server",
  });
});

// Connect to PostgreSQL database
db.connect();

export default app;
