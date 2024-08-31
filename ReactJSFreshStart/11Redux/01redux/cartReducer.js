export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    // cart functionality
    case CART_ADD_ITEM:
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
