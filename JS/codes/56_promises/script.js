// making promises

// const prom = new Promise(); // throws the error normally , coz we need to pass a function inside it so

// ----------------------------------------------------

// lets pass the function
// const prom = new Promise(() => {}); // promise can have three state, i.e. pending, resolved, and rejected, but as of now it will pe pending, we need to pass again some argument

// ----------------------------------------------------

// const prom = new Promise((resolved, rejected) => {
//   //   resolved(); //if we dont passanything here, the promiseResult will be undefined, so lets pass something

//   resolved({ hi: "uk" }); // here as we pass the object, the type will be object
// });

// ---------------------------------------------------------

// lets reject something too

// const prom = new Promise((resolved, rejected) => {
//   rejected("promise rejected");
// });

// but we are doing all these things instantly

// ---------------------------------------------------------

const resolvedButton = document.querySelector("#resolveButton");
const rejectedButton = document.querySelector("#rejectButton");
const p = new Promise((resolved, rejected) => {
  resolvedButton.addEventListener("click", () => {
    resolved("Promise resolved");
  });
  rejectedButton.addEventListener("click", () => {
    rejected("Promise rejected");
  });
});

// here, the functionality is that, we make the pending to be fulfilled by clicking button

// ---------------------------------------------------------

// then accepts a callback function which means what would be the next when promise would be resolved
// p.then((data) => {
//   console.log(data);
// })
//   .catch((error) => {
//     // catch also accepts a callback function which tells what would be next when promise is rejected
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally"); // will be executed either its resolve or rejected
//   });

// callback comes under microtask queue
// the priority of microtask queue is greater than callback queue, which makes it be executed first
// promise settled is a state when promise isn't pending, it can either be resolved or rejected, and then finally it runs

// ---------------------------------------------------------
// P2's result will be undefined coz we aren't returing anything
// const p2 = p
//   .then((data) => {
//     console.log(data); //but it will print the resolved value which is up in the resolved section
//   })
//   .then((data) => {
//     console.log(data); //so on this too undefined
//   })
//   .then((data) => {
//     console.log(data); //so on this too undefined
//   });

// ---------------------------------------------------------

// checking whether we can add then in catch too or not

// const p2 = p
//   .then((data) => {
//     console.log(data); //but it will print the resolved value which is up in the resolved section
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => {
//     console.log("hi");
//   });

// its possible to add .then after the catch too

// ---------------------------------------------------------
// catch also return a promise, which grows the shape horizontally not vertically, which resolves the problem of callback hell

const p2 = p
  .then((data) => {
    console.log(data); //but it will print the resolved value which is up in the resolved section
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("hi");
  });

// ---------------------------------------------------------
