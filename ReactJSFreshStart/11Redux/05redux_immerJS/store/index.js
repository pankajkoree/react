import { combineReducers, createStore } from "redux";
import {
  cartAddItem,
  cartItemQuantiyDecrease,
  cartItemQuantiyIncrease,
  cartRemoveItem,
} from "./slices/cartSlice";

import { wishListAddItem, wishListRemoveItem } from "./slices/wishlistSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { produce } from "immer";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishLists: wishlistSlice,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

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

const modifiedUser = produce(users, (usersCopy) => {
  usersCopy[1].age = 5;
  console.log(usersCopy);
});

console.log(modifiedUser);
console.log(users);
