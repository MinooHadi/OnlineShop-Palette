import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainOrderService } from "../../api/mainServices/orders";

export const postMainOrder = createAsyncThunk(
  "order/post",
  async ( data ) => {
    const res = await mainOrderService(data);
    return res.data;
  }
);

const shoppingCardSlice = createSlice({
  name: "shoppingCard/list",
  initialState: {
    orderId: null,
    cardState: JSON.parse(localStorage.getItem("cardState")) || {},
    status: "idle",
  },
  reducers: {
    increase: (state, action) => {
      let prevCount = state.cardState[action.payload.id];
      if (prevCount) {
        state.cardState[action.payload.id] += action.payload.count;
      } else {
        state.cardState[action.payload.id] = action.payload.count;
      }
      localStorage.setItem("cardState", JSON.stringify(state.cardState));
    },
    decrease: (state, action) => {
      let prevCount = state.cardState[action.payload];
      if (prevCount !== undefined) {
        state.cardState[action.payload] -= 1;
        if (prevCount === 1) {
          delete state.cardState[action.payload];
        }
      }
      localStorage.setItem("cardState", JSON.stringify(state.cardState));
    },
    setCount: (state, action) => {
      state.cardState[action.payload.id] = action.payload.count;
      localStorage.setItem("cardState", JSON.stringify(state.cardState));
    },
    deleteProduct: (state, action) => {
      delete state.cardState[action.payload];
      localStorage.setItem("cardState", JSON.stringify(state.cardState));
    },
    reset: (state) => {
      state.cardState = {};
      state.status = "idle";
      state.orderId = null;
    }
  },
  extraReducers: {
    [postMainOrder.pending]: (state) => {
      state.status = "pending";
    },
    [postMainOrder.rejected]: (state) => {
      state.status = "rejected";
    },
    [postMainOrder.fulfilled]: (state, action) => {
      state.status = "success";
      state.orderId = action.payload.id;
    },
  },
});

export const shoppingCardSliceActions = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
