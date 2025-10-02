const homeModel = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", { pageTitle: "Add Home to airbnb" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new homeModel(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/homeAdded", { pageTitle: "Home Added Successfully" });
};

