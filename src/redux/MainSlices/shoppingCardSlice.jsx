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
      console.log(action.payload);
    },
    decrease: (state, action) => {
      let prevCount = state.cardState[action.payload];
      if (prevCount !== undefined) {
        prevCount -= 1;
        if (prevCount === 0) {
          delete state.cardState[action.payload];
        }
      }
    },
  },
});

export const shoppingCardSliceActions = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
