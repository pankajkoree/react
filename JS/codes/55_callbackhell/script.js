// these codes are that much usuable thats why, we normally create a function for that

// function makeHTTPRequest(method, url) {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = "json";
//   xhr.addEventListener("load", () => {
//     console.log(xhr.response);
//   });

//   xhr.open(method, url);
//   xhr.send();
// }
// makeHTTPRequest("GET", "https://dummyjson.com/users");
// makeHTTPRequest("GET", "https://dummyjson.com/users/1");

// ----------------------------------------------------------

// passing a callback function as third arg to make it more reusuable
function makeHTTPRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}
makeHTTPRequest("GET", "https://dummyjson.com/users", (data) => {
  console.log("users : ", data);
  makeHTTPRequest(
    "GET",
    `https://dummyjson.com/posts/user/${data.users[0].id}`,
    (data) => {
      console.log("posts : ", data.posts[0].id);
      makeHTTPRequest(
        "GET",
        `https://dummyjson.com/comments/post/user/${data.posts[0].id}`,
        (commentData) => {
          console.log(commentData);
        }
      );
    }
  );

  //   making such triangle shape, is callbackhell, which means, we fetch something with other fetch, which gets nested, this is the reason why "promises" was introduced
}); // this is how we send request on data
