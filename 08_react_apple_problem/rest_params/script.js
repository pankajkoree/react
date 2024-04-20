// previous function by argumnets
function add() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let arrayVal = [4, 6, 8, 7];

// function using rest params over arguments of spread operator
function add_(a, b, ...nums) {
  // the rest should be as last arguments
  // here ...nums is rest parameters
  console.log(a, b);
  let sum_ = 0;
  console.log("nums :", nums);
  for (let j = 0; j < nums.length; j++) {
    sum_ += nums[j];
  }

  return sum_;
}

// using above's array tp pass it in the function --- here ...arrayVal is spread operator

//add_(...arrayVal); // this will output the whole value

//lets add some variable in function's arguments so that remainng value will be treated as rest params ---> this is the reason why it is called as rest params
const result = add_(...arrayVal, 55, 67);
// if while passing some variable b4 the rest params but during the call time, we only pass the value for those variable only, then rest params will be an empty array

//using reduce to add
function _add(...nums) {
  // ...nums passed to function above is the values passed while calling the function
  return nums.reduce((acc, curr) => acc + curr); // here acc is accumultor and curr ic current
}

const res = _add(34, 56, 78, 98);

function _add_(...nums) {
  // adding arguments inplace of nums but directly we can't use arguments, we need to convert it into array as using arguments by spread operator
  //   return [...arguments].reduce((acc, curr) => acc + curr);

  // another approach of converting argument into array and using it as
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}
// but we normally don't use arguments , we prefer rest params

const res__ = _add_(56, 78, 91);
