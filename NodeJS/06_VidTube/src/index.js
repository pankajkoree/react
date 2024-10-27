import { app } from "./app.js";
import logger from "./logger.js";
import morgan from "morgan";
import connectDB from "./db/index.js";

const morganFormat = ":method :url :status :response-time ms";

const PORT = process.env.PORT;

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

// to only run when the connection with mongoDB is successful
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection error : ${error}`);
  });
