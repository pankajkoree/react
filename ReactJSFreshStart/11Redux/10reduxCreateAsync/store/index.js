import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/apiMiddleware";
import { func } from "./middleware/func";
import { logger } from "./middleware/logger";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishLists: wishlistSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiMiddleware,func),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
