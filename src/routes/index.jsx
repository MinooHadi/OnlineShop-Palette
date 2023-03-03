import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout, LoginLayout, MainLayout } from "../layouts"

function GateWay() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    {/* صنایع دتی، کتاب و مجله، لوازم التحریر */}
                    <Route path="/" element={<h1>گروه محصولات</h1>} />  
                    {/* خاتم و منبت کاری و ...، رمان و ...، ابزار نقاشی و رنگ آمیزی و ... */}
                    <Route path="/category?id=:catgoryId" element={<h1>زیرگروه محصولات</h1>} />
                    <Route path="products" element={<h1>محصولات هر زیرگروه</h1>} />
                    <Route path="/product?id=:productId" element={<h1>محصول</h1>} />
                    <Route path="/card" element={<h1>سبد خرید</h1>} />
                    <Route path="/favorites" element={<h1>محصولات منتخب</h1>} />
                    <Route path="/checkout" element={<h1>پرداخت</h1>} />
                </Route>
                <Route path="/adminLogin" element={<LoginLayout />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="/admin/orders" element={<h1>سفارش ها</h1>} />
                    <Route path="/admin/stocs" element={<h1>موجودی ها</h1>} />
                    <Route path="/admin/products" element={<h1>محصولات</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default GateWay;