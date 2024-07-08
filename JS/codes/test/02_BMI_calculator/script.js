const button = document.querySelector("#calcBMI");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let weight = parseInt(document.querySelector("#weight").value);
  let height = parseInt(document.querySelector("#height").value);
  const bmiValue = document.querySelector(".bmiValue");
  const range = document.querySelector(".range");
  const calcValue = (weight / ((height * height) / 10000)).toFixed(2);
 
  range.innerText = calcValue<18.6 ? "Underweight": (calcValue>24.9? "Overweight":"Normal")
  bmiValue.innerText = (weight / ((height * height) / 10000)).toFixed(2);
});
