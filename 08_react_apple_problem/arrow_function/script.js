// addition
document.getElementById("btn1").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  add_(a, b);
});

const add_ = (a, b) => {
  //   return a + b;
  console.log(a + b);
};

// subtraction
document.getElementById("btn2").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  sub_(a, b);
});

const sub_ = (a, b) => {
  // return (res = a > b ? a - b : b - a);
  console.log(a > b ? a - b : b - a);
};

// multiplication
document.getElementById("btn3").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  mul_(a, b);
});

const mul_ = (a, b) => {
  //   return a * b;
  console.log(a * b);
};

// division

document.getElementById("btn4").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  div_(a, b);
});

const div_ = (a, b) => {
  // if (b !== 0) {
  //   return a / b;
  // } else {
  //   return "can't be divided by zero...";
  // }

  // return (res = b !== 0 ? a / b : "can't be divided by zero...");
  console.log(b !== 0 ? a / b : "can't be divided by zero...");
};

// remainder
document.getElementById("btn5").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  rem_(a, b);
});

const rem_ = (a, b) => {
  // return a % b;
  console.log(a % b);
};

// maximum
document.getElementById("btn6").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  max_(a, b);
});

const max_ = (a, b) => {
  // return (res = a > b ? "max value is " + a : "max value is " + b);
  console.log(a > b ? "max value is " + a : "max value is " + b);
};

// minimum
document.getElementById("btn7").addEventListener("click", function () {
  let a = parseInt(document.getElementById("val1").value);
  let b = parseInt(document.getElementById("val2").value);
  min_(a, b);
});

const min_ = (a, b) => {
  // return (res = a < b ? "min value is " + a : "min value is " + b);
  console.log(a < b ? "min value is " + a : "min value is " + b);
};
