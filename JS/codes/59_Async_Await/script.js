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

// async function makeRequest() {
//   throw new Error("error occurred");
// }

// --------------------------------------------------------

//getting the data after 5 seconds of delay

// async function makeRequest() {
//   setTimeout(async () => {
//     const url = "https://dummyjson.com/users";

//     const responsePromise = await fetch(url); // await returns the result of the fetch

//     console.log(responsePromise);

//     console.log("hi");
//   }, 5000);

//   //   responsePromise.then((res) => res.json());
// }

// // this makes the code to behave like synchronous code, which means code will be executed line by line
// // if we'd used then, the hi would have run before the resonse comes
// // but its actually an asynchronous code

// makeRequest();

// --------------------------------------------------------

// adding another function to test that it doesn't block the execution of other although it waits for the response
// it doesn't use the browsers main thred so it doesn't freezes the content
// async function makeRequest() {
//   setTimeout(async () => {
//     const url = "https://dummyjson.com/users";

//     const responsePromise = await fetch(url); // await returns the result of the fetch

//     console.log(responsePromise);

//     console.log("hi");
//   }, 5000);

//   //   responsePromise.then((res) => res.json());
// }

// function addTwoNumber() {
//   return 5 + 6;
// }

// --------------------------------------------------------
// fetching the acutal data
// like we used to have a error control in .then statement but what about here, for that thing we need try and catch
async function makeRequest() {
  setTimeout(async () => {
    const url = "https://dummyjson.com/users";

    const responsePromise = await fetch(url); // await returns the result of the fetch

    const data = await responsePromise.json();

    // // the above two lines code can be done in single line using await again as :
    // const data = await (await fetch(url)).json(); // await returns the result of the fetch
    // // but its not the recommended way to do

    console.log(data);
  }, 5000);
}
makeRequest();

function addTwoNumber() {
  return 5 + 6;
}

// ---------------------------------------------
// generally we can't keep await outside the async function
// but if we want to keep outside, we need type="module" in js linking
