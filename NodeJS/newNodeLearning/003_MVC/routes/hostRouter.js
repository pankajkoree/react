// External Module
const express = require("express");
const hostRouter = express.Router();

const homeRouter = require("../controllers/homes");

hostRouter.get("/add-home", homeRouter.getAddHome);

hostRouter.post("/add-home", homeRouter.postAddHome);

exports.hostRouter = hostRouter;
