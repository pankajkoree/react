const path = require("path");
const express = require("express");
const rootDirectory = require("../utils/pathUtil");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  console.log(
    `Contact us router page with get method as : URL: ${req.url} Method: ${req.method} `
  );
  res.sendFile(path.join(rootDirectory, "views", "contactUs.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(
    `Contact us router page with post method as : URL: ${req.url} Method: ${req.method} `
  );

  res.sendFile(path.join(rootDirectory, "views", "submittedDetails.html"));
});

module.exports = contactRouter;
