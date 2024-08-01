// task 1:

function outerFunction() {
  let outerVariable = `Outer Variable`;

  function innerFunction() {
    return `Accessing Outer Variable inside inner function : ${outerVariable}`;
  }
  console.log(innerFunction());
}

outerFunction();

// task 2:
function counter() {
  let count = 0;
  function increment() {
    count += 1;
  }
  function getCount() {
    return count;
  }
  increment();
  console.log(getCount());
}

counter();

// task 3:
function generateUniqueID() {
  let uniqueId = Math.floor(Math.random() * 10000);

  function keepTrack() {
    let id = uniqueId;
    id += 1;
    return id;
  }
  console.log(keepTrack());
}

generateUniqueID();

// task 4:
function userDetails(username) {
  let userName = username;

  function captureAndGreet() {
    let name = userName;
    return `Hello, ${name}`;
  }
  console.log(captureAndGreet());
}

userDetails("Rajan");

// task 5:

function outerTask5() {
  let arrayOfFunctions = [];

  function creatingArray() {
    for (let i = 0; i <= 10; i++) {
      arrayOfFunctions.push(function () {
        return "Functions : " + i;
      });
    }
  }
  creatingArray();
  console.log(arrayOfFunctions);
}

outerTask5();

// task 6:

function manageCollection() {
  let collection = [];

  function addCollection(item) {
    collection.push(item);
    return collection;
  }

  function removeCollection() {
    collection.pop();
    return collection;
  }

  function listItems() {
    return collection;
  }

  addCollection("item1");
  addCollection("item2");
  addCollection("item3");
  addCollection("item4");
  console.log(collection);

  removeCollection();

  console.log(collection);
  console.log(listItems());
}
manageCollection();

// task 7:
const doubleNumber = (n) => {
  return `Double of ${n} is ${n * 2}`;
};

function memoize(fn) {
  const prevComp = new Map();
  return function (...args) {
    const key = args;

    if (prevComp.has(key)) {
      return prevComp.get(key);
    }

    const result = fn(...args);
    prevComp.set(key, result);
    return result;
  };
}
const closureBoth = memoize(doubleNumber);

console.log(closureBoth(2));

// task 8:
function factorial(n) {
  if (n < 0) {
    throw new Error("Negative not allowed");
  }
  let resultFact = 1;
  for (let i = 2; i <= n; i++) {
    resultFact *= i;
  }
  return `Factorial of ${n} is ${resultFact}`;
}

const closureFactorial = memoize(factorial);
console.log(closureFactorial(5));
