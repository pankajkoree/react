import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const log = `${new Date()} : request \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("request added to log");
  });
});

server.listen(8000, () => {
  console.log("server started on port 8000");
});
