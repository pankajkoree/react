const clock = document.querySelector(".clock");

setInterval(() => {
  let time = new Date();
  clock.innerText = time.toLocaleTimeString();
}, 1000);
