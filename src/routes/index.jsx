import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminPanelOrders,
  AdminPanelProducts,
  AdminPanelStocks,
} from "../components/pages/adminLayout-pages";
import {
  Cart,
  Category,
  Checkout,
  Favorites,
  Home,
  Product,
  Products,
} from "../components/pages/mainLayout-pages";
import { AdminLayout, LoginLayout, MainLayout } from "../layouts";

function GateWay() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* صنایع دتی، کتاب و مجله، لوازم التحریر */}
          <Route path="/" element={<Home />} />
          {/* خاتم و منبت کاری و ...، رمان و ...، ابزار نقاشی و رنگ آمیزی و ... */}
          <Route path="/category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/adminLogin" element={<LoginLayout />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/orders" element={<AdminPanelOrders />} />
          <Route path="/admin/stocs" element={<AdminPanelStocks />} />
          <Route path="/admin/products" element={<AdminPanelProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default GateWay;
