import { combineReducers, createStore } from "redux";
import {
  cartAddItem,
  cartItemQuantiyDecrease,
  cartItemQuantiyIncrease,
  cartRemoveItem,
} from "./cartReducer";

import { wishListAddItem, wishListRemoveItem } from "./wishlistReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishLists: wishlistReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// // cartadditem
// store.dispatch(cartAddItem(3, 1));
// store.dispatch(cartAddItem(13, 1));
// store.dispatch(cartAddItem(7, 1));
// store.dispatch(cartAddItem(9, 1));

// //cartremoveItem
// store.dispatch(cartRemoveItem(7));

// // cartitemquatityincrease
// store.dispatch(cartItemQuantiyIncrease(13));
// store.dispatch(cartItemQuantiyIncrease(13));
// store.dispatch(cartItemQuantiyIncrease(9));

// // cartitemquantitydecrease
// store.dispatch(cartItemQuantiyDecrease(13));

// // wishlistadditem
// store.dispatch(wishListAddItem(3));
// store.dispatch(wishListAddItem(2));

// store.dispatch(wishListRemoveItem(3));
