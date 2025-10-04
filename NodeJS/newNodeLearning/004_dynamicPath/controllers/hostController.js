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

  homeModel.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found while editing homes");
      return res.redirect("/host/hostHomeList");
    }
    res.render("host/editHome", {
      editing: editing,
      home: home,
      pageTitle: "Add Home to airbnb",
      currentPage: "addHome",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new homeModel(houseName, price, location, rating, photoUrl);
  home.save();

  res.redirect("/host/hostHomes");
};

exports.postEditHomes = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new homeModel(houseName, price, location, rating, photoUrl);
  home.id = id;

  home.save();
  res.redirect("/host/hostHomes");
};

exports.getHostHomes = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) =>
    res.render("host/hostHomeList", {
      registeredHomes,
      pageTitle: "Host Home list",
      currentPage: "hostHomeList",
    })
  );
};
