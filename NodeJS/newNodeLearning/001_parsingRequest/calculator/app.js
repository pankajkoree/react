const http = require("http");
const { calculationHandler } = require("./calculationHandler");

const server = http.createServer(calculationHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
