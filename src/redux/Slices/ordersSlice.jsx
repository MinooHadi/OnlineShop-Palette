import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ordersService } from "../../api/services/orders";

export const fetchOrders = createAsyncThunk("orders/fetchlist", async ({page, delivered}) => {
  const res = await ordersService(page, delivered);
  const totalCount = res.headers["x-total-count"];
  return [res.data, totalCount];
});

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
      console.log(action.payload);
      state.data = action.payload[0];
      state.totalCount = action.payload[1];
    },
  },
});

export default ordersSlice.reducer;
