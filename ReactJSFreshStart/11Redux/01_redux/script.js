let state = {
  count: 0,
  name: "failed",
  age: 23,
};

// function increment() {
//   // mutating the state
//   // state.count = state.count + 1;

//   // without mutating the state
//   // spreading the state object and updating only the specific value rest are same
//   state = { ...state, count: state.count + 1 };
// }

// increment();
// console.log(state);
// increment();
// console.log(state);
// increment();
// console.log(state);

let reduxState = {
  count: 0,
  name: "failed",
  age: 23,
};

// in redux
// action is plain js object
function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, count: state.count - 1 };
  }
}

reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrement" });

console.log(reduxState);
