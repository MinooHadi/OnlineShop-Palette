import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout, LoginLayout, MainLayout } from "../layouts"

function GateWay() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<h1>گروه محصولات</h1>} />
                    <Route path="/subCategories" element={<h1>محصولات هر گروه</h1>} />
                    <Route path="/product" element={<h1>محصول</h1>} />
                    <Route path="/card" element={<h1>سبد خرید</h1>} />
                    <Route path="/favorites" element={<h1>محصولات منتخب</h1>} />
                    <Route path="/checkout" element={<h1>پرداخت</h1>} />
                </Route>
                <Route path="/adminLogin" element={<LoginLayout />} />
                <Route element={<AdminLayout />}>
                    <Route path="/orders" element={<h1>سفارش ها</h1>} />
                    <Route path="/stocs" element={<h1>موجودی ها</h1>} />
                    <Route path="/products" element={<h1>محصولات</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default GateWay;