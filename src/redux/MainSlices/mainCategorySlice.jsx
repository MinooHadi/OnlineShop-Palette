import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainCategoriesService } from "../../api/mainServices/categories";

export const fetchMainCategories = createAsyncThunk(
  "category/fetchlist",
  async ({ categoryId }) => {
    const res = await mainCategoriesService(categoryId);
    return [res.data];
  }
);

const mainCategoriesSlice = createSlice({
  name: "category/list",
  initialState: {
    data: [],
    status: "idle",
    totalCount: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchMainCategories.pending]: (state) => {
      state.status = "pending";
    },
    [fetchMainCategories.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchMainCategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload[0];
    },
  },
});

export default mainCategoriesSlice.reducer;
