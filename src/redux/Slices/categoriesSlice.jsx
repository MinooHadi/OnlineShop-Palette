import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesService } from "../../api/services/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchlist",
  async () => {
    const res = await categoriesService();
    return res.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories/list",
  initialState: {
    data: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "pending";
    },
    [fetchCategories.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "success";
      const map = {};
      action.payload.forEach(
        (item) => (map[item.id] = { name: item.name, icon: item.icon })
      );
      state.data = map;
    },
  },
});

export default categoriesSlice.reducer;
