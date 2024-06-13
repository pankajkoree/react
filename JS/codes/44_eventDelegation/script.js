// ------------------eventDelegation----------------------
// the way of optimizing the code
const addCardBtn = document.querySelector(".add-card");
const container = document.querySelector(".container");
const cardsList = document.querySelectorAll(".card");

let count = 1;

// ----------------------------------------------------------
// --------1st way to remove the card by clicking on it------

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;

//   //   removing the newCard when clicked on that card
//   newCard.addEventListener("click", () => {
//     newCard.remove();
//     console.log("card removed");
//   });
//   // it removes the element but its not a good way to remove means the page having more addEventListener will affect the performance
//   container.append(newCard);
// });

// ----------------------------------------------------------
// --------1st way to remove the card by clicking on it------

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;

  container.append(newCard);
});

// rather than adding click event on each element but on main container and using its child to remove
container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});

// ----------------****************-------------------------
