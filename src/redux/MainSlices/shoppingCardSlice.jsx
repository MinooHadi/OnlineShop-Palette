import { createSlice } from "@reduxjs/toolkit";

const shoppingCardSlice = createSlice({
  name: "shoppingCard/list",
  initialState: {
    cardState: {},
  },
  reducers: {
    increase: (state, action) => {
      let prevCount = state.cardState[action.payload];
      if (prevCount) {
        state.cardState[action.payload] += 1;
      } else {
        state.cardState[action.payload] = 1;
      }
      console.log("prevCount", prevCount);
      console.log(
        "state.cardState[action.payload]",
        state.cardState[action.payload]
      );
      console.log("action.payload", action.payload);
      console.log(state.cardState);
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
