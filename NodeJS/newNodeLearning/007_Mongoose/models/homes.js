const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Home", homeSchema);
