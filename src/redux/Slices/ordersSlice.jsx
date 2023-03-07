import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ordersService } from "../../api/services/orders";

export const fetchOrders = createAsyncThunk("orders/fetchlist", async () => {
  const res = await ordersService();
  return res.data;
});

const ordersSlice = createSlice({
  name: "orders/list",
  initialState: {
    data: [],
    status: "idle",
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
      state.data = action.payload;
    },
  },
});

export default ordersSlice.reducer