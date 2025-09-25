const sumHandler = (req, res) => {
  let chunkData = [];
  req.on("data", (chunk) => chunkData.push(chunk));

  req.on("end", () => {
    const completeData = Buffer.concat(chunkData).toString();

    const valueWeGot = new URLSearchParams(completeData);

    let jsonData = Object.fromEntries(valueWeGot);

    const sum = Number(jsonData.first) + Number(jsonData.second);
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>calculate-result</title>
  </head>
  <body>
    <h2>sum = ${sum}</h2>
    
  </body>
</html>

    `);
    return res.end();
  });
};

exports.sumHandler = sumHandler;
