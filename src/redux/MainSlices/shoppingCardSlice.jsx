import { createSlice } from "@reduxjs/toolkit";

const shoppingCardSlice = createSlice({
  name: "shoppingCard/list",
  initialState: {
    cardState: {},
  },
  reducers: {
    increase: (state, action) => {
      const prevCount = state.cardState[action.payload];
      if (prevCount) {
        prevCount += 1;
      } else {
        state.cardState[action.payload] = 1;
      }
    },
    decrease: (state, action) => {
      const prevCount = state.cardState[action.payload];
      if (prevCount !== undefined) {
        prevCount -= 1;
        if (prevCount === 0) {
          delete state.cardState[action.payload];
        }
      }
    },
  },
});


export default shoppingCardSlice.reducer;

