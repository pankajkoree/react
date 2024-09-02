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

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishLists: wishlistSlice,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
