// External Module
const express = require("express");
const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getHomes);

storeRouter.get("/store/homeList", storeController.getHomesList);

storeRouter.get("/store/bookings", storeController.getBookings);
storeRouter.get("/store/favourites", storeController.getFavourites);

storeRouter.get("/home/:homeId", storeController.getHomeDetails);

storeRouter.post("/store/favourites", storeController.postAddToFavourites);

storeRouter.post(
  "/favourites/delete/:homeId",
  storeController.postRemoveFromFavourite
);

module.exports = storeRouter;
