import { createSlice } from "@reduxjs/toolkit";



const shoppingCardSlice = createSlice({
  name: "shoppingCard/list",
  initialState: {
    cardState: {},
  },
  reducers: {
    increase: (state, action) => {
      let prevCount = state.cardState[action.payload.id];
      if (prevCount) {
        state.cardState[action.payload.id] += action.payload.count;
      } else {
        state.cardState[action.payload.id] = action.payload.count;
      }
    },
    decrease: (state, action) => {
      let prevCount = state.cardState[action.payload];
      if (prevCount !== undefined) {
        state.cardState[action.payload] -= 1;
        if (prevCount === 1) {
          delete state.cardState[action.payload];
        }
      }
    },
    setCount: (state, action) => {
      state.cardState[action.payload.id] = action.payload.count;
    },
    deleteProduct: (state, action) => {
      delete state.cardState[action.payload]
    }
  },
});

export const shoppingCardSliceActions = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
