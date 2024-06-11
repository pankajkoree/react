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

// const img = document.querySelector("img");
// for (let i = 2; i <= 100; i++) {
//   const newImage = img.cloneNode();
//   newImage.src =
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
//     i +
//     ".png";

//   container.appendChild(newImage);
// }

// -------------------------------------------------------

// the element which will be created, that doesn't exist by default in html, will  be an inline element
// EG:  <hi>pk</hi> // this will be inline elements as: when we see the things in computed tab for this item the resutl will be
// display inline
// height auto
// width auto

//---------------------------------------------------------

// creating a tag and displaying it in file

// const paragraph = document.createElement("p");
// paragraph.innerText = "hello";
// paragraph.classList.add("paragraphElement");
// paragraph.id = "para";
// container.append(paragraph);

// paragraph.innerText = "hello"; //this will instantly gets reflected coz DOM already have loaded that element in memory  //but its not a good practice to add innertext after appending  //so will do before appending

//---------------------------------------------------------
// ---------------important exercise---------------------
// creating an img tag and giving src attribute

// const img = document.createElement("img");
// img.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// container.append(img);

// making the above image 100 times
// for (let i = 2; i <= 100; i++) {
//   const newImg = img.cloneNode();
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.appendChild(newImg);
// }

// another good way
// for (let i = 1; i <= 200; i++) {
//   const img = document.createElement("img");
//   img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.append(img);
// }

//---------------------------------------------------------
//---------------------------------------------------------

// creating the img tag and each img tag's below there's should be a p tag indicating the number of image

//---------------------------------------------------------
//---------------------------------------------------------

const div = document.createElement("div");
div.className = "image-container";
div.style.textAlign = "center";
container.append(div);

for (let i = 1; i <= 100; i++) {
  const img = document.createElement("img");
  const p = document.createElement("p");

  div.append(img, p);
}

// ----------------*****************------------------------
