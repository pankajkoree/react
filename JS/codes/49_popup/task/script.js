const subMainContent = document.querySelector(".sub-main-content");
const button = document.querySelector(".newsletter");
const popupMainContent = document.querySelector(".popup-main-content");
const closeIcon = document.querySelector(
  "body > main > div > div.popup-main-content > div.close-icon > span"
);
const subscribeButton = document.querySelector(".button-div");
// subMainContent.addEventListener("click", () => {
//   console.log("clicked");
// });

// button.addEventListener("click", () => {
//   button.classList.add("active");
//   console.log("clicked");
// });

button.addEventListener("click", () => {
  popupMainContent.classList.add("open");
  subMainContent.classList.remove("open");
  subMainContent.classList.add("close");
});

// popupMainContent.addEventListener("click", () => {
//   subMainContent.classList.add("open");
//   popupMainContent.classList.add("close");
//   popupMainContent.classList.remove("open");
// });

closeIcon.addEventListener("click", () => {
  subMainContent.classList.add("open");
  popupMainContent.classList.add("close");
  popupMainContent.classList.remove("open");
});

subscribeButton.addEventListener("click", () => {
  subMainContent.classList.add("open");
  popupMainContent.classList.add("close");
  popupMainContent.classList.remove("open");
});
