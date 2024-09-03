import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";

function logger(store) {
  return function (next) {
    return function (action) {
      console.log(store);
      console.log(next);
      console.log(action);
    };
  };
}
export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishLists: wishlistSlice,
  },
});
