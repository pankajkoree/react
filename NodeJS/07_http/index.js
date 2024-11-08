import http from "http";
import fs from "fs";
import url from "url";
import express from "express";

const app = express();

// express
app.get("/", (req, res) => {
  return res.send("on home page using express");
});

app.get("/about", (req, res) => {
  return res.send("on about page using express");
});

app.get("/contact", (req, res) => {
  return res.send("on contact page using express");
});

// using http of nodejs
function handler(req, res) {
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
        if (req.method === "GET") res.end("get method triggered");
        else if (req.method === "POST") res.end("success");
        break;
      case "/contact":
        res.end("contact page");
        break;
      default:
        res.end("404 not found");
    }
  });
}

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server started on port 8000");
});
