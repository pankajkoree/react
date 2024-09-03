import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishLists: wishlistSlice,
  },
});

const users = [
  {
    name: "pankaj",
    age: 23,
  },
  {
    name: "rajan",
    age: 20,
  },
  {
    name: "ram",
    age: 24,
  },
];

// users[1].age = 5;

// this makes a new modified array but this takes more lines of code... thats why we have produce method
// const modifiedUser=users.map((user, i) => {
//   return i == 1 ? { ...user, age: 5 } : user;
// });

// const modifiedUser = produce(users, (usersCopy) => {
//   usersCopy[1].age = 5;
//   console.log(usersCopy);
// });

// console.log(modifiedUser);
// console.log(users);
