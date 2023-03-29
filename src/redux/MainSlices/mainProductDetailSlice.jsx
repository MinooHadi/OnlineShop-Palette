import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainProductDetailService } from "../../api/mainServices/products";

export const fetchMainProductDetail = createAsyncThunk(
  "productDetail/fetchlist",
  async ({ id }) => {
    const res = await mainProductDetailService(id);
    return res.data;
  }
);

const mainProductDetailSlice = createSlice({
  name: "productDetail/list",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchMainProductDetail.pending]: (state) => {
      state.status = "pending";
    },
    [fetchMainProductDetail.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchMainProductDetail.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default mainProductDetailSlice.reducer;
