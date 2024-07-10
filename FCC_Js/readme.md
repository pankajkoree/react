# FreeCodeCamp

## Practiced Project 1 : Pyramid Generator

### Solution Code

```js
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
```

## Practiced Project 2 : GradeBook App

### Solution Code

```js
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  let sum_ = 0
  for (const i of totalScores) {
    sum_ += i
  }

  if (getGrade(studentScore) !== "F") {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You passed the course."
  }
  else if (getGrade(studentScore) === "A++") {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You passed the course."
  }
  else {
    return "Class average: " + (sum_ / totalScores.length) + "." + " Your grade: " + (getGrade(studentScore)) + "." + " You failed the course."
  }

}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
```

## Practiced Project 3 : Role Play Game

### Solution Code
### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
  </head>
  <body>
    <div id="game">
      <div id="stats">
        <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
      </div>
      <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight dragon</button>
      </div>
      <div id="monsterStats">
        <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
        <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
      </div>
      <div id="text">
        Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```
### style.css
```css
body {
  background-color: #0a0a23;
}

#text {
  background-color: #0a0a23;
  color: #ffffff;
  padding: 10px;
}

#game {
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 30px auto 0px;
  padding: 10px;
}

#controls,
#stats {
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #0a0a23;
}

#monsterStats {
  display: none;
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
}

.stat {
  padding-right: 10px;
}

button {
  cursor: pointer;
  color: #0a0a23;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
}
```
### script.js
```js
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 },
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60,
  },
  {
    name: "dragon",
    level: 20,
    health: 300,
  },
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function easterEgg() {
  update(locations[7]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
```

## Practiced Project 4 : Random Background Changer

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build a random background color changer</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Random Background Color changer</h1>

    <main>
      <section class="bg-information-container">
        <p>Hex Code: <span id="bg-hex-code">#110815</span></p>
      </section>

      <button class="btn" id="btn">Change Background Color</button>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```
```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --yellow: #f1be32;
  --golden-yellow: #feac32;
  --dark-purple: #110815;
  --light-grey: #efefef;
}

body {
  background-color: var(--dark-purple);
  color: var(--light-grey);
  text-align: center;
}

.bg-information-container {
  margin: 15px 0 25px;
  font-size: 1.2rem;
}

.btn {
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  color: var(--dark-purple);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}
```
### script.js
```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
```

## Practiced Project 5 : Calorie Counter

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Calorie Counter</title>
  </head>
  <body>
    <main>
      <h1>Calorie Counter</h1>
      <div class="container">
        <form id="calorie-counter">
          <label for="budget">Budget</label>
          <input
            type="number"
            min="0"
            id="budget"
            placeholder="Daily calorie budget"
            required
          />
          <fieldset id="breakfast">
            <legend>Breakfast</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="lunch">
            <legend>Lunch</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="dinner">
            <legend>Dinner</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="snacks">
            <legend>Snacks</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="exercise">
            <legend>Exercise</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>
        <div id="output" class="output hide"></div>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```
### style.css
```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
}

h1 {
  text-align: center;
}

.container {
  width: 90%;
  max-width: 680px;
}

h1,
.container,
.output {
  margin: 20px auto;
}

label,
legend {
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
}

button,
input,
select {
  min-height: 24px;
  color: var(--dark-blue);
}

fieldset,
label,
button,
input,
select {
  margin-bottom: 10px;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 10px;
  text-align: center;
}

.hide {
  display: none;
}

.output span {
  font-weight: bold;
  font-size: 1.2em;
}

.surplus {
  color: var(--light-pink);
}

.deficit {
  color: var(--light-green);
}
```
### script.js
```js
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type=number]"
  );
  const lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type=number]"
  );
  const dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type=number]"
  );
  const snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type=number]"
  );
  const exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type=number]"
  );

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories =
    budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(
    remainingCalories
  )} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove("hide");
}

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

function clearForm() {
  const inputContainers = Array.from(
    document.querySelectorAll(".input-container")
  );

  for (const container of inputContainers) {
    container.innerHTML = "";
  }

  budgetNumberInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);
```

## Practiced Project 6 : Rock Paper Scissors

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rock, Paper, Scissors game</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Let's play Rock, Paper, Scissors!</h1>
    <main>
      <details class="rules-container">
        <summary>Rules to the game</summary>

        <p>You will be playing against the computer.</p>
        <p>You can choose between Rock, Paper, and Scissors.</p>
        <p>The first one to three points wins.</p>

        <p>Here are the rules to getting a point in the game:</p>
        <ul>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        <p>
          If the player and computer choose the same option (Ex. Paper and
          Paper), then no one gets the point.
        </p>
      </details>

      <div class="score-container">
        <strong
          >Player Score: <span class="score" id="player-score">0</span></strong
        >
        <strong
          >Computer Score:
          <span class="score" id="computer-score">0</span></strong
        >
      </div>

      <section class="options-container">
        <h2>Choose an option:</h2>
        <div class="btn-container">
          <button id="rock-btn" class="btn">Rock</button>
          <button id="paper-btn" class="btn">Paper</button>
          <button id="scissors-btn" class="btn">Scissors</button>
        </div>
      </section>

      <div class="results-container">
        <p id="results-msg"></p>
        <p id="winner-msg"></p>
        <button class="btn" id="reset-game-btn">Play again?</button>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```
### style.css
```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --very-dark-blue: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
  --golden-yellow: #feac32;
}

body {
  background-color: var(--very-dark-blue);
  text-align: center;
  color: var(--white);
}

h1 {
  margin: 15px 0 20px;
}

.btn {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: var(--very-dark-blue);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}

.rules-container {
  padding: 10px 0;
  margin: auto;
  border-radius: 15px;
  border: 5px solid var(--yellow);
  background-color: var(--white);
  color: var(--very-dark-blue);
}

.rules-container ul {
  list-style-type: none;
}

.rules-container p {
  margin: 10px 0;
}

@media (min-width: 760px) {
  .rules-container {
    width: 60%;
  }
}

.score-container {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  font-size: 1.2rem;
}

.score {
  font-weight: 500;
}

.results-container {
  font-size: 1.3rem;
  margin: 15px 0;
}

#winner-msg {
  margin-top: 25px;
}

#reset-game-btn {
  display: none;
  margin: 20px auto;
}
```
### script.js
```js
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.dsiplay = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});
```
## Practiced project 7 : Music Player

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <title>
      Learn Basic String and Array Methods by Building a Music Player App
    </title>
  </head>

  <body>
    <div class="container">
      <div class="player">
        <div class="player-bar">
          <div class="parallel-lines">
            <div></div>
            <div></div>
          </div>
          <h1 class="fcc-title">freeCodeCamp</h1>
          <div class="parallel-lines">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="player-content">
          <div id="player-album-art">
            <img
              src="https://cdn.freecodecamp.org/curriculum/js-music-player/quincy-larson-album-art.jpg"
              alt="song cover art"
            />
          </div>
          <div class="player-display">
            <div class="player-display-song-artist">
              <p id="player-song-title"></p>
              <p id="player-song-artist"></p>
            </div>
            <div class="player-buttons">
              <button id="previous" class="previous" aria-label="Previous">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M23.2248 0L7.03964 9.5L23.2248 19L23.2248 0Z" /><rect
                    width="4.63633"
                    height="18.5453"
                    transform="matrix(-1 0 0 1 4.63633 0)"/></svg>
              </button>
              <button id="play" class="play" aria-label="Play">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                > <path d="M0 0L16.1852 9.5L1.88952e-07 19L0 0Z" /></svg>
              </button>
              <button id="pause" class="pause" aria-label="Pause">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M0 6.54013e-07H4.75V19H0V6.54013e-07Z" /> <path d="M11.4 0H16.15V19H11.4V0Z" /></svg>
              </button>
              <button id="next" class="next" aria-label="Next">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M0 0L16.1852 9.5L1.88952e-07 19L0 0Z" /> <rect x="18.5885" width="4.63633" height="18.5453" /></svg>
              </button>
              <button id="shuffle" class="shuffle" aria-label="Shuffle">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2127 0L17 2.9219L12.0759 5.60686L12.1321 3.30594C11.9081 3.30997 11.7043 3.3165 11.528 3.326C11.3777 3.3341 11.2523 3.34411 11.1542 3.35578C11.1053 3.3616 11.0661 3.36749 11.036 3.37309C11.0211 3.37587 11.0095 3.37835 11.001 3.38041C10.9967 3.38143 10.9936 3.38227 10.9913 3.38289C10.989 3.38352 10.988 3.38385 10.9881 3.38382C10.9266 3.40381 10.7572 3.5014 10.4637 3.73265C10.1895 3.94866 9.85452 4.24234 9.47614 4.59282C8.81462 5.20556 8.03912 5.97461 7.25609 6.76752C8.03912 7.56043 8.81462 8.32948 9.47614 8.94223C9.85452 9.29271 10.1895 9.58639 10.4637 9.80239C10.7572 10.0336 10.9266 10.1312 10.9881 10.1512C10.988 10.1512 10.989 10.1515 10.9913 10.1522C10.9936 10.1528 10.9967 10.1536 11.001 10.1546C11.0095 10.1567 11.0211 10.1592 11.036 10.162C11.0661 10.1676 11.1053 10.1734 11.1542 10.1793C11.2523 10.1909 11.3777 10.2009 11.528 10.209C11.7043 10.2185 11.9081 10.2251 12.1321 10.2291L12.0759 7.92819L17 10.6131L12.2127 13.535L12.1558 11.2011C11.9071 11.197 11.677 11.1899 11.4757 11.1791C11.175 11.1629 10.8757 11.1361 10.6878 11.0751C10.4405 10.9947 10.1465 10.7892 9.86244 10.5654C9.55904 10.3263 9.20251 10.0129 8.81601 9.6549C8.14192 9.03051 7.35822 8.2533 6.57518 7.46052C6.2731 7.76927 5.9736 8.07675 5.68453 8.37353C5.24051 8.8294 4.82109 9.26001 4.45467 9.63114C4.10458 9.98574 3.79502 10.2941 3.54834 10.5285C3.42516 10.6455 3.31437 10.7473 3.22005 10.8285C3.13287 10.9035 3.03686 10.9812 2.94938 11.0324C2.46156 11.3178 1.79381 11.3751 1.32395 11.3812C1.07514 11.3845 0.852462 11.3732 0.692065 11.3611C0.611577 11.3551 0.546037 11.3488 0.499864 11.344C0.476761 11.3415 0.458455 11.3394 0.445496 11.3379L0.43012 11.336L0.425557 11.3355L0.423542 11.3352C0.423448 11.3352 0.423143 11.3352 0.485767 10.8535L0.423542 11.3352C0.157529 11.3006 -0.0304782 11.0569 0.00410824 10.7909C0.0386807 10.525 0.282182 10.3374 0.548069 10.3718C0.548087 10.3718 0.548051 10.3718 0.548069 10.3718L0.549944 10.372L0.559616 10.3732C0.568682 10.3743 0.582871 10.3759 0.60165 10.3779C0.639243 10.3818 0.695017 10.3872 0.764728 10.3924C0.90473 10.4029 1.09799 10.4127 1.31133 10.4099C1.76571 10.404 2.20705 10.3412 2.4587 10.194C2.45847 10.1941 2.4583 10.1942 2.4587 10.194C2.46075 10.1926 2.47161 10.1855 2.49271 10.1693C2.51674 10.1508 2.54777 10.1254 2.58634 10.0922C2.66358 10.0258 2.7615 9.93612 2.87917 9.82431C3.11419 9.60097 3.41488 9.30164 3.76339 8.94864C4.1317 8.57559 4.54478 8.15147 4.98424 7.70025C5.27761 7.39904 5.58273 7.08575 5.89415 6.76752C5.58272 6.44928 5.27759 6.13598 4.98421 5.83476C4.54476 5.38355 4.1317 4.95944 3.76339 4.5864C3.41488 4.2334 3.11419 3.93407 2.87917 3.71074C2.7615 3.59892 2.66358 3.50929 2.58634 3.44281C2.54777 3.40961 2.51674 3.38425 2.49271 3.36577C2.4716 3.34954 2.46099 3.34258 2.45894 3.34123C2.45868 3.34108 2.45853 3.34096 2.45894 3.34123C2.2073 3.19405 1.76572 3.13106 1.31133 3.12515C1.09799 3.12238 0.90473 3.13211 0.764728 3.14261C0.695017 3.14784 0.639243 3.15321 0.60165 3.15717C0.582871 3.15915 0.568682 3.16077 0.559616 3.16184L0.549944 3.16301L0.548391 3.1632C0.282436 3.1977 0.0386882 3.01013 0.00410824 2.74417C-0.0304782 2.47816 0.15713 2.23447 0.423143 2.19989L0.485767 2.68154C0.423143 2.19989 0.423048 2.1999 0.423143 2.19989L0.425557 2.19958L0.43012 2.199L0.445496 2.19714C0.458455 2.19561 0.476761 2.19352 0.499864 2.19109C0.546037 2.18622 0.611577 2.17995 0.692065 2.17391C0.852462 2.16188 1.07514 2.15058 1.32395 2.15381C1.79381 2.15992 2.46156 2.21726 2.94938 2.50267C3.03686 2.55385 3.13287 2.63152 3.22005 2.70655C3.31437 2.78773 3.42516 2.8895 3.54834 3.00655C3.79502 3.24097 4.10458 3.54931 4.45467 3.9039C4.82109 4.27504 5.24052 4.70565 5.68455 5.16153C5.97361 5.4583 6.2731 5.76578 6.57518 6.07452C7.35822 5.28174 8.14192 4.50454 8.81601 3.88014C9.20251 3.52214 9.55904 3.20872 9.86244 2.96964C10.1465 2.74581 10.4405 2.54035 10.6878 2.45997C10.8757 2.39892 11.175 2.37219 11.4757 2.35598C11.677 2.34514 11.9071 2.33807 12.1558 2.33396L12.2127 0Z"
                  /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="playlist">
        <div class="playlist-bar">
          <div class="parallel-lines">
            <div></div>
            <div></div>
          </div>
          <h2 class="playlist-title" id="playlist">Playlist</h2>
          <div class="parallel-lines">
            <div></div>
            <div></div>
          </div>
        </div>
        <ul id="playlist-songs"></ul>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
### style.css
```css
:root {
  /* colors */
  --primary-color: #dfdfe2;
  --secondary-color: #ffffff;
  --app-background-color: #4d4d62;
  --background-color: #1b1b32;
  --foreground-color: #3b3b4f;
  --highlight-color: #f1be32;

  /* font sizes */
  --root-font-size: 16px;
  font-size: var(--root-font-size);

  /* font-families */
  --font-headline: "Roboto Mono", monospace;
  --font-family: "Lato", sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background-color: var(--app-background-color);
  color: var(--primary-color);
  font-family: var(--font-family);
}

h1 {
  font-size: 1.125rem;
  line-height: 1.6;
}

h2 {
  font-size: var(--root-font-size);
}

ul {
  margin: 0;
}

.container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
}

.player,
.playlist {
  width: 450px;
  background-color: var(--background-color);
  border: 3px solid var(--foreground-color);
}

.player {
  height: 260px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}

.player-bar,
.playlist-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  width: 100%;
  height: 30px;
  background-color: var(--foreground-color);
}

.parallel-lines {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  padding: 0 5px;
}

.parallel-lines > div {
  height: 2px;
  width: 100%;
  min-width: 75px;
  background-color: var(--highlight-color);
}

.fcc-title,
.playlist-title {
  color: var(--secondary-color);
  margin: 0 10px;
  font-family: var(--font-headline);
}

.player-content {
  display: flex;
  background-color: var(--foreground-color);
  width: 430px;
  height: 200px;
  column-gap: 13px;
  align-items: center;
  justify-content: center;
}

#player-album-art {
  background-color: var(--secondary-color);
  border: 6px solid var(--background-color);
}

#player-album-art img {
  width: 150px;
  display: block;
}

.player-display {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 14px;
  background-color: var(--background-color);
  height: 153px;
  width: 226px;
}

.player-display-song-artist {
  height: 80px;
}

.player-buttons svg {
  fill: var(--primary-color);
}

.playing > svg {
  fill: var(--highlight-color);
}

.player-buttons {
  display: flex;
  justify-content: space-around;
}

button {
  background: transparent;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-size: var(--root-font-size);
  outline-color: var(--highlight-color);
  text-align: center;
}

.playlist-song {
  outline-color: var(--highlight-color);
}

.playlist li:not(:last-child) {
  border-bottom: 1px solid var(--background-color);
}

button:focus,
.playlist-song:focus {
  outline-style: dashed;
  outline-width: 2px;
}

/* Playlist */
.playlist {
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}

#playlist-songs {
  width: 430px;
  height: 100%;
  background-color: var(--foreground-color);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px 9px;
  visibility: visible;
  justify-content: start;
  list-style: none;
}

.playlist-song {
  display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

[aria-current="true"] {
  background-color: var(--background-color);
}

[aria-current="true"] p {
  color: var(--highlight-color);
}

.playlist-song-info {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  column-gap: 7px;
  padding: 5px 0;
  font-family: var(--font-family);
}

#player-song-title,
#player-song-artist {
  margin: 0;
}

#player-song-artist {
  color: var(--highlight-color);
  font-size: 0.75rem;
}

#player-song-title {
  font-size: 1.125rem;
}

.playlist-song-title {
  font-size: 0.85rem;
  width: 241px;
  text-align: left;
}

.playlist-song-artist {
  font-size: 0.725rem;
  width: 80px;
}

.playlist-song-duration {
  font-size: 0.725rem;
  margin: auto;
  font-family: var(--font-headline);
  width: 30px;
}

.playlist-song-delete {
  padding: 0;
  width: 20px;
  height: 20px;
}

.playlist-song-delete,
.playlist-song-delete {
  fill: var(--foreground-color);
}

.playlist-song-delete:hover circle,
.playlist-song-delete:focus circle {
  fill: #ff0000;
}

@media (max-width: 700px) {
  .player,
  .playlist {
    width: 300px;
  }

  .player {
    height: 340px;
  }

  #playlist-songs {
    height: 280px;
    padding: 5px 6px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: var(--background-color) var(--secondary-color);
    scrollbar-width: thin;
  }

  #playlist-songs::-webkit-scrollbar {
    width: 5px;
  }

  #playlist-songs::-webkit-scrollbar-track {
    background: var(--background-color);
  }

  #playlist-songs::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
  }

  h1 {
    font-size: 0.813rem;
  }

  h2 {
    font-size: 0.75rem;
  }

  .player-bar,
  .playlist-bar,
  .player-content,
  #playlist-songs {
    width: 280px;
  }

  .playlist-song {
    justify-content: space-between;
  }

  .playlist-song-title {
    width: 140px;
  }

  .playlist-song-artist {
    width: 40px;
  }

  .playlist-song-duration > button {
    padding: 0;
  }

  .player-content {
    display: inline;
    position: relative;
    justify-items: center;
    height: 100%;
  }

  #player-album-art {
    z-index: -100;
    height: 280px;
    box-shadow: none;
    background: #000;
  }

  #player-album-art img {
    width: 100%;
    opacity: 0.6;
  }

  .player-display-song-artist {
    padding: 0 10px;
  }

  .player-display-song-artist > p {
    white-space: pre-wrap;
  }

  .player-display {
    position: absolute;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    top: 0;
    height: 280px;
    justify-content: space-between;
    text-align: center;
  }
}
```
### script.js
```js
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  highlightCurrentSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];

    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
   if (userData?.currentSong === null) return;
   else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];

    playSong(previousSong.id);
   }
};

const shuffle = () => {
  userData?.songs.sort(() => Math.random() - 0.5);
  userData.currentSong = null;
  userData.songCurrentTime = 0;

  renderSongs(userData?.songs);
  pauseSong();
  setPlayerDisplay();
  setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
  if (userData?.currentSong?.id === id) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    pauseSong();
    setPlayerDisplay();
  }

  userData.songs = userData?.songs.filter((song) => song.id !== id);
  renderSongs(userData?.songs); 
  highlightCurrentSong(); 
  setPlayButtonAccessibleText(); 

  if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");

    resetButton.id = "reset";
    resetButton.ariaLabel = "Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
      userData.songs = [...allSongs];

      renderSongs(sortSongs()); 
      setPlayButtonAccessibleText();
      resetButton.remove();
    });

  }

};

const setPlayerDisplay = () => {
  const playingSong = document.getElementById("player-song-title");
  const songArtist = document.getElementById("player-song-artist");
  const currentTitle = userData?.currentSong?.title;
  const currentArtist = userData?.currentSong?.artist;

  playingSong.textContent = currentTitle ? currentTitle : "";
  songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song)=> {
      return `
      <li id="song-${song.id}" class="playlist-song">
      <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>
      <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
        </button>
      </li>
      `;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
  const song = userData?.currentSong || userData?.songs[0];

  playButton.setAttribute(
    "aria-label",
    song?.title ? `Play ${song.title}` : "Play"
  );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click",  pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click", playPreviousSong);

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
      playNextSong();
    } else {
      userData.currentSong = null;
      userData.songCurrentTime = 0;  
pauseSong()
setPlayerDisplay()
highlightCurrentSong()
setPlayButtonAccessibleText()
    }
});

const sortSongs = () => {
  userData?.songs.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return userData?.songs;
};

renderSongs(sortSongs());
setPlayButtonAccessibleText();
```
### Practiced Prject 8 : Date Formatter

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn the Date Object by Building a Date Formatter</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <div class="title-container">
        <h1 class="title">Today's Date</h1>

        <svg
          class="date-svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M1145 4777 c-71 -24 -120 -54 -164 -102 -59 -64 -83 -124 -89 -216 l-4 -77 -147 -3 c-142 -4 -149 -5 -213 -37 -81 -40 -149 -111 -177 -188 -21 -54 -21 -64 -21 -1789 0 -1725 0 -1735 21 -1789 28 -77 96 -148 177 -188 l67 -33 1950 0 1950 0 67 33 c74 36 133 96 170 170 l23 47 0 1760 0 1760 -23 47 c-37 74 -96 134 -169 170 -63 31 -71 32 -213 36 l-148 4 -4 77 c-8 133 -82 242 -200 297 -54 25 -75 29 -148 29 -94 -1 -151 -20 -220 -75 -75 -59 -130 -181 -130 -287 l0 -43 -954 0 -954 0 -7 74 c-12 137 -89 251 -201 303 -66 30 -179 39 -239 20z m209 -164 c23 -16 52 -49 66 -73 l25 -45 0 -365 0 -365 -28 -47 c-30 -52 -88 -92 -149 -103 -54 -10 -137 17 -175 57 -65 69 -64 60 -61 471 l3 373 27 41 c17 26 45 50 80 68 71 35 151 31 212 -12z m2594 11 c41 -20 59 -37 82 -78 l30 -51 0 -360 c0 -329 -2 -364 -19 -401 -36 -79 -137 -133 -222 -119 -57 10 -125 58 -151 107 -23 42 -23 50 -26 388 -3 377 -1 403 51 465 62 76 162 95 255 49z m537 -2717 l0 -1239 -24 -19 c-23 -19 -67 -19 -1916 -19 -1849 0 -1893 0 -1916 19 l-24 19 -3 1241 -2 1241 1942 -2 1943 -3 0 -1238z"
            />
            <path
              d="M1112 2493 l3 -158 318 -3 317 -2 0 160 0 160 -320 0 -321 0 3 -157z"
            />
            <path
              d="M2230 2490 l0 -160 315 0 315 0 0 160 0 160 -315 0 -315 0 0 -160z"
            />
            <path
              d="M3342 2493 l3 -158 310 0 310 0 3 158 3 157 -316 0 -316 0 3 -157z"
            />
            <path
              d="M1110 1855 l0 -155 320 0 320 0 0 155 0 155 -320 0 -320 0 0 -155z"
            />
            <path
              d="M2230 1855 l0 -155 315 0 315 0 0 155 0 155 -315 0 -315 0 0 -155z"
            />
            <path
              d="M3340 1855 l0 -155 315 0 315 0 0 155 0 155 -315 0 -315 0 0 -155z"
            />
            <path
              d="M1117 1383 c-4 -3 -7 -78 -7 -165 l0 -158 320 0 320 0 0 165 0 165 -313 0 c-173 0 -317 -3 -320 -7z"
            />
            <path
              d="M2230 1225 l0 -165 315 0 315 0 0 165 0 165 -315 0 -315 0 0 -165z"
            />
            <path
              d="M3347 1383 c-4 -3 -7 -78 -7 -165 l0 -158 315 0 315 0 -2 163 -3 162 -306 3 c-168 1 -308 -1 -312 -5z"
            />
          </g>
        </svg>
      </div>
      <div class="divider"></div>

      <div class="dropdown-container">
        <select name="date-options" id="date-options">
          <option value="dd-mm-yyyy">Day, Month, Year</option>
          <option value="yyyy-mm-dd">Year, Month, Day</option>
          <option value="mm-dd-yyyy-h-mm">
            Month, Day, Year, Hours, Minutes
          </option>
        </select>
        <div class="select-icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="35"
            viewBox="0 0 24 24"
          >
            <rect x="0" fill="none" width="24" height="24" />

            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
        </div>
      </div>

      <p id="current-date"></p>
    </main>

    <script src="./script.js"></script>
  </body>
</html>
```
### style.css
```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-grey: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
}

body {
  color: var(--white);
  background-color: var(--dark-grey);
}

.title-container {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.title {
  font-size: 2.5rem;
}

.date-svg {
  width: 30px;
  height: 30px;
}

.divider {
  margin: auto;
  width: 150px;
  height: 10px;
  background-color: var(--yellow);
}

.dropdown-container {
  width: 50%;
  margin: 40px auto;
  position: relative;
}

select {
  display: block;
  margin: 20px auto 0;
  width: 100%;
  height: 50px;
  font-size: 100%;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--white);
  border: none;
  color: var(--dark-grey);
  appearance: none;
  padding: 10px;
  padding-right: 38px;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease;
}

.select-icon {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 30px;
  height: 36px;
  pointer-events: none;
  padding-left: 5px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.select-icon svg.icon {
  transition: fill 0.3s ease;
  fill: var(--dark-grey);
}

#current-date {
  font-size: 2rem;
  text-align: center;
}

@media (max-width: 375px) {
  .title {
    font-size: 2rem;
  }

  .dropdown-container {
    width: 80%;
  }

  .date-svg {
    display: none;
  }
}
```
### script.js
```js
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
    currentDateParagraph.textContent = formattedDate
  }
});
```
### Practiced Prject 9 : Football Team Cards

### Solution Code

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Learn Modern JavaScript methods by building football team cards
    </title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Team stats</h1>
    <main>
      <div class="team-stats">
        <p>Team: <span id="team"></span></p>
        <p>Sport: <span id="sport"></span></p>
        <p>Year: <span id="year"></span></p>
        <p>Head coach: <span id="head-coach"></span></p>
      </div>
      <label class="options-label" for="players">Filter Teammates:</label>
      <select name="players" id="players">
        <option value="all">All Players</option>
        <option value="nickname">Nicknames</option>
        <option value="forward">Position Forward</option>
        <option value="midfielder">Position Midfielder</option>
        <option value="defender">Position Defender</option>
        <option value="goalkeeper">Position Goalkeeper</option>
      </select>
      <div class="cards" id="player-cards">
        <div class="player-card">
          <h2>Sergio Almirón</h2>
          <p>Position: forward</p>
          <p>Number: 1</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Sergio Batista</h2>
          <p>Position: midfielder</p>
          <p>Number: 2</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Ricardo Bochini</h2>
          <p>Position: midfielder</p>
          <p>Number: 3</p>
          <p>Nickname: El Bocha</p>
        </div>
        <div class="player-card">
          <h2>Claudio Borghi</h2>
          <p>Position: midfielder</p>
          <p>Number: 4</p>
          <p>Nickname: Bichi</p>
        </div>
        <div class="player-card">
          <h2>José Luis Brown</h2>
          <p>Position: defender</p>
          <p>Number: 5</p>
          <p>Nickname: Tata</p>
        </div>
        <div class="player-card">
          <h2>Daniel Passarella</h2>
          <p>Position: defender</p>
          <p>Number: 6</p>
          <p>Nickname: El Gran Capitán</p>
        </div>
        <div class="player-card">
          <h2>Jorge Burruchaga</h2>
          <p>Position: forward</p>
          <p>Number: 7</p>
          <p>Nickname: Burru</p>
        </div>
        <div class="player-card">
          <h2>Néstor Clausen</h2>
          <p>Position: defender</p>
          <p>Number: 8</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>José Luis Cuciuffo</h2>
          <p>Position: defender</p>
          <p>Number: 9</p>
          <p>Nickname: El Cuchu</p>
        </div>
        <div class="player-card">
          <h2>(Captain) Diego Maradona</h2>
          <p>Position: midfielder</p>
          <p>Number: 10</p>
          <p>Nickname: El Pibe de Oro</p>
        </div>
        <div class="player-card">
          <h2>Jorge Valdano</h2>
          <p>Position: forward</p>
          <p>Number: 11</p>
          <p>Nickname: The Philosopher of Football</p>
        </div>
        <div class="player-card">
          <h2>Héctor Enrique</h2>
          <p>Position: midfielder</p>
          <p>Number: 12</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Oscar Garré</h2>
          <p>Position: defender</p>
          <p>Number: 13</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Ricardo Giusti</h2>
          <p>Position: midfielder</p>
          <p>Number: 14</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Luis Islas</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 15</p>
          <p>Nickname: El loco</p>
        </div>
        <div class="player-card">
          <h2>Julio Olarticoechea</h2>
          <p>Position: defender</p>
          <p>Number: 16</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Pedro Pasculli</h2>
          <p>Position: forward</p>
          <p>Number: 17</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Nery Pumpido</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 18</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Oscar Ruggeri</h2>
          <p>Position: defender</p>
          <p>Number: 19</p>
          <p>Nickname: El Cabezón</p>
        </div>
        <div class="player-card">
          <h2>Carlos Tapia</h2>
          <p>Position: midfielder</p>
          <p>Number: 20</p>
          <p>Nickname: N/A</p>
        </div>
        <div class="player-card">
          <h2>Marcelo Trobbiani</h2>
          <p>Position: midfielder</p>
          <p>Number: 21</p>
          <p>Nickname: Calesita</p>
        </div>
        <div class="player-card">
          <h2>Héctor Zelada</h2>
          <p>Position: goalkeeper</p>
          <p>Number: 22</p>
          <p>Nickname: N/A</p>
        </div>
      </div>
    </main>
    <footer>&copy; freeCodeCamp</footer>
    <script src="./script.js"></script>
  </body>
</html>
```
### style.css
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --dark-grey: #0a0a23;
  --light-grey: #f5f6f7;
  --white: #ffffff;
  --black: #000;
}

body {
  background-color: var(--dark-grey);
  text-align: center;
  padding: 10px;
}

.title,
.options-label,
.team-stats,
footer {
  color: var(--white);
}

.title {
  margin: 1.3rem 0;
}

.team-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 1.3rem;
  margin: 1.2rem 0;
}

.options-label {
  font-size: 1.2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.player-card {
  background-color: var(--light-grey);
  padding: 1.3rem;
  margin: 1.2rem;
  width: 300px;
  border-radius: 15px;
}

@media (max-width: 768px) {
  .team-stats {
    flex-direction: column;
  }
}
```
### script.js
```js
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

    default:
      setPlayerCards();
  }
});
```

### Practiced Prject 10 : Todo App

### Solution Code

### index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Learn localStorage by Building a Todo App</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <main>
    <h1>Todo App</h1>
    <div class="todo-app">
      <button id="open-task-form-btn" class="btn large-btn">
        Add New Task
      </button>
      <form class="task-form hidden" id="task-form">
        <div class="task-form-header">
          <button id="close-task-form-btn" class="close-task-form-btn" type="button" aria-label="close">
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)" /><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)" /></svg>
          </button>
        </div>
        <div class="task-form-body">
          <label class="task-form-label" for="title-input">Title</label>
          <input required type="text" class="form-control" id="title-input" value="" />
          <label class="task-form-label" for="date-input">Date</label>
          <input type="date" class="form-control" id="date-input" value="" />
          <label class="task-form-label" for="description-input">Description</label>
          <textarea class="form-control" id="description-input" cols="30" rows="5"></textarea>
        </div>
        <div class="task-form-footer">
          <button id="add-or-update-task-btn" class="btn large-btn" type="submit">
            Add Task
          </button>
        </div>
      </form>
      <dialog id="confirm-close-dialog">
        <form method="dialog">
          <p class="discard-message-text">Discard unsaved changes?</p>
          <div class="confirm-close-dialog-btn-container">
            <button id="cancel-btn" class="btn">
              Cancel
            </button>
            <button id="discard-btn" class="btn">
              Discard
            </button>
          </div>
        </form>
      </dialog>
      <div id="tasks-container"></div>
    </div>
  </main>
  <script src="script.js"></script>
</body>

</html>
```

### style.css
```css
:root {
  --white: #fff;
  --light-grey: #f5f6f7;
  --dark-grey: #0a0a23;
  --yellow: #f1be32;
  --golden-yellow: #feac32;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--dark-grey);
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  color: var(--light-grey);
  margin: 20px 0 40px 0;
}

.todo-app {
  background-color: var(--white);
  width: 300px;
  height: 350px;
  border: 5px solid var(--yellow);
  border-radius: 8px;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: var(--dark-grey);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}

.large-btn {
  width: 80%;
  font-size: 1.2rem;
  align-self: center;
  justify-self: center;
}

.close-task-form-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  width: 20px;
  height: 20px;
}

.task-form {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white);
  border-radius: 5px;
  padding: 15px;
  width: 300px;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}

.task-form-header {
  display: flex;
  justify-content: flex-end;
}

.task-form-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.task-form-footer {
  display: flex;
  justify-content: center;
}

.task-form-label,
#title-input,
#date-input,
#description-input {
  display: block;
}

.task-form-label {
  margin-bottom: 5px;
  font-size: 1.3rem;
  font-weight: bold;
}

#title-input,
#date-input,
#description-input {
  width: 100%;
  margin-bottom: 10px;
  padding: 2px;
}

#confirm-close-dialog {
  padding: 10px;
  margin: 10px auto;
  border-radius: 15px;
}

.confirm-close-dialog-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.discard-message-text {
  font-weight: bold;
  font-size: 1.5rem;
}

#tasks-container {
  height: 100%;
  overflow-y: auto;
}

.task {
  margin: 5px 0;
}

.hidden {
  display: none;
}

@media (min-width: 576px) {
  .todo-app,
  .task-form {
    width: 400px;
    height: 450px;
  }

  .task-form-label {
    font-size: 1.5rem;
  }

  #title-input,
  #date-input {
    height: 2rem;
  }

  #title-input,
  #date-input,
  #description-input {
    padding: 5px;
    margin-bottom: 20px;
  }
}
```

### script.js

```js
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `;
  });
};

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");
};

const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

if (taskData.length) {
  updateTaskContainer();
}

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});
```