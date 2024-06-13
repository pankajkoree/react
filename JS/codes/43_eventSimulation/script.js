// -----------------eventSimulation----------------------

const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// ----------------------------------------------------------
// -----------calling the addCardButton for 1000times--------
// this will load the card for 20 card in a second and gets stopped when card count will be 1000 and this stopping phenomenon is done by clearInterval()

// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId);
//   }
//   addCardBtn.click();
// }, 50);

// ----------------------------------------------------------
// -------------------input focus and blur-------------------

// setTimeout(() => {
//   input.focus();
//   console.log("focused on input");
// }, 2000);

// setTimeout(() => {
//   input.blur();
//   console.log("input is blurred");
// }, 4000);

// ----------------------------------------------------------
// -------------------submit form event----------------------

// submitting the form at 3 second

// setTimeout(() => {
//   form.submit();
//   console.log("form submitted");
// }, 3000);

// ----------------------------------------------------------
// -------------------resetting form event-------------------

//---------------------**************------------------------
