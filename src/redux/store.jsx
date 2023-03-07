import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "./Slices/shoppingSlice";

export const store = configureStore({
  reducer: {
    products: shoppingSlice,
  },
});
