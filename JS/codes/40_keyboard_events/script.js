// ---------------Keyboard events---------------------------

// ---------------------------------------------------------
// -------------keypress event------------------------------
// ---------------------------------------------------------

// keyboard events can be added on any element on which it is being focus

// the most common is : window object

// ------------- adding keyboard event on h1-----------------

// const h1 = document.querySelector("h1");

// h1.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// ---------------------------------------------------------

// normally added keypress event on window
// window.addEventListener("keypress", (e) => {
//   console.log(e);
// });

// ---------------------------------------------------------
// understanding about keycode and key
// e.code means keycode which gives result as : for a -> KeyA same as for other elements key keyword will before the actual word
// and in case of key, only the charactor we input will be outputted

// keycode doesn't changes it remains same for same alphabet whether its uppercase or lowercase but it changes in case of key
// window.addEventListener("keypress", (e) => {
//   console.log("code : ", e.code);
//   console.log("key : ", e.key);
// });

// ---------------------------------------------------------
// -------------keypress event end -------------------------
// ---------------------------------------------------------

// ---------------------------------------------------------
// -------------keyup event------------------------------
// ---------------------------------------------------------
// this event is fired when we release the key
// in this case, special button is also fired such as shift,alt,ctrl
// window.addEventListener("keyup", (e) => {
//   console.log("code : ", e.code);
//   console.log("key : ", e.key);
// });

// ---------------------------------------------------------
// -------------keyup event end ----------------------------
// ---------------------------------------------------------

// ---------------------------------------------------------
// -------------keydown event------------------------------
// ---------------------------------------------------------

// same as keyup event, the only difference is that it gets fired when the key is down
window.addEventListener("keydown", (e) => {
  console.log("code : ", e.code);
  console.log("key : ", e.key);
});

// ---------------------------------------------------------
// -------------keydown event end ----------------------------
// ---------------------------------------------------------
// -------------------***************---------------------
