// -----------------eventSimulation----------------------

const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// -------------calling the addCardButton for 1000times------
// this will load the card for 10 card in a second

const intervalId = setInterval(() => {
  if (count > 999) {
    clearInterval(intervalId);
  }
  addCardBtn.click();
}, 50);

// clearing the interval

// clearInterval(intervalId);

//---------------------**************------------------------
