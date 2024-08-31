import { act } from "react";

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

export function cartAddItem(productId, quantity) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId, quantity },
  };
}
export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}

export function cartItemQuantiyIncrease(productId) {
  return {
    type: CART_INCREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}
export function cartItemQuantiyDecrease(productId) {
  return {
    type: CART_DECREASE_ITEM_QUANTITY,
    payload: { productId },
  };
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    // cart functionality
    case CART_ADD_ITEM:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === existingItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
        });
      }
      return [...state, action.payload];
    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_INCREASE_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    case CART_DECREASE_ITEM_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}
