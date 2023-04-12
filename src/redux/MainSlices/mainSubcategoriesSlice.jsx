import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainSubcategoriesService } from "../../api/mainServices/subcategories";

export const fetchMainSubcategories = createAsyncThunk(
  "subcategory/fetchlist",
  async ({ page, subcategoryId, sortId }) => {
    const res = await mainSubcategoriesService(page, subcategoryId, sortId);
    const totalCount = res.headers["x-total-count"];
    return [res.data, totalCount];
  }
);

const mainSubcategoriesSlice = createSlice({
  name: "subcategory/list",
  initialState: {
    data: [],
    status: "idle",
    totalCount: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchMainSubcategories.pending]: (state) => {
      state.status = "pending";
    },
    [fetchMainSubcategories.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchMainSubcategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload[0];
      state.totalCount = action.payload[1];
    },
  },
});

export default mainSubcategoriesSlice.reducer;
