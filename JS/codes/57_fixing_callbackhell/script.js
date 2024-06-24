// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";

//   const promise = new Promise((resolved, rejected) => {
//     xhr.addEventListener("load", () => {
//       resolved(xhr.response);
//     });
//   });

//   xhr.open(method, url);
//   xhr.send();
//   return promise;
// }

// makeHttpRequest("GET", "https://dummyjson.com/users", (usersData) => {
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
//     (postsData) => {
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postsData.posts[0].id}`,
//         (commentsData) => {
//           makeHttpRequest(
//             "GET",
//             `https://dummyjson.com/users/${commentsData.comments[0].user.id}`,
//             (userData) => {
//               console.log(userData);
//             }
//           );
//         }
//       );
//     }
//   );
// });

// ---------------------------------------------------------

// fixing the callback hell as it was before
// we won't be accepting a callback function as third argument
function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const promise = new Promise((resolved, rejected) => {
    xhr.addEventListener("load", () => {
      resolved(xhr.response);
    });
    xhr.addEventListener("error", () => {
      rejected("promise rejected, some error occured");
    });
  });

  xhr.open(method, url);
  xhr.send();
  return promise;
}

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((usersData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${usersData.users[0].id}`
    );
  })
  .then((postsData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/comments/post/${postsData.posts[0].id}`
    );
  })
  .then((commentsData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/users/${commentsData.comments[0].user.id}`
    );
  })
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.log(error);
  });
