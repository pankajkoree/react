const express = require("express");

const app = express();

const PORT = 3000;

// app.use((req, res, next) => {
//   console.log(
//     `First dummy middleware with request url : ${req.url} and method ${req.method}`
//   );
//   next();
// });

// app.use((req, res, next) => {
//   console.log(
//     `Second dummy middleware with request url : ${req.url} and method ${req.method}`
//   );
//   next();
// });

// app.use((req,res,next) => {
//     console.log(`Last dummy middleware with request url : ${req.url} and method ${req.method}`);
//     next()
//     res.send()
// })

app.get("/", (req, res, next) => {
  res.send(`
        <h1>Welcome to the page</h1>
        `);
  next();
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <html>
        <body>
        <h1>Please enter your details </h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name"
        id="name">

        <input type="text" name="email"
        id="email">

        <br>
        <br>

        <button type="submit">submit</button>
        </form>
        </body>
        </html>
        `);
});

app.post("/contact-us", (req, res, next) => {
  res.send("thanks");
});

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
