const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

hamburgerIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

// headerContent.addEventListener("click", (e) => {
//   e.stopPropagation();
// });
nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

// as go to top won't work when sticky wasn't wokring and we fix after that

document
  .querySelector("body > div > main > footer > h3")
  .addEventListener("click", () => {
    document.querySelector("body > div ").scrollTo(0, 0);
  });

//

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
