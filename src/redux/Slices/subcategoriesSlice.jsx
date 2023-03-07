import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { subcategoriesService } from "../../api/services/subcategories";

export const fetchSubcategories = createAsyncThunk(
  "subcategories/fetchlist",
  async () => {
    const res = await subcategoriesService();
    return res.data;
  }
);

const subcategoriesSlice = createSlice({
  name: "subcategories/list",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchSubcategories.pending]: (state) => {
      state.status = "pending";
    },
    [fetchSubcategories.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchSubcategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
  },
});

export default subcategoriesSlice.reducer;
