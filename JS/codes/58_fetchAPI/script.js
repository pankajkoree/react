// Fetch API

// ----------------------------------------------------------

// fetch("https://dummyjson.com/products").then((res) => {
//   //res is the response which we get when promise gets resolved
//   res.json().then((data) => {
//     console.log(data);
//   });
// });

//this is also one of the way but we generally don't do like this

// ----------------------------------------------------------

// by default it sends the get request

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     //res is the response which we get when promise gets resolved
//     return res.json();
//   })
//   .then((data) => console.log(data));

// ----------------------------------------------------------

// fetch("https://dummyjson.com/products", {
//   // this url doesn't support post request so we get error
//   method: "POST",
// })
//   .then((res) => {
//     //res is the response which we get when promise gets resolved
//     return res.json();
//   })
//   .then((data) => console.log(data));

// ----------------------------------------------------------

fetch("https://dummyjson.com/products", {
  method: "POST",
})
  .then((res) => {
    //res is the response which we get when promise gets resolved
    return res.json();
  })
  .then((data) => console.log(data));
