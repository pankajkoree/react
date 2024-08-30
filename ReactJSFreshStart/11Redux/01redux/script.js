import { createStore } from "redux";
import { productsList } from "./products";
let initialState = {
  products: productsList,
  cartItems: [],
  wishLists: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

function reducer(state = initialState, action) {
  switch (action.type) {
    // cart functionality
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case CART_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case CART_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };

    // wishlist functionality
    case WISHLIST_ADD_ITEM:
      return { ...state, wishLists: [...state.wishLists, action.payload] };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishLists: state.wishLists.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
}
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
