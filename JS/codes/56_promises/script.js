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
p.then((data) => {
  console.log(data);
})
  .catch((error) => {
    // catch also accepts a callback function which tells what would be next when promise is rejected
    console.log(error);
  })
  .finally(() => {
    console.log("Finally"); // will be executed either its resolve or rejected
  });

// callback comes under microtask queue
// the priority of microtask queue is greater than callback queue, which makes it be executed first
// promise settled is a state when promise isn't pending, it can either be resolved or rejected, and then finally it runs

// ---------------------------------------------------------
