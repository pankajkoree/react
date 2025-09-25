const { sumHandler } = require("./sum");

const calculationHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
  </head>
  <body>
    <h1>Welcome to home page</h1>
    <a href="/calculator">Go to calculator page</a>
  </body>
</html>

            `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>calculator page</title>
  </head>
  <body>
  <h1>Calculator</h1>
    <form action="/calculate-result" method="POST">
      <input
        type="text"
        name="first"
        id="first"
        placeholder="enter first value"
      />
      <input
        type="text"
        name="second"
        id="second"
        placeholder="enter second value"
      />
      <br />
      <br />
      <button type="submit">Sum</button>
    </form>
  </body>
</html>

        `);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home page</title>
  </head>
  <body>
    <h1>404 not found</h1>
    <a href="/">Go to home page</a>
  </body>
</html>

    `);
    return res.end();
  }
};

exports.calculationHandler = calculationHandler;
