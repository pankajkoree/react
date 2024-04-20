// <-------- GET REQUEST --------->

// <-------- ----------- --------->
// one way
// fetch("https://dummyjson.com/products").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });
// <-------- ----------- --------->
// 2nd way -- not using implicit return
// fetch("https://dummyjson.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// <-------- ----------- --------->
// 3rd way using implicit return
// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// <-------- ----------- --------->

// <-------- GET REQUEST --------->

// <-------- POST REQUEST --------->

// gives the error coz url might not accept post method

// fetch("https://dummyjson.com/products", { method: "POST" })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// <-------- ----------- --------->

// trying on unknown url
// fetch("hello", { method: "pankaj" })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// <-------- ----------- --------->

// <-------- POST REQUEST --------->

// <-----setting the header ------->
// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     title: "BMW Pencil",
//     category: "Stationary",
//     /* other product data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log);
// <-----setting the header ------->
// <-------- ----------- --------->

// <-------- POST REQUEST --------->

// <------ exception handling ------>

// <--------------------------------->
fetch("https://dummyjsons.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
    category: "Stationary",
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => {
    console.log(err);
  });

// <--------------------------------->
// <------ exception handling ------>
