const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 2; i <=100; i++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.append(newCard)
// }

// --------------fetching 100 pokemon character-----------

const img = document.querySelector("img");
for (let i = 2; i <= 100; i++) {
  const newImage = img.cloneNode();
  newImage.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    i +
    ".png";

  container.appendChild(newImage);
}
