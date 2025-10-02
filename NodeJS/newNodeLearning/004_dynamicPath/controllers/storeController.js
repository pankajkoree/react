const homeModel = require("../models/homes");

exports.getHomes = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) =>
    res.render("store/index", {
      registeredHomes,
      pageTitle: "Airbnb Homes",
      currentPage: "Home",
    })
  );
};

exports.getHomesList = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) =>
    res.render("store/homeList", {
      registeredHomes,
      pageTitle: "Home list",
      currentPage: "homeList",
    })
  );
};

exports.getBookings = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) => {
    res.render("store/favouriteList", {
      registeredHomes,
      pageTitle: "Favourites",
      currentPage: "favourites",
    });
  });
};
