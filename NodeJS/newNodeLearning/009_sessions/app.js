// Core Module
const path = require("path");

// External Module
const express = require("express");

//Local Module
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const { authRouter } = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/errorController");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.urlencoded());

// this spliting things can be different for different people, do it according to your request
app.use((req, res, next) => {
  req.isLoggedIn = req.get("Cookie")
    ? req.get("Cookie").split("=")[2] === "true"
    : false;

  console.log(req.isLoggedIn);

  next();
});

app.use(authRouter);

app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", storeRouter);
app.use("/host", hostRouter);

app.use(errorController.errorController);

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
