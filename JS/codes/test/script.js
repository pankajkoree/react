// const button = document.querySelector("button");

// const promise = new Promise((resolved, rejected) => {
//   button.addEventListener("click", () => {
//     resolved("resolved");
//   });
// });

// console.log(promise);

async function myFun() {
  return "promise without new Promise";
}

const res = myFun();

console.log(res);
