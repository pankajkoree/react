// External Module
const express = require("express");
const storeRouter = express.Router();

const homeController = require("../controllers/storeController");

storeRouter.get("/", homeController.getHomes);

storeRouter.get("/store/homeList", homeController.getHomesList);

storeRouter.get("/store/bookings", homeController.getBookings);
storeRouter.get("/store/favourites", homeController.getFavourites);

storeRouter.get("/home/:homeId", homeController.getHomeDetails);

module.exports = storeRouter;
