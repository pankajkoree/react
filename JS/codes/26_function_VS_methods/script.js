// -------functions VS methods----------------
// Every methods are functions but every functions aren't methods
// for being a functions a method, the function should be inside a object

const mathsfn = {
  PI: 3.12,
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    if (a > b) {
      return a - b;
    }
    return b - a;
  },
  pow: function (a, b) {
    return a ** b;
  },
  // a new ES6 concept to define the same function
  subtract(a, b) {
    if (a > b) {
      return a - b;
    }
    return b - a;
  },
  pow1(a, b) {
    return a ** b;
  },
  cube(num) {
    return num * num * num;
  },
};
// ---------------***********--------------------
