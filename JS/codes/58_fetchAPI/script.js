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
// function makeFetchRequest(url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   });
// }

// makeFetchRequest("https://dummyjson.com/users")
//   .then((usersData) => {
//     return makeFetchRequest(
//       `https://dummyjson.com/posts/user/${usersData.users[0].id}`
//     );
//   })
//   .then((postsData) => {
//     return makeFetchRequest(
//       `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
//     );
//   })
//   .then((commentsData) => {
//     return makeFetchRequest(
//       `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
//     );
//   })
//   .then((userData) => {
//     console.log(userData);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// ------------------------------------------------------------------

function fetchDetails(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}

fetchDetails("https://dummyjson.com/users")
  .then((userData) => {
    return fetchDetails(
      `https://dummyjson.com/posts/user/${userData.users[0].id}`
    );
  })
  .then((postsData) => {
    return fetchDetails(
      `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
    );
  })
  .then((commentsData) => {
    return fetchDetails(
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
    );
  })
  .then((user) => {
    console.log("Id : ", user.id);

    console.log("FirstName : ", user.firstName);
    console.log("Age : ", user.age);
  })
  .catch((error) => {
    console.log(error);
  });
