import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stocksService } from "../../api/services/stocks";

export const fetchStocks = createAsyncThunk(
  "stocks/fetchlist",
  async ({ page, categoryId, searchItem, sortId }) => {
    const res = await stocksService(page, categoryId, searchItem, sortId);
    const totalCount = res.headers["x-total-count"];
    return [res.data, totalCount];
  }
);

function ePersian(price) {
  let n = parseFloat(price);
  if (isNaN(n)) {
    return "-";
  }
  return n.toLocaleString("fa-IR");
}

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
      const convert = [...action.payload[0]];
      convert.map((item) => {
        item.price = ePersian(item.price);
        item.quantity = ePersian(item.quantity);
      });
      state.data = convert;
      state.totalCount = action.payload[1];
    },
  },
});

export default stocksSlice.reducer;
