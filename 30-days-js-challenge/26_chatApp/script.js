const { Server } = require("http");
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });
const messageInput = document.querySelector(".input-feild");
const sendMessageButton = document.querySelector(".btn1");

console.log(messageInput);
console.log(sendMessageButton);

server.on("connection", (ws) => {
  ws.send("connection successful...");

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  function handleMessage(message) {
    console.log(message);
    ws.send("sever side");
  }
  handleMessage("handling message");
});

const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to server");
};

ws.onmessage = (message) => {
  console.log("Received: " + message.data);
};
