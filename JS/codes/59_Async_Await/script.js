// -----------------Async and Await------------------------

// function makeRequest() {
//   // by default if we won't return anything, the function returns undefined but if we make a function async it will return a promise as below
//   return 1;
// }

// --------------------------------------------------------

// async function makeRequest() {}

// by default, the output would be  as :
// Promise {<fulfilled>: undefined}
// [[Prototype]]
// :
// Promise
// [[PromiseState]]
// :
// "fulfilled"
// [[PromiseResult]]
// :
// undefined

// --------------------------------------------------------

// async function makeRequest() {
//   // there's a keyword : throw
//   // which means throw the error
//   // anything after the throw statement won't be execute as below

//   console.log("before throw");

//   throw "nothing will be executed after this"; // it is also as return statement, which means the result here will be the throw statement

//   console.log("after throw"); //Unreachable code detected
// }

// --------------------------------------------------------

// function hi() {
//   // in detail throw error is as:
//   console.log("before detail error");

//   throw new Error("detailed error"); //here the Error is the error constructor which is inbuilt

//   console.log("after detail error");
// }

// --------------------------------------------------------

// rejecting a promise using async

async function makeRequest() {
  throw new Error("error occurred");
}
