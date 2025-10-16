// Core Module
const path = require("path");

// External Module
const express = require("express");

//Local Module
const errorController = require("./controllers/errorController");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.urlencoded());


app.use(errorController.errorController);

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
