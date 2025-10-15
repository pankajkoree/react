// Core Module
const path = require("path");

// External Module
const express = require("express");
const multer = require("multer");

//Local Module
const storeRouter = require("./routes/storeRouter");
// import storeRouter from "./routes/storeRouter";
const { hostRouter } = require("./routes/hostRouter");
const { authRouter } = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/errorController");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
app.use(express.urlencoded());

const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

const randomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// multerOptions is the destination of the image saving folder

const fileStorageOptions = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + "-" + file.originalname);
  },
});
const multerOptions = {
  fileStorageOptions,
};
app.use(multer(multerOptions).single("photo"));
app.use(express.static(path.join(rootDir, "public")));
app.use(
  session({
    secret: "airbnbreplica",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use(authRouter);

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", storeRouter);
app.use("/host", hostRouter);

app.use(errorController.errorController);

const PORT = 3000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
