// usual function to get the result as NaN if not passing either of the param's value

function add(a, b) {
  return a + b;
}

// above's function's arrow function
const add_ = (a, b) => {
  // returns NaN if either of value isn't passed
  return a + b;
};

// function with default params to avoid NaN and doesn't affect if value is passed
const sum_ = (a = 0, b = 0) => {
  return a + b;
};

// for infinity -- problem arises
const div = (a, b) => {
  return a / b;
};

// solution for division infinity result
const div_ = (a, b = 1) => {
  return (res = b !== 0 ? a / b : "can't divide by zero");
};
