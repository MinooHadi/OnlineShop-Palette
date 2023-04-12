import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchProductService } from "../../api/mainServices/search";

export const fetchSearchProduct = createAsyncThunk(
  "searchProduct/fetchlist",
  async ({ searchItem }) => {
    const res = await searchProductService(searchItem);
    return res.data;
  }
);

const searchProductSlice = createSlice({
  name: "searchProduct/list",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchSearchProduct.pending]: (state) => {
      state.status = "pending";
    },
    [fetchSearchProduct.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchSearchProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export default searchProductSlice.reducer;
