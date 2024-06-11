// ---------------addEventListener-----------------------

// -------------------------------------------------------
// *******************************************************
// this way of doing has some drawbacks, as we have to write some js code in html file which is a headache
// -------------------------------------------------------

// normally this is the way how a Angular developer uses event
// function sayHi() {
//   console.log("hiii");
// }

// -------------------------------------------------------
// -------------------------------------------------------

// adding onclick event on the container
// function container() {
//   console.log("container clicked");
// }

// -------------------------------------------------------

// adding function for ondoubleclick
// function container() {
//   console.log("double clicked on container");
// }

// -------------------------------------------------------
// *******************************************************
// -------------------------------------------------------

// second way

// we can add only a single function for the click event, although if we pass two function then it overrites the 1st and uses the latest function only
// const h1 = document.querySelector("h1");
// h1.onclick = sayHi;

// function sayHi() {
//   console.log("using the second way to add click event");
// }

// -------------------------------------------------------
// *******************************************************
// -------------------------------------------------------

// 3rd way - little bit long way but best way
// allows to add multiple events for a sinlge element
const h1 = document.querySelector("h1");
h1.addEventListener("click", sayHi);
h1.addEventListener("click", sayHi2);

function sayHi() {
  console.log("hi");
}

function sayHi2() {
  console.log("hiiiiiiiiiiii");
}

// --------------------------Task----------------------
//adding event on card using addEventListener
const card = document.querySelector(".card");

card.addEventListener("click", () => {
  console.log("hello for the card click");
});

// -------------------------------------------------------
// *******************************************************
// -------------------------------------------------------

// -------------------*****************--------------------
