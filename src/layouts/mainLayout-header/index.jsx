import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../../src/assets/logo/logo.png";

import { AdminLineIcon, FavoriteBorderIcon, ShoppingBagIcon } from "../../components/icons";

function MainLayoutHeader() {

  function adminAuth() {
    return Boolean(localStorage.getItem("token"))
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-10 text-slate-50 topColor arsoo text-xl">
        <p>به فروشگاه <span className="morvarid font-bold text-3xl">پالت</span> خوش اومدی</p>
      </div>
      <div className="flex items-center justify-between mainHeaderColor px-12 py-3">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" className="w-40 h-32" />
          <p className="text-4xl font-bold text-slate-600 vazir-medium">
            کتاب و لوازم التحریر و هنر
          </p>
        </div>
        <div className="flex gap-10 text-slate-600 vazir-semiBold">
          <Link
            className="flex flex-col items-center text-sm font-medium hover:text-lime-500"
            to={adminAuth() ? "/admin/orders" : "/adminLogin"}
          >
            <AdminLineIcon size="1.7rem" />
            مدیریت
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-red-500">
            <FavoriteBorderIcon size="1.7rem" />
            مورد علاقه ها
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-blue-500">
            <ShoppingBagIcon size="1.7rem" />
            سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainLayoutHeader;
