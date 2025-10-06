const homeModel = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/editHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHomes = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  homeModel.findOne({ _id: homeId }).then((home) => {
    if (!home) {
      console.log("Home not found while editing home");
      res.redirect("/host/hostHomes");
    }
    res.render("host/editHome", {
      home: home,
      editing: editing,
      pageTitle: "Edit your home",
      currentPage: "hostHomeList",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;
  const home = new homeModel({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  });
  home
    .save()
    .then(() => {
      console.log("Home added successfully");
      res.redirect("/");
    })
    .catch((error) => {
      console.log("Error while adding homes : ", error);
    });
};

exports.postEditHomes = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;

  homeModel
    .findByIdAndUpdate(id, {
      houseName,
      price,
      location,
      rating,
      photoUrl,
      description,
    })
    .then((result) => {
      console.log("Home updated : ", result);
    });
  res.redirect("/host/hostHomes");
};

exports.getHostHomes = (req, res, next) => {
  homeModel.find().then((registeredHomes) =>
    res.render("host/hostHomeList", {
      registeredHomes,
      pageTitle: "Host Home list",
      currentPage: "hostHomeList",
    })
  );
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  homeModel
    .deleteOne({ _id: homeId })
    .then(() => {
      res.redirect("/host/hostHomes");
    })
    .catch((error) => {
      console.log(`Error while deleting home : `, error);
    });
};
