// Math Object in JS

// Remainder operator   - gives the remaining value after Divisible by Divisor
const remainder = 13 % 3;

// Exponentiation operator - power of n to its power number
const exponent = 2 ** 5;

// LN_2 - log base 2
// LN_10 - log base 10
// PI - Math.PI
// Math.SQRT1_2 - 1/2 sqrt
// Math.SQRT_2 - sqrt2
// Math.sqrt() - sqrt of any number
// Math.pow() - power of any number

// Math.floor - removes the decimal value after the natural number/integer but when after decimal value reach upto 16 digit it goes up value like if the value is 4.9999999999999999 it will be 5 not 4 coz after decimal there's 16 digit so
const floorValPos = Math.floor(4.9999999999999999);

const floorValNeg = Math.floor(-2.66666); // result will be 3

// Math.ceil() - add 1 to the before decimal value Eg: Math.ceil(4.07) will be 5 & Math.ceil(-5.87) will be 5
const ceilValPos = Math.ceil(4.07);
const ceilValNeg = Math.ceil(-5.87);

// Math.round - makes the number closest to it's nearest integer
const roundPosUp = Math.round(2.51); // gives 3 coz its more closer to 3 than 2
const roundPosLow = Math.round(2.49); //gives 2

const roundNegLow = Math.round(-2.51); // gives -3
const roundNegUp = Math.round(-2.49); // gives -2

// Math.random() - gives a random value between 0 and 1
const randomNum = Math.random();

//  random value with in a specific range i.e. from 5 to 10

const spRandomRange = (min, max) => {
  const randomValStart = Math.random();
  const diffVal = max - min;
  const randomRoundVal = Math.round(diffVal * randomValStart);
  const randomInRange = randomRoundVal + min;
  return randomInRange;
};

// other language's gives error when dividing by zero but in JS it gives infinity for positive and -infinity for negative, as it has predefined keywords EG: -3/0 gives -Infinity

const infinityRes = 3 / 0;

const numerator = +prompt("Enter the numerator : ");
const denominator = +prompt("Enter the denominator : ");

console.log(numerator / denominator);
