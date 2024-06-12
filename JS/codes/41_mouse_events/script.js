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

// addCardButton.addEventListener("mouseover", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("addCardButton");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// --------------------------------------------------------
// --------------------------------------------------------

// ---------------- understanding some more mouse events where mouse word isn't attached---------------------------

// ----------------wheel event--------------------------
// wheel events gets triggered on any element while wheelling
// addCardButton.addEventListener("wheel", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ----------------scroll event--------------------------

// scroll event gets triggered when we scroll the page or the item, generally it scolls the whole document
// document.addEventListener("scroll", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ----------------touch start-------------------------
// get triggered whenever we touch the screen on mobile devices
// addCardButton.addEventListener("touchstart", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ----------------touch end-------------------------
// touch end means when release the touch it gets triggered
// addCardButton.addEventListener("touchend", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// ----------------touch move-------------------------
// it is like how we move something up and down on phone
// addCardButton.addEventListener("touchmove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// -----------------------drag-------------------------

// it gets triggered whenever we drag the item
// it works on desktop only not on phone
h1.addEventListener("drag", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// -------------------********************-----------------
