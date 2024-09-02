import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

export function cartAddItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: { productData, quantity: 1 },
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

const findItemIndex = (state, action) =>
  state.findIndex(
    (item) => item.productData.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    cartItemQuantiyIncrease(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    cartItemQuantiyDecrease(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0) {
        state.splice(existingItemIndex, 1);
      }
    },
  },
});
console.log(slice);

export default slice.reducer;
