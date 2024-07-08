# JavaScript Projects

# Project 1 : Theme Changer

## Solution Code

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>theme changer</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
        <button class="gray"></button>
        <button class="pink"></button>
        <button class="red"></button>
        <button class="green"></button>
        <button class="purple"></button>
  </body>
</html>
```

### style.css

```css
* {
  margin: 0;
  padding: 0;
}
body{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5px;
}
.gray,
.pink,
.red,
.green,
.purple {
  border: 1px solid #000;
  width: 100px;
  height: 100px;
}
.gray {
  background-color: gray;
}
.pink {
  background: pink;
}
.red {
  background: red;
}
.green {
  background: green;
}
.purple {
  background: purple;
}
```


### script.js
```javascript
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        document.body.style.backgroundColor = e.target.className
    })
})  

```

# Project 2 : BMI Calculator

## Solution Code

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI calculator</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>BMI calculator</h1>
    <form action="">
      <label for="weight">Weight : </label
      ><input type="text" placeholder="enter the weight in kg" id="weight" />
      <br>
      <br>
      <label for="height">Height : </label
      ><input type="text" placeholder="enter the height in cm" id="height" />
      
      <br>
      <br>

      <button id="calcBMI">Calculate BMI</button>
    </form>
    <p class="bmiValue"></p>
    <p class="range"></p>
    <div id="weight-guide">
      <h3>BMI Weight Guide</h3>
      <p>Under Weight = Less than 18.6</p>
      <p>Normal Range = 18.6 and 24.9</p>
      <p>Overweight = Greater than 24.9</p>
    </div>
  </body>
</html>
```

### style.css
```css
body {
  font-family: Poppins;
  position: absolute;
  left: 50%;
  transform: translate(-50%); 
  text-align: center;
}
form input{
    width: 250px;
    height: 20px;
}
#calcBMI{
  width: 200px;
  height: 30px;
  font-size: 20px;
}
#weight-guide{
    position: absolute;
    top: 300px;
}
```
### script.js
``` js
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
```

# Project 3 : Digital Clock

## Solution Code

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Clock</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="clock"></div>
  </body>
</html>
```

### style.css
```css
*{
    margin: 0;
    padding: 0;
}
.clock{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 200px;
    height: 50px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 32px;
    color: #fff;
    border-radius: 10px;
}
```

```js
const clock = document.querySelector(".clock");

setInterval(() => {
  let time = new Date();
  clock.innerText = time.toLocaleTimeString();
}, 1000);
```