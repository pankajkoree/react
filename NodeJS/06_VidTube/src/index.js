import { app } from "./app.js";
import logger from "./logger.js";
import morgan from "morgan";

const morganFormat = ":method :url :status :response-time ms";

// port
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

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
