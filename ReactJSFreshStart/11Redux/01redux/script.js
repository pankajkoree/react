import { combineReducers, createStore } from "redux";
import {
  CART_ADD_ITEM,
  CART_DECREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM,
} from "./cartReducer";

import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./wishlistReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItmes: cartReducer,
  wishLists: wishlistReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 13, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 7, quantity: 1 },
});

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 9, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 7 },
});

store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 13 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 13 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 9 },
});

store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 13 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 2 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 3 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 2 },
});
