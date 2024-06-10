// --------------append VS appendChild----------------------

const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// --------------------------------------------------------
// it appends this h1 in the last of the container
// container.appendChild(h1);

// --------------------------------------------------------

// what if we want to keep the original as that and make a copy

// container.appendChild(h1.cloneNode(true)); //here in the cloneNode function the params true represents deep clone meaning that each and every text and content inside that element will be copied and if we don't pass anything to that, it just copy the tag normally like as below:

// container.appendChild(h1.cloneNode());

// --------------------------------------------------------
// container.appendChild(card.cloneNode(true)); //this will copy the exact card item and duplicates it

// --------------------------------------------------------

// my little bit bugged code
// const newCard = container.appendChild(card.cloneNode());

// for (let i = 3; i < 100; i++) {
//   newCard.innerText = i;
//   container.appendChild(newCard.cloneNode(true));
// }

// --------------------------------------------------------

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.appendChild(newCard);
// }

// --------------------------------------------------------

// appendChild return the same thing which is being apended but append only appends the element but doesn't reutrn anything, by default the return in it is undefined

// --------------------------------------------------------
// using the appendChild we can append the element as well as on the fly things but can't append the text only but append can does

// using append, we can append multiple element using appennd as
container.append("hello", h1, "world");

// --------------*****************-------------------------
