const homeModel = require("../models/homes");
const fs = require("fs");

exports.getAddHome = (req, res, next) => {
  res.render("host/editHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
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
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, description } = req.body;
  console.log(houseName, price, location, rating, description);
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send("invalid image type");
  }
  const photo = req.file.path;
  const home = new homeModel({
    houseName,
    price,
    location,
    rating,
    photo,
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
  const { id, houseName, price, location, rating, description } = req.body;

  homeModel
    .findByIdAndUpdate(id, {
      houseName,
      price,
      location,
      rating,
      description,
    })
    .then((result) => {
      if (req.file) {
        fs.unlink(result.photo, (err) => {
          if (err) {
            console.log("error while deleting files : ", err);
          }
        });
        result.photo = req.file.path;
        return result.save();
      }
      return result;
    })
    .then((ress) => {
      console.log("Home updated : ", ress);
      res.redirect("/host/hostHomes");
    })
    .catch((err) => {
      console.log("error while updating homes : ", err);
      return res.status(500).send("failed to update home");
    });
};

exports.getHostHomes = (req, res, next) => {
  homeModel.find().then((registeredHomes) =>
    res.render("host/hostHomeList", {
      registeredHomes,
      pageTitle: "Host Home list",
      currentPage: "hostHomeList",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
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
