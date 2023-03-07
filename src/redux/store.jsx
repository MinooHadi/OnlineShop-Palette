import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
