const { ObjectId } = require("mongodb");
const { getDatabase } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(_id, houseName, price, location, rating, photoUrl, description) {
    this._id = _id ? String(_id) : null;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    const db = getDatabase();
    const updatedFields = {
      houseName: this.houseName,
      price: this.price,
      location: this.location,
      rating: this.rating,
      photoUrl: this.photoUrl,
      description: this.description,
    };

    if (this._id) {
      // update case
      return db
        .collection("homes")
        .updateOne({ _id: new ObjectId(this._id) }, { $set: updatedFields });
    } else {
      // insert case
      return db.collection("homes").insertOne(this);
    }
  }

  static fetchAllThings() {
    const db = getDatabase();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDatabase();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static deleteById(homeId) {
    const db = getDatabase();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
