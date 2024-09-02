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

export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    let existingItemIndex = state.findIndex(
      (item) => item.productData.productId === action.payload.productId
    );

    switch (action.type) {
      // cart functionality
      case CART_ADD_ITEM:
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity += 1;
          break;
        }
        state.push({ ...action.payload, quantity: 1 });
        break;
      case CART_REMOVE_ITEM:
        if (existingItemIndex !== -1) {
          state.splice(existingItemIndex, 1);
        }
        break;
      case CART_INCREASE_ITEM_QUANTITY:
        state[existingItemIndex].quantity += 1;
        break;
      case CART_DECREASE_ITEM_QUANTITY:
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          state.splice(existingItemIndex, 1);
        }
    }
    return state;
  });
}
