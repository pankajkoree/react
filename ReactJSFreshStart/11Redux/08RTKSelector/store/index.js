import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "./middleware/logger";
import { apiMiddleware } from "./middleware/apiMiddleware";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishLists: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
