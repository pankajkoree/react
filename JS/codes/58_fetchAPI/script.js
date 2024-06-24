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

// fetch("https://dummyjson.com/products", {
//   method: "POST", //request method can be anything which means it can custom and this link doesn't support POST method
// })
//   .then((res) => {
//     //res is the response which we get when promise gets resolved
//     return res.json();
//   })
//   .then((data) => console.log(data));

// ----------------------------------------------------------

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" }, // header are optional
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     category: "Stationary",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);

// ----------------------------------------------------------
