import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./Slices/ordersSlice";
import productsSlice from "./Slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    orders: ordersSlice,
  },
});
