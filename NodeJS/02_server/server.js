const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );

  console.log(filePath);

  const extName = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/js",
  };

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 : File not found");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-16le");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
