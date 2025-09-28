const express = require("express");

const app = express();

const PORT = 3000;

const homeRouter = require("./routes/homeRouter");

app.use(homeRouter);

app.get("/contact-us", (req, res, next) => {});

app.post("/contact-us", (req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
