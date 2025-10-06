// Core Module
const path = require("path");

// External Module
const express = require("express");

//Local Module
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/errorController");
const { mongoDBConnect } = require("./utils/databaseUtil");

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", storeRouter);
app.use("/host", hostRouter);

app.use(errorController.errorController);

const PORT = 3000;

mongoDBConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
