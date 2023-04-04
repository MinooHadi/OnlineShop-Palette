import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ordersService } from "../../api/services/orders";

export const fetchOrders = createAsyncThunk(
  "orders/fetchlist",
  async ({ page, delivered }) => {
    const res = await ordersService(page, delivered);
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

const ordersSlice = createSlice({
  name: "orders/list",
  initialState: {
    data: [],
    status: "idle",
    totalCount: 0,
  },
  reducers: {},
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.status = "pending";
    },
    [fetchOrders.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = "success";
      const convert = [...action.payload[0]];
      convert.forEach((item) => {
        item.prices = ePersian(item.prices);
        item.createdAt = new Date(item.createdAt).toLocaleDateString("fa-IR");
        item.expectedAt = new Date(item.expectedAt).toLocaleDateString("fa-IR");
      });
      state.data = convert;
      state.totalCount = action.payload[1];
    },
  },
});

export default ordersSlice.reducer;
