// task 1: add a click event listener to a button that changes the text content of a paragraph
const task1p = document.querySelector(".task1p");
const task1btn = document.querySelector(".task1btn");

task1btn.addEventListener("click", () => {
  task1p.textContent = "After the click event fired";
});

// task 2: add a double click event listener to an image that toggles its visibility
const task2Img = document.querySelector(".task2img");
task2Img.addEventListener("dblclick", () => {
  task2Img.style.display === "none"
    ? (task2Img.style.display = "block")
    : (task2Img.style.display = "none");
});

// task 3: add a mouseover event listener to an element that changes its background color

const task3p = document.querySelector(".task3p");
task3p.addEventListener("mouseover", () => {
  task3p.textContent = "after the mouseover";
  task3p.style.backgroundColor = "red";
});

// task 4: add a mouseout event listener to an element that resets its background color
task3p.addEventListener("mouseout", () => {
  task3p.textContent = "after the mouseout";
  task3p.style.backgroundColor = "white";
});

// task 5: add a keydown event listener to an input field that logs the key pressed to the console
const task5Input = document.querySelector("#task5input");

task5Input.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// task 6: add a keyup event listener to an input field that displays the current value in a paragraph
const task6p = document.querySelector(".task6p");
task5Input.addEventListener("keyup", (e) => {
  task6p.textContent = e.target.value;
});

// task 7: add a form submit event listener to a form that prevents the default submission and log the data to the console
const userName = document.querySelector("#username");
const task7btn = document.querySelector("#task7btn");
task7btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`Username : ${userName.value}`);
});

// task 8: add a change event listener to a select dropdown that displays the selected value in a paragraph
const task8Select = document.querySelector("#task8select");
const task8p = document.querySelector(".task8p");
task8Select.addEventListener("change", () => {
  task8p.textContent = task8Select.value;
});

// task 9: add a click event listeners to a list that logs the text content of the clicked list item using event delegation
const task9List = document.querySelector("#task9list");

task9List.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

// task 10: add an event listener to a parent element that listens for events from dynamically added child elements

const task10Btn = document.querySelector("#task10btn");
const task10Div = document.querySelector("#task10div");
const task10Input = document.querySelector("#texttoadd");

task10Div.addEventListener('click', (e)  => {
    console.dir(e.target.textContent);
});

task10Btn.addEventListener("click", (e) => {
  e.preventDefault();
  const newChild = document.createElement("p");
  newChild.textContent = task10Input.value;
  task10Div.appendChild(newChild);
});
