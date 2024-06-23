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

const p = new Promise((resolved, rejected) => {
  resolvedButton.addEventListener("click", () => {
    resolved("pk");
  });
});

// here, the functionality is that, we make the pending to be fulfilled by clicking button
