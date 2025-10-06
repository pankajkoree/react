const homeModel = require("../models/homes");
const favouritesModel = require("../models/favourites");

exports.getHomes = (req, res, next) => {
  homeModel.fetchAllThings().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "Airbnb Homes",
      currentPage: "Home",
    });
  });
};

exports.getHomesList = (req, res, next) => {
  homeModel.fetchAllThings().then((registeredHomes) => {
    res.render("store/homeList", {
      registeredHomes,
      pageTitle: "Home lis",
      currentPage: "homeList",
    });
  });
};

exports.getBookings = (req, res, next) => {
  homeModel.fetchAllThings().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  favouritesModel.getFavourites().then((favourite) => {
    favourite = favourite.map((fav) => fav.houseId);
    homeModel.fetchAllThings().then((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favourite.includes(home._id.toString())
      );
      res.render("store/favouriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const favouriteModel = new favouritesModel(homeId);
  favouriteModel
    .save()
    .then(() => {
      console.log("Added to favourites");
    })
    .catch((error) => {
      console.log("Error while adding to favourites : ", error);
    })
    .finally(() => {
      res.redirect("/store/favourites");
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  favouritesModel
    .deleteById(homeId)
    .then((result) => {
      console.log(
        "Favourite removed with home id : ",
        homeId,
        "result : ",
        result
      );
    })
    .catch((error) => {
      console.log("Error while removing from favourites : ", error);
    })
    .finally(() => {
      res.redirect("/store/favourites");
    });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  homeModel.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/");
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
