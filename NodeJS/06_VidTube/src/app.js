import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { cookieParser } from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// common middleware
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));

app.use(cookieParser());

// routes
import healthCheckRouter from "./routes/healthCheck.route.js";

app.use("/api/v1/healthCheck", healthCheckRouter);

export { app };
