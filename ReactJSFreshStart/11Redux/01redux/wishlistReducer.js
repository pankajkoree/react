export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export function wishListAddItem(productId) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId },
  };
}

export function wishListRemoveItem(productId) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId },
  };
}

export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    // wishlist functionality
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
