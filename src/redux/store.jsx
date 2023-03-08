import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./Slices/categoriesSlice";
import ordersSlice from "./Slices/ordersSlice";
import productsSlice from "./Slices/productsSlice";
import stocksSlice from "./Slices/stocksSlice";
import subcategoriesSlice from "./Slices/subcategoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    orders: ordersSlice,
    stocks: stocksSlice,
    categories: categoriesSlice,
    subcategories: subcategoriesSlice,
  },
});
