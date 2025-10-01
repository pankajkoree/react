const homeModel = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home to airbnb" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new homeModel(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
};
exports.getHomes = (req, res, next) => {
  homeModel.fetchAllThings((registeredHomes) =>
    res.render("home", {
      registeredHomes,
      pageTitle: "Airbnb Homes",
      currentPage: "Home",
    })
  );
};
