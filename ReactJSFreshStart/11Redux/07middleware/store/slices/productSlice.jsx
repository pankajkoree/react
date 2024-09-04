import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    updateAllProducts(state, action) {
      state.loading = false
      state.list = action.payload;
    },
  },
});

export const { updateAllProducts } = slice.actions;
export default slice.reducer;
