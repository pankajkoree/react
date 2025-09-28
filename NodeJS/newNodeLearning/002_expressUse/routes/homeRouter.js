const path = require("path");
const express = require("express");
const rootDirectory = require("../utils/pathUtil");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
  console.log(`home page handling , URL : ${req.url}`);

  res.sendFile(path.join(rootDirectory, "views", "homePage.html"));
});

module.exports = homeRouter;
