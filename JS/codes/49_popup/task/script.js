const subMainContent = document.querySelector(".sub-main-content");
const button = document.querySelector(".newsletter");

// subMainContent.addEventListener("click", () => {
//   console.log("clicked");
// });

button.addEventListener("click", () => {
  button.classList.add("active");
  console.log("clicked");
});
