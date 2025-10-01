
// External Module
const express = require('express');
const userRouter = express.Router();

const homeController = require("../controllers/homes")

userRouter.get("/",homeController.getHomes)

module.exports = userRouter;