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

export default function cartReducer(state = [], action) {
  switch (action.type) {
    // cart functionality
    case CART_ADD_ITEM:
      const existingItem = state.find((item) => {
        return (
          item.productData.productId === action.payload.productData.productId
        );
      });
      if (existingItem) {
        return state.map((item) => {
          if (
            item.productData.productId === existingItem.productData.productId
          ) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return [...state, action.payload];

    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case CART_INCREASE_ITEM_QUANTITY:
      console.log(state)
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    case CART_DECREASE_ITEM_QUANTITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
    default:
      return state;
  }
}
