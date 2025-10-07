const homeModel = require("../models/homes");
const favouritesModel = require("../models/favourites");

exports.getHomes = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "Airbnb Homes",
      currentPage: "Home",
    });
  });
};

exports.getHomesList = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/homeList", {
      registeredHomes,
      pageTitle: "Home lis",
      currentPage: "homeList",
    });
  });
};

exports.getBookings = (req, res, next) => {
  homeModel.find().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "Bookings",
      currentPage: "bookings",
    });
  });
};

// old way to get Favourites
// exports.getFavourites = (req, res, next) => {
//   favouritesModel.find().then((favourite) => {
//     favourite = favourite.map((fav) => fav.houseId);
//     homeModel.find().then((registeredHomes) => {
//       const favouriteHomes = registeredHomes.filter((home) =>
//         favourite.includes(home._id.toString())
//       );
//       res.render("store/favouriteList", {
//         favouriteHomes: favouriteHomes,
//         pageTitle: "Favourites",
//         currentPage: "favourites",
//       });
//     });
//   });
// };

// new way to get favourites

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
      });
    });
};

// it works for adding to fav but for exisitng it not so theres next one
// exports.postAddToFavourites = (req, res, next) => {
//   const homeId = req.body.id;

//   if (!homeId) {
//     console.log("Home id not found");
//     return res.redirect("/store/favourites");
//   }

//   const favouriteModel = new favouritesModel({ houseId: homeId });
//   favouriteModel
//     .save()
//     .then(() => {
//       console.log("Added to favourites");
//     })
//     .catch((error) => {
//       console.log("Error while adding to favourites : ", error);
//     })
//     .finally(() => {
//       res.redirect("/store/favourites");
//     });
// };

// exports.postAddToFavourites = async (req, res, next) => {
//   const homeId = req.body.id;

//   if (!homeId) {
//     console.log("Home id not found");
//     return res.redirect("/store/favourites");
//   }

//   try {
//     const existingFavourite = await favouritesModel.findOne({
//       houseId: homeId,
//     });

//     if (existingFavourite) {
//       console.log("⚠️ Already marked as favourite:", homeId);
//     } else {
//       const favourite = new favouritesModel({ houseId: homeId });
//       await favourite.save();
//       console.log("✅ Added to favourites:", homeId);
//     }
//   } catch (error) {
//     console.log("Error while adding to favourites:", error);
//   } finally {
//     res.redirect("/store/favourites");
//   }
// };

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

// old way
// exports.postRemoveFromFavourite = (req, res, next) => {
//   const homeId = req.params.homeId;
//   favouritesModel
//     .deleteOne({ houseId: homeId })
//     .then((result) => {
//       console.log(
//         "Favourite removed with home id : ",
//         homeId,
//         "and result : ",
//         result
//       );
//     })
//     .catch((error) => {
//       console.log("Error while removing from favourites : ", error);
//     })
//     .finally(() => {
//       res.redirect("/store/favourites");
//     });
// };

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
      });
    }
  });
};
