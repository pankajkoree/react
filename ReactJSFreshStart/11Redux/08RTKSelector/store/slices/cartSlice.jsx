import { createSelector, createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true;
    },
    fetchCartItemsError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong!";
    },
    loadCartItems(state, action) {
      state.loading = false;
      state.list = action.payload.products;
    },
    cartAddItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list.splice(existingItemIndex, 1);
      }
    },
    cartItemQuantiyIncrease(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      }
    },
    cartItemQuantiyDecrease(state, action) {
      const existingItemIndex = findItemIndex(state / list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity -= 1;
        if (state.list[existingItemIndex].quantity === 0) {
          state.list.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const getCartItems = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.products.find(
        (product) => product.id === productId
      );

      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};

export const getAllCartItems = createSelector(getCartItems, (state) => state);

export const getCartLoadingState = (state) => state.cartItems.loading;
export const getCartError = (state) => state.cartItems.error;

export const {
  fetchCartItems,
  fetchCartItemsError,
  loadCartItems,
  cartAddItem,
  cartRemoveItem,
  cartItemQuantiyIncrease,
  cartItemQuantiyDecrease,
} = slice.actions;

export default slice.reducer;
