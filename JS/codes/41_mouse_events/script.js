// -----------------mouse events-----------------------

const h1 = document.querySelector("h1");
const addCardButton = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// addCardButton.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// --------------------------------------------------------
// --------------------------------------------------------

// ------------------mouse down-------------------------
// when we click down the mouse it gets fired

// addCardButton.addEventListener("mousedown", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse up-------------------------
// when we release the mouse, it gets fired
// addCardButton.addEventListener("mouseup", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse enter-------------------------
// when mouse get over the that element, it gets fired

// addCardButton.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse leave-------------------------
// when mouse leaves the element area, it gets fired
// addCardButton.addEventListener("mouseleave", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse move-------------------------
// when the mouse moves in the area of the element
// addCardButton.addEventListener("mousemove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse out---------------------------

// addCardButton.addEventListener("mouseout", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ------------------mouse over---------------------------

addCardButton.addEventListener("mouseover", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("addCardButton");
  newCard.innerText = count++;
  container.append(newCard);
});
// -------------------********************-----------------
