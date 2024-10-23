const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("node server");
  } else if (req.url === "/pankaj") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("pankaj server");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 server not found");
  }
});

// listening to the server
server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
