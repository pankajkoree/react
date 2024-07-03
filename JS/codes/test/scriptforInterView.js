// -----------------Interview Questions----------------------

// 1

// let array1 = [];
// let array2 = [];

// // both's output will  be false coz whenever we are comparing array, we don't compare its value, we compare its memory address

// console.log(array1 == array2);
// console.log(array1 === array2);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 2

// let array1 = [];
// let array2 = array1;

//output for both will be true coz copying an array into another variable copies the memory address too, so everything will be same, hence the answer will be true

// console.log(array1 == array2);
// console.log(array1 === array2);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 3

// let array1 = [20];
// let array2 = [20];

// // both will be true, 1st coz it compares the element of array which is same, so it will be true
// // 2nd will also be true, coz the type of both the array'value is Number so it will be true

// console.log(array1[0] == array2[0]);
// console.log(array1[0] === array2[0]);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 4

// let array1 = [1, 2, 3, 4];
// let object1 = { name: "anil" };

// console.log(...array1); // its result will be normal string of array1
// console.log(...object1); // this will throw the error as : TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// ----------------------------------------------------------
// ----------------------------------------------------------

// 5

// console.log(typeof NaN);     // result will number

// ----------------------------------------------------------
// ----------------------------------------------------------

// 6

// let data = 10 - -10;

// console.log(data); //20

// ----------------------------------------------------------
// ----------------------------------------------------------

// 7

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set); //set will only contain unique value, won't contain duplicate value

// ----------------------------------------------------------
// ----------------------------------------------------------

// 8

// let data = {
//   name: "Anil",
// };

// console.log(delete data.name); // true and data will be empty object

// ----------------------------------------------------------
// ----------------------------------------------------------

//9

// let data = {
//   name: "Anil",
// };

// console.log(delete data); //false, we can delete only the properties or elements not the variables

// ----------------------------------------------------------
// ----------------------------------------------------------

// 10

// let data = ["peter", "anil", "sam"];
// let [y] = data;
// console.log(y); //output will be peter, as the first element of array is peter

// ----------------------------------------------------------
// ----------------------------------------------------------

// 11

// let data = ["peter", "anil", "sam"];
// let [, y] = data; // getting 2nd value
// console.log(y);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 12

// let data = { name: "anil", age: 20 };

// // accessing property without using . operator
// // we can directly access the object properties with their actual variable name

// let { name } = data;
// console.log(name);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 13
// let data = { name: "anil", age: 29, skills: "JS" };
// let info = { city: "noida", mail: "anil@test.com" };

// // merging two object
// // using spread operator

// data = { ...data, ...info };
// console.log(data);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 14

// let data = { name: "anil", age: 29, skill: "JS" };
// let info = { city: "noida" };

// data = { data, ...info };
// console.log(data); //data won't be spreaded and info will be spreaded

// ----------------------------------------------------------
// ----------------------------------------------------------

// 15

// let data = { name: "anil", age: 29, skill: "JS" };
// let info = { city: "Noida", skill: "node" };

// data = { ...data, ...info };

// // both of them have skill property, and skill's value will the last one, as JS will be overritten by node

// console.log(data);

// ----------------------------------------------------------
// ----------------------------------------------------------

// 16
