// selecting the checkboxes
const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const footerQuote = document.querySelector(".quote");

const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for chill :D",
];

const footerQuotes = [
  "“Move one step ahead, today!”",
  "“Keep Going, You’re making great progress!”",
  "“Too close, yet too far!”",
  "“Works paid off!”",
];

// first way
// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//   first: {
//     name: "",
//     completed: false,
//   },
//   second: {
//     name: "",
//     completed: false,
//   },
//   third: {
//     name: "",
//     completed: false,
//   },
// };
// ----------------------------------------------------
// second way
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first: {
    name: "",
    completed: false,
  },
  second: {
    name: "",
    completed: false,
  },
  third: {
    name: "",
    completed: false,
  },
};

// ----------------------------------------------------
// localstorage data for the first time
// {"first":{"name":"Complete this project by today","completed":true},"second":{"name":"Each and every functionality too","completed":true},"third":{"name":"Styles should be perfect","completed":true}}

// ----------------------------------------------------
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width += `${(completedGoalsCount / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    });
    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle("completed");
      // progressValue.style.width = "33.33%";
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
      // ------------------------------------------------
      // // "own method"
      // if (completedGoalsCount == 1) {
      //   progressLabel.innerText = "Well begun is half done!";
      // } else if (completedGoalsCount == 2) {
      //   progressLabel.innerText = "Just a step away, keep going!";
      // } else if (completedGoalsCount == 3) {
      //   progressLabel.innerText =
      //     "Whoa! You just completed all the goals, time for chill :D";
      // }

      // i can also do it using switch case

      // ------------------------------------------------
      // instructor method
      progressLabel.innerText = allQuotes[completedGoalsCount];

      footerQuote.innerText = footerQuotes[completedGoalsCount];

      // i think its the good one
      // ------------------------------------------------
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      //   errorLabel.style.display = "block"; // but its better not to add an inline css in the html using js
      progressBar.classList.add("show-error");
    }
  });
});
inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    }; //or e.target.value
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
