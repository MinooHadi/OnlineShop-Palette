import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Slices/categoriesSlice";
import ordersSlice from "./Slices/ordersSlice";
import productsSlice from "./Slices/productsSlice";
import subcategoriesSlice from "./Slices/subcategoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    orders: ordersSlice,
    categories: categoriesSlice,
    subcategories: subcategoriesSlice,
  },
});
