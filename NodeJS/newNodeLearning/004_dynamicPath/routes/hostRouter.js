// External Module
const express = require("express");
const hostRouter = express.Router();

const homeController = require("../controllers/hostController");

hostRouter.get("/addHome", homeController.getAddHome);

hostRouter.post("/addHome", homeController.postAddHome);

hostRouter.get("/hostHomes", homeController.getHostHomes);

hostRouter.get("/editHome/:homeId", homeController.getEditHomes);

exports.hostRouter = hostRouter;
