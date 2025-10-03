const fs = require("fs");
const path = require("path");
const rootDirectory = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDirectory, "data", "favourites.json");

module.exports = class Favourites {
  static addToFavourites(homeId, callback) {
    Favourites.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked as favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
