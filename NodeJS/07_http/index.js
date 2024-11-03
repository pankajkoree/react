import http from "http";
import fs from "fs";
import url from "url";

const server = http.createServer((req, res) => {
  const log = `${new Date()} : request on url ${req.url} \n`;
  // parsing the url to get the values
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      case "/about":
        res.end("about us");
        break;
      case "/contact":
        res.end("contact page");
        break;
      default:
        res.end("404 not found");
    }
  });
});

server.listen(8000, () => {
  console.log("server started on port 8000");
});
