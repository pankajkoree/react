const buttons = document.querySelector(".red");

// buttons.forEach((button) => {
//     button.addEventListener('click',(e) => {
//         document.body.style.backgroundColor = e.target.className
//     })
// })

const body = document.body;

buttons.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});
