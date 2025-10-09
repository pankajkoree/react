const homeModel = require("../models/homes");
const favouritesModel = require("../models/favourites");

exports.getHomes = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "Airbnb Homes",
      currentPage: "Home",
      isLoggedIn: req.session.isLoggedIn,
    });
  });
};

exports.getHomesList = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/homeList", {
      registeredHomes,
      pageTitle: "Home lis",
      currentPage: "homeList",
      isLoggedIn: req.session.isLoggedIn,
    });
  });
};

exports.getBookings = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "Bookings",
      currentPage: "bookings",
      isLoggedIn: req.session.isLoggedIn,
    });
  });
};

exports.getFavourites = (req, res, next) => {
  favouritesModel
    .find()
    .populate("houseId")
    .then((favourite) => {
      const favouriteHomes = favourite.map((fav) => fav.houseId);
      res.render("store/favouriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourites",
        currentPage: "favourites",
        isLoggedIn: req.session.isLoggedIn,
      });
    });
};

// new way postADDTOFAV
exports.postAddToFavourites = async (req, res, next) => {
  const homeId = req.body.id;

  favouritesModel
    .findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("⚠️ Already marked as favourite:");
      } else {
        fav = new favouritesModel({ houseId: homeId });
        fav.save().then((result) => console.log("Added to favourites", result));
      }
      res.redirect("/store/favourites");
    })
    .catch((error) => {
      console.log("Error while adding to favourites:", error);
    });
};

// new way to remove from fav
exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  favouritesModel
    .findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log(
        "Favourite removed with home id : ",
        homeId,
        "and result : ",
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
        isLoggedIn: req.session.isLoggedIn,
      });
    }
  });
};
