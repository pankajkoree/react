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

fetch("https://dummyjson.com/products").then((res) => {
  //res is the response which we get when promise gets resolved
  res.json().then((data) => {
    console.log(data);
  });
});
