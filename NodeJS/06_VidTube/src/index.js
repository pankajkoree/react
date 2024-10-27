import { app } from "./app.js";
import logger from "./logger.js";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

dotenv.config();

// port
const PORT = process.env.PORT;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

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

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
