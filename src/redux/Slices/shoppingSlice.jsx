import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { shoppingService } from "../../api/services/shop";

export const fetchProducts = createAsyncThunk("products/fetchlist", async () => {
  const res = await shoppingService();
  console.log(res.data);
  return res.data;
});

const shoppingSlice = createSlice({
  name: "products/list",
  initialState: {
    data: [],
    status: "idle",
  },
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

export default shoppingSlice.reducer;
