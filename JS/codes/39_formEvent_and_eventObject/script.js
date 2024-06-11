// --------form Event and event Object-----------------------

// -----------------normal click events-----------------
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("click", () => {
  console.log("clicked");
});
// --------------------------------------------------------

// -------------form events--------------------------------
// ----------------------on input------------------------
// let inputValue;
// const paragraph = document.querySelector("p");
// usernameInput.addEventListener("input", (e) => {
//   console.log(e);
//   inputValue = e.target.value;
//   paragraph.innerText = inputValue;
// });

// --------------------------------------------------------
// ----------------------on change------------------------
// get fired, when we click outside of that input
// let inputValue;
// const paragraph = document.querySelector("p");
// usernameInput.addEventListener("change", (e) => {
//   console.log(e);
//   inputValue = e.target.value;
//   paragraph.innerText = inputValue;
// });

// ----------------------on focus------------------------
// when we click, this event gets fired coz focus means we focusing on input
let inputValue;
const paragraph = document.querySelector("p");
usernameInput.addEventListener("focus", (e) => {
  console.log(e.type);
  inputValue = e.target.value;
  paragraph.innerText = inputValue;
});
// ---------------*****************-------------------------
