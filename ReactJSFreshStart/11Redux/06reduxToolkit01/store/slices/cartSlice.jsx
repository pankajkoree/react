import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartAddItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
        console.log(`Item quantity increased:`, state[existingItemIndex]);
      } else {
        state.push({ ...action.payload, quantity: 1 });
        console.log(`New item added:`, action.payload);
      }
    },
    cartRemoveItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        console.log(`Item removed:`, state[existingItemIndex]);
        state.splice(existingItemIndex, 1);
      }
    },
    cartItemQuantiyIncrease(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
        console.log(`Quantity increased:`, state[existingItemIndex]);
      }
    },
    cartItemQuantiyDecrease(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity -= 1;
        if (state[existingItemIndex].quantity === 0) {
          console.log(
            `Item removed due to zero quantity:`,
            state[existingItemIndex]
          );
          state.splice(existingItemIndex, 1);
        } else {
          console.log(`Quantity decreased:`, state[existingItemIndex]);
        }
      }
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItem,
  cartItemQuantiyIncrease,
  cartItemQuantiyDecrease,
} = slice.actions;

export default slice.reducer;
