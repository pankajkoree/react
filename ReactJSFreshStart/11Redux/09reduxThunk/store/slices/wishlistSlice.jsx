import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    wishListAddItem(state, action) {
      const existingItemIndex = findItemIndex(state.action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
  },
});

export const { wishListAddItem } = slice.actions;
export default slice.reducer;
