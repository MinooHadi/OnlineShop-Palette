import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsService } from "../../api/services/products";

export const fetchProducts = createAsyncThunk("products/fetchlist", async () => {
  const res = await productsService();
  return res.data;
});

const productsSlice = createSlice({
  name: "products/list",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "pending";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default productsSlice.reducer;
