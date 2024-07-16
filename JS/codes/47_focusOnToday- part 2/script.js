// selecting the checkboxes
const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const footerQuote = document.querySelector(".quote");
const addGoals = document.querySelector(".addGoals");
const goalContainer = document.querySelector(".goal-container");
const appContainer = document.querySelector(".app-container");

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
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

// ----------------------------------------------------
// localstorage data for the first time
// {"first":{"name":"Complete this project by today","completed":true},"second":{"name":"Each and every functionality too","completed":true},"third":{"name":"Styles should be perfect","completed":true}}

// ----------------------------------------------------
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width += `${
  (completedGoalsCount / inputFields.length) * 100
}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount} / ${inputFields.length} completed`;

const newDiv = document.createElement("div");

// addGoals.addEventListener("click", () => {
//   let newInput = ``;
//   newInput += `
//   <div class="goal-container">
//           <div class="custom-checkbox">
//             <img src="./images/tick.svg" class="check-icon" alt="tick mark" />
//           </div>
//           <input
//             type="text"
//             class="goal-input"
//             id="fourth"
//             placeholder="Add new goal"
//           />
//         </div>
//         `;
//   newDiv.innerHTML = newInput;
//   appContainer.append(newDiv);
//   console.log(newInput);
// });

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
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;
    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }

    // ----------------------------------------------
    // my method
    // allGoals[input.id] = {
    //   name: input.value,
    //   completed: false,
    // }; //or e.target.
    // ----------------------------------------------
    // instrcutor method

    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
    } else {
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      };
    }
    // ----------------------------------------------
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});

// addGoals.addEventListener("click", () => {
//   const newInput = document.createElement("div");
//   const innerNewInput = document.createElement("div");
//   newInput.classList.add("goal-container");
//   innerNewInput.classList.add("custom-checkbox");
//   newInput.append(innerNewInput);
//   console.log(newInput);
//   appContainer.append(newInput);
// });
