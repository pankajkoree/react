const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  userType: {
    type: String,
    required: true,
    enum: ["guest", "host"],
    default: "guest",
  },
});

module.exports = mongoose.model("User", userSchema);
