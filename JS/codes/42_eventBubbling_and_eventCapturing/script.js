// ------------eventBubbling and eventCapturing------------

const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// ---------------------eventBubbling-----------------------
// ---------------------eventBubbling-----------------------

// as green is the parent div, which means click on its child means clicking on parent
// this concept is know as eventBubbling
// clicking on child will bubble all over its parent element
// blue >> pink >> green >> body >> document >> window

// but we can stop this phenomeno using some command like below
// green.addEventListener("click", (e) => {
//   console.log("3. green clicked");
// });

// pink.addEventListener("click", (e) => {
//   console.log("2. pink clicked");
// });

// blue.addEventListener("click", (e) => {
//   console.log("1. blue clicked");
// });
// document.body.addEventListener("click", (e) => {
//   console.log("4. body clicked");
// });

// document.addEventListener("click", (e) => {
//   console.log("5. document clicked");
// });

// window.addEventListener("click", (e) => {
//   console.log("6. window clicked");
// });

// --------------- stop default bubble behavior------------
// --------------- stop default bubble behavior------------

// green.addEventListener("click", (e) => {
//   e.stopPropagation(); // means stopping here, will not propagate from here to its parent
//   console.log("3. green clicked");
// });

// pink.addEventListener("click", (e) => {
//   console.log("2. pink clicked");
// });

// blue.addEventListener("click", (e) => {
//   console.log("1. blue clicked");
// });
// document.body.addEventListener("click", (e) => {
//   console.log("4. body clicked");
// });

// document.addEventListener("click", (e) => {
//   console.log("5. document clicked");
// });

// window.addEventListener("click", (e) => {
//   console.log("6. window clicked");
// });

// ----------------stopping the bubbling -------------------
// ----------------stopping the bubbling -------------------

// changing the default behavior by giving 3rd argumnet as true or {capture:true}
// but these things are usually not done
// green.addEventListener(
//   "click",
//   (e) => {
//     console.log("3. green clicked");
//   },
//   true
// );

// pink.addEventListener(
//   "click",
//   (e) => {
//     console.log("2. pink clicked");
//   },
//   true
// );

// blue.addEventListener(
//   "click",
//   (e) => {
//     console.log("1. blue clicked");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   (e) => {
//     console.log("4. body clicked");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("5. document clicked");
//   },
//   true
// );

// window.addEventListener(
//   "click",
//   (e) => {
//     console.log("6. window clicked");
//   },
//   true
// );

// --------------------------------------------------------
// --------------------------------------------------------
// adding a function to be bubbled for once only
blue.addEventListener(
  "click",
  (e) => {
    console.log("1. blue clicked");
  },
  { capture: true, once: true }
);
// ----------------------************------------------------
