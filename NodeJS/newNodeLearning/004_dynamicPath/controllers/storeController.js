const homeModel = require("../models/homes");
const favouritesModel = require("../models/favourites");

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
  favouritesModel.getFavourites((favourites) => {
    homeModel.fetchAllThings((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favouriteList", {
        favouriteHomes,
        pageTitle: "Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourites = (req, res, next) => {
  favouritesModel.addToFavourites(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourites : ", error);
    }
    res.redirect("/store/favourites");
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  favouritesModel.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while removing from favourite : ", error);
    }
    res.redirect("/store/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  homeModel.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      console.log("Home details found ", home);

      res.render("store/homeDetails", {
        home,
        pageTitle: "home details",
        currentPage: "Home",
      });
    }
  });
};
