const express = require("express");
const path = require("path");
const rootDirectory = require("./utils/pathUtil");

const app = express();

const PORT = 3000;

const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
  console.log(`Page not found, URL: ${req.url} Method: ${req.method}`);
  res.sendFile(path.join(rootDirectory, "views", "notFound.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
