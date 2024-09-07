import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsData = createAsyncThunk(
  "product/fetchProductItems",
  async () => {
    try {
      const response = fetch(`https://dummyjson.com/products`);
      return response;
    } catch (err) {
      throw err;
    }
  }
);

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        (state.list = action.payload), (state.error = "");
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.err = action.payload || "Something went wrong...";
      });
  },
});

export const getAllProducts = (state) => state.products.list.products;
export const getProductLoadingState = (state) => state.products.loading;
export const getProductError = (state) => state.products.error;

export default slice.reducer;
