import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log(store);
//       console.log(next);
//       console.log(action);
//       next(action);
//     };
//   };
// }

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishLists: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
