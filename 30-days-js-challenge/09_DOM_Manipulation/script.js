// task 1: select an html element by its ID and change its text content

console.log("<-----------task 1-------------->");
const h1 = document.getElementById("h1");

h1.textContent = "After the DOM Manipulation";

// task 2: select an html element by its class and change its background color

console.log("<-----------task 2-------------->");

const h2 = document.getElementsByClassName("h2")[0];
h2.style.backgroundColor = "red";

// task 3: create a new div element with some text content and append it to the body
console.log("<-----------task 3-------------->");
const newDiv = document.createElement("div");
newDiv.textContent = "Div created using JS";
document.body.append(newDiv);

// task 4: create a new li element and add it to an existing ul list
console.log("<-----------task 4-------------->");
const fruitElements = ["Mango", "Banana", "Orange", "Apple"];
const ul = document.querySelector(".ul");

fruitElements.forEach((fruit) => {
  const li = document.createElement("li");
  li.innerText = fruit;
  ul.append(li);
});

// task 5: select an html element and remove it from the DOM
console.log("<-----------task 5-------------->");
const removeElement = document.querySelector(".remove");
document.body.removeChild(removeElement);

// task 6: remove the last child of a specific html element

console.log("<-----------task 6-------------->");
const ol = document.getElementsByClassName("li");

document.body.removeChild(ol[ol.length - 1]);

// task 7: select an html element and change one of its attribute
console.log("<-----------task 7-------------->");
const anchor = document.querySelector(".anchor");
anchor.href = "https://chaicode.com/";

// task 8: add and remove a CSS class to/from an HTML element
console.log("<-----------task 8-------------->");
const section = document.querySelector("section");
section.classList.add("section");
section.classList.add("section_2");

section.classList.remove("section_2");

// task 9: add a click event listener to a button that changes the text content of a paragraph
console.log("<-----------task 8-------------->");
const p = document.querySelector(".onButtonChange");
const button1 = document.querySelector("#btn1");

button1.addEventListener("click", () => {
  p.textContent = "After the click of the button";
});

// task 10: add a mouseover event listener to an element that changes its border color

p.addEventListener("mouseover", () => {
  p.style.border = "5px solid green";
});
