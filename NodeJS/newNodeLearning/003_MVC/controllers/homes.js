const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render("addHome", { pageTitle: "Add Home to airbnb" });
};

exports.postAddHome = (req, res, next) => {
  const home = {
    houseName: req.body.houseName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    photoUrl:
      req.body.photoUrl && req.body.photoUrl.trim() !== ""
        ? req.body.photoUrl
        : "/home.jpg",
  };

  console.log("✅ Home Registration successful:", home);

  registeredHomes.push(home);

  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
};
exports.getHomes = (req, res, next) => {
  console.log("📋 Current homes:", registeredHomes);
  res.render("home", {
    registeredHomes,
    pageTitle: "Airbnb Homes",
    currentPage: "Home",
  });
};
