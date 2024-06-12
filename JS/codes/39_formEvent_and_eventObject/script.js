// --------form Event and event Object-----------------------

// -----------------normal click events-----------------
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("click", () => {
  console.log("clicked");
});
// --------------------------------------------------------

// -------------form events--------------------------------
// ----------------------on input------------------------
// let inputValue;
// const paragraph = document.querySelector("p");
// usernameInput.addEventListener("input", (e) => {
//   console.log(e);
//   inputValue = e.target.value;
//   paragraph.innerText = inputValue;
// });

// --------------------------------------------------------
// ----------------------on change------------------------
// get fired, when we click outside of that input
// let inputValue;
// const paragraph = document.querySelector("p");
// usernameInput.addEventListener("change", (e) => {
//   console.log(e);
//   inputValue = e.target.value;
//   paragraph.innerText = inputValue;
// });

// ----------------------on focus------------------------
// when we click, this event gets fired coz focus means we focusing on input
// let inputValue;
// const paragraph = document.querySelector("p");
// usernameInput.addEventListener("focus", (e) => {
//   console.log(e.type);
//   inputValue = e.target.value;
//   paragraph.innerText = inputValue;
// });

// --------------------------------------------------------
// --------------------------------------------------------

// accessing the form and using click event

// const form = document.querySelector("form");

// form.addEventListener("click", (e) => {
//   // this is good but form isn't clicked,  its elements are clicked, the form can only be submitted or cancelled so submit event for form is below:
//   console.log(e);
// });

// --------------------------------------------------------
// --------------------------------------------------------

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // this is good but form isn't clicked,  its elements are clicked, the form can only be submitted or cancelled so submit event for form is below:
  // so the 3rd way to see that consoled item is
  // e.preventDefault();
  // console.log(e);
  //getting the formData
  e.preventDefault();
  const myFormData = new FormData(form);

  // it seems to be empty but it contains these details, so to get we need to iterate over it as below:
  for (const p of myFormData.entries()) {
    console.log(p);
  }
});
// once the form will be submitted, it will redirect us to another link so consoled item will be changed, so not to change we can use "preserve log " to see consoled item
// ---------------*****************-------------------------
