import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stocksService } from "../../api/services/stocks";

export const fetchStocks = createAsyncThunk(
  "stocks/fetchlist",
  async (page) => {
    const res = await stocksService(page);
    const totalCount = res.headers["x-total-count"];
    return [res.data, totalCount];
  }
);

const stocksSlice = createSlice({
  name: "stocks/list",
  initialState: {
    data: [],
    status: "idle",
    totalCount: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchStocks.pending]: (state) => {
      state.status = "pending";
    },
    [fetchStocks.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchStocks.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload[0];
      state.totalCount = action.payload[1];
    },
  },
});

export default stocksSlice.reducer;
