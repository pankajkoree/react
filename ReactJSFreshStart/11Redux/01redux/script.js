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

let initialState = {
  count: 0,
  name: "failed",
  age: 23,
};

// in redux
// action is plain js object
function reducer(state = initialState, action) {
  //   if (action.type === "post/increment") {
  //     return { ...state, count: state.count + 1 };
  //   } else if (action.type === "post/decrement") {
  //     return { ...state, count: state.count - 1 };
  //   } else if (action.type === "post/incrementBy") {
  //     // return { ...state, count: state.count + payload };   when payload is out of action object

  //     return { ...state, count: state.count + action.payload };
  //   } else if (action.type === "post/decrementBy") {
  //     return { ...state, count: state.count - action.payload };
  //   }
  //   return state;

  switch (action.type) {
    case "post/increment":
      return { ...state, count: state.count + 1 };
    case "post/decrement":
      return { ...state, count: state.count - 1 };
    case "post/incrementBy":
      return { ...state, count: state.count + action.payload };
    case "post/decrementBy":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// console.log(reduxState);

import { createStore } from "redux";

const store = createStore(reducer);

// to get the current state of the store
console.log(store.getState());

// to avoid writing console again and again, we can use subscribe method
store.subscribe(() => {
  console.log(store.getState());
});

// when we want to call the reducer, we call dispatch and dispacth(should have actions)
store.dispatch({ type: "post/increment" });

store.dispatch({ type: "post/decrement" });

store.dispatch({ type: "post/incrementBy", payload: 10 });

store.dispatch({ type: "post/decrementBy", payload: 5 });
