const buttonDIV = document.querySelector(".button-div");
const quizQuestionState = document.querySelector(".quizQuestionState");

buttonDIV.addEventListener("click", () => {
  quizHomePage.style.display = "none";
  quizQuestionState.style.display = "block";
});
