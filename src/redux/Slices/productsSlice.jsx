import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsService } from "../../api/services/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchlist",
  async ({page, categoryId, searchItem, sortId}) => {
    const res = await productsService(page, categoryId, searchItem, sortId);
    const totalCount = res.headers["x-total-count"];
    return [res.data, totalCount];
  }
);

const productsSlice = createSlice({
  name: "products/list",
  initialState: {
    data: [],
    status: "idle",
    totalCount: 0,
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
      state.data = action.payload[0];
      state.totalCount = action.payload[1];
    },
  },
});

export default productsSlice.reducer;
