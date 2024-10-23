import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("express js server");
});

app.get("/pankaj", (req, res) => {
  res.send("welcome pankaj");
});
app.get("/world", (req, res) => {
  res.send("hello world");
});

app.get("/github", (req, res) => {
  res.send("github.com/pankajkoree");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
