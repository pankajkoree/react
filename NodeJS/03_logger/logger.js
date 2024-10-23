const fs = require("fs");
const os = require("os");

// its a class
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();

const logFile = "eventlog.txt";

const logTofile = (event) => {
  const logMessage = `${new Date().toLocaleString()} - ${event.message} \n`;

  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logTofile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;

  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 5000);

logger.log("Application started");
logger.log("Events : ");
