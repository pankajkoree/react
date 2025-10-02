// External Module
const express = require("express");
const userRouter = express.Router();

const homeController = require("../controllers/storeController");

userRouter.get("/", homeController.getHomes);

userRouter.get("/store/homeList", homeController.getHomesList);

userRouter.get("/store/bookings", homeController.getBookings);
userRouter.get("/store/favourites", homeController.getFavourites);

module.exports = userRouter;
