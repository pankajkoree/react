const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: String,
    ref: "Home",
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Favourites", favouriteSchema);
