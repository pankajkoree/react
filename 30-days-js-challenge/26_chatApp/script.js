const messageInput = document.querySelector("#messageInput");
const sendMessageButton = document.querySelector(".btn1");

const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to server");
};

ws.onmessage = (message) => {
  console.log("Received: " + message.data);
};

sendMessageButton.addEventListener("click", () => {
  let message = messageInput.value;
  const messageBlock = document.querySelector("#messageBlock");
  messageBlock.innerHTML += `${message}  <br>`
  messageInput.value = " "
});
