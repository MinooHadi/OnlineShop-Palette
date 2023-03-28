import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainSubcategoriesService } from "../../api/mainServices/subcategories";


export const fetchMainSubcategories = createAsyncThunk(
  "subcategory/fetchlist",
  async ({ subcategoryId }) => {
    const res = await mainSubcategoriesService(subcategoryId);
    return [res.data];
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
    },
  },
});

export default mainSubcategoriesSlice.reducer;
