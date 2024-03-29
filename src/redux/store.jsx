import { configureStore } from "@reduxjs/toolkit";
import mainSubcategoriesSlice from "./MainSlices/mainSubcategoriesSlice";
import mainCategoriesSlice from "./MainSlices/mainCategorySlice";
import mainProductDetailSlice from "./MainSlices/mainProductDetailSlice";
import categoriesSlice from "./Slices/categoriesSlice";
import ordersSlice from "./Slices/ordersSlice";
import productsSlice from "./Slices/productsSlice";
import stocksSlice from "./Slices/stocksSlice";
import subcategoriesSlice from "./Slices/subcategoriesSlice";
import shoppingCardSlice from "./MainSlices/shoppingCardSlice";
import searchProductSlice from "./MainSlices/searchProductSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    orders: ordersSlice,
    stocks: stocksSlice,
    categories: categoriesSlice,
    subcategories: subcategoriesSlice,
    mainSubcategories: mainSubcategoriesSlice,
    mainCategories: mainCategoriesSlice,
    mainProductDetail: mainProductDetailSlice,
    shoppingCard: shoppingCardSlice,
    searchProduct: searchProductSlice,
  },
});
