# 30 Days JS Challenge : Day 12

## Topic : Error Handling

### Solution Code

### script.js

```js
// task 1: function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message
console.log("<----------task 1------------->");
const task1ErrorHandling = () => {
  try {
    throw new Error("Throwing error intentionally");
  } catch (error) {
    return error;
  }
};

console.log(task1ErrorHandling());

// task 2: function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

console.log("<----------task 2------------->");

const task2Divide = (numerator, denominator) => {
  try {
    if (denominator !== 0) {
      return numerator / denominator;
    } else {
      throw new Error("Denominator is zero");
    }
  } catch (error) {
    return error;
  }
};
console.log(task2Divide(3, 0));

// task 3: script that includes a try-catch block and finally block. Log the message in the try, catch and finally blocks to observe the execution flow
console.log("<----------task 3------------->");
const task3 = (string1, string2) => {
  try {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      throw new Error("Either of the arguments isn't a string");
    } else {
      console.log(`${string1} ${string2}`);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("final block will always be executed");
  }
};

task3("js", 45);

// task 4: create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block
console.log("<----------task 4------------->");
class CustomError extends Error {
  constructor(customText) {
    super(customText);
    this.name = this.constructor.name;
  }
}
const throwCustomError = () => {
  try {
    throw new CustomError("Custom Error");
  } catch (error) {
    return error;
  }
};

console.log(throwCustomError());

// task 5: function that validates user input(e.g. checking if a string isn't empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

const inputValue = document.querySelector("#forValue");
const sendData = document.querySelector("#sendData");

class CustomError2 extends Error {
  constructor(customText) {
    super(customText);
    this.name = this.constructor.name;
  }
}
sendData.addEventListener("click", () => {
  console.log("<----------task 5------------->");
  try {
    if (!inputValue.value) {
      throw new CustomError2("input value is empty");
    } else {
      console.log(inputValue.value);
    }
  } catch (error) {
    console.log(error);
  }
});

// task 6: create a promise that randomly resolves or rejects. Use a .catch() to handle the rejection and log appropriate message to the console

const randomPromise = () => {
  return new Promise((resolved, rejected) => {
    const randomNumber = Math.floor(Math.random() * 100);
    randomNumber < 50
      ? resolved(`promised resolved...`)
      : rejected(new Error(`promised rejected...`));
  })
    .then((result) =>
      console.log(`<----------task 6-------------> 
        ${result}`)
    )
    .catch((error) =>
      console.log(`<----------task 6-------------> 
            ${error}`)
    );
};

randomPromise();

// task 7: use a try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message

const randomPromise2 = () => {
  return new Promise((resolved, rejected) => {
    const randomNumber = Math.floor(Math.random() * 100);
    randomNumber < 50
      ? resolved(`promised resolved...`)
      : rejected(new Error(`promised rejected...`));
  });
};

async function handlePromise() {
  try {
    console.log(`<----------task 7-------------> 
        ${await randomPromise2()}`);
  } catch (error) {
    console.log(`<----------task 7-------------> 
        ${error}`);
  }
}

handlePromise();

// task 8: use the fetch API to request data from an invalid URL and handle the error using .catch(). Log and appropriate error message

const fetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in URL");
      }
      return response.json();
    })
    .then((data) => {
      console.log("<----------task 8------------->");
      console.log(data);
    })
    .catch((error) => {
      console.log("<----------task 8------------->");
      console.log(error);
    });
};

fetchAPI("https://dummyjson.com/carts/1");
fetchAPI("https://dummyjson.com/cartts/1");

// task 9: use the fetch API to request data from an invalid url within an async function and handle the error using try-catch. Log an appropriate error message

async function fetchAPI2(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("<----------task 9------------->");
    console.log(await response.json());
  } catch (error) {
    console.log("<----------task 9------------->");
    console.log(error);
  }
}

fetchAPI2("https://dummyjson.com/carts/1");
fetchAPI2("https://dummyjson.com/cartts/1");
```