// let state = {
//   count: 0,
//   name: "failed",
//   age: 23,
// };

// // function increment() {
// //   // mutating the state
// //   // state.count = state.count + 1;

// //   // without mutating the state
// //   // spreading the state object and updating only the specific value rest are same
// //   state = { ...state, count: state.count + 1 };
// // }

// // increment();
// // console.log(state);
// // increment();
// // console.log(state);
// // increment();
// // console.log(state);

// // let initialState = {
// //   count: 0,
// //   name: "failed",
// //   age: 23,
// // };
// // import { productsList } from "./products";
// // let initialState = {
// //   products: productsList,
// //   cartItem: [{ productId: 1, quantity: 3 }],
// //   wishList: [2, 4, 5],
// // };
// // in redux
// // action is plain js object
// function reducer(state = initialState, action) {
//   //   if (action.type === "post/increment") {
//   //     return { ...state, count: state.count + 1 };
//   //   } else if (action.type === "post/decrement") {
//   //     return { ...state, count: state.count - 1 };
//   //   } else if (action.type === "post/incrementBy") {
//   //     // return { ...state, count: state.count + payload };   when payload is out of action object

//   //     return { ...state, count: state.count + action.payload };
//   //   } else if (action.type === "post/decrementBy") {
//   //     return { ...state, count: state.count - action.payload };
//   //   }
//   //   return state;

//   switch (action.type) {
//     case "post/increment":
//       return { ...state, count: state.count + 1 };
//     case "post/decrement":
//       return { ...state, count: state.count - 1 };
//     case "post/incrementBy":
//       return { ...state, count: state.count + action.payload };
//     case "post/decrementBy":
//       return { ...state, count: state.count - action.payload };
//     default:
//       return state;
//   }
// }

// // reduxState = reducer(reduxState, { type: "post/increment" });
// // console.log(reduxState);

// // reduxState = reducer(reduxState, { type: "post/increment" });
// // console.log(reduxState);

// // reduxState = reducer(reduxState, { type: "post/decrement" });
// // console.log(reduxState);

// // reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// // console.log(reduxState);

// // reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 10 });
// // console.log(reduxState);

// import { myCreateStore } from "./my-redux";

// const myStore = myCreateStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

// const mymyStore = myCreateStore(reducer);
// console.log(mymyStore);
// // to get the current state of the myStore
// console.log(myStore.getState());

// // to avoid writing console again and again, we can use subscribe method
// const unsubscribed1 = myStore.subscribe(() => {
//   console.log(myStore.getState());
// });
// const unsubscribed2 = myStore.subscribe(() => {
//   console.log("hi");
// });
// const unsubscribed3 = myStore.subscribe(() => {
//   console.log("hello");
// });

// // when we want to call the reducer, we call dispatch and dispacth(should have actions)
// myStore.dispatch({ type: "post/increment" });
// unsubscribed2();
// unsubscribed3();
// myStore.dispatch({ type: "post/decrement" });

// myStore.dispatch({ type: "post/incrementBy", payload: 10 });

// myStore.dispatch({ type: "post/decrementBy", payload: 5 });

import { createStore } from "redux";
import { productsList } from "./products";
let initialState = {
  products: productsList,
  cartItem: [{ productId: 1, quantity: 3 }],
  wishList: [2, 4, 5],
};

function reducer(state = initialState, action) {
  console.log(action)
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);
