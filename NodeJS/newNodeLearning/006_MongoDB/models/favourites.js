const { getDatabase } = require("../utils/databaseUtil");

module.exports = class Favourites {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = getDatabase();
    return db.collection("favourites").insertOne(this);
  }

  static getFavourites() {
    const db = getDatabase();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(deleteHomeId) {
    const db = getDatabase();
    return db.collection("favourites").deleteOne({ houseId: deleteHomeId });
  }
};
