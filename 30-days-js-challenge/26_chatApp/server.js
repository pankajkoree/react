const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
  ws.send("connection successful...");

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  function handleMessage(message) {
    console.log(message);
    ws.send("server side");
  }
  handleMessage("handling message");
});
