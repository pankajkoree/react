const subMainContent = document.querySelector(".sub-main-content");
const button = document.querySelector(".newsletter");
const popupMainContent = document.querySelector(".popup-main-content");

// subMainContent.addEventListener("click", () => {
//   console.log("clicked");
// });

// button.addEventListener("click", () => {
//   button.classList.add("active");
//   console.log("clicked");
// });

button.addEventListener("click", () => {
  popupMainContent.classList.add("open");
  subMainContent.classList.add("open");
});

popupMainContent.addEventListener("click", () => {
  popupMainContent.classList.add("close");
  subMainContent.classList.add("open");
});
