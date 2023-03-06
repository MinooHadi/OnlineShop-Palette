import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../../src/assets/logo/logo.png";

import { RiAdminLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

function MainLayoutHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-yellow-700 bg-yellow-300 h-10">
        <p>به فروشگاه من خوش اومدی</p>
      </div>
      <div className="flex items-center justify-between bg-yellow-100 px-12 py-3">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" className="w-40 h-32" />
          <p className="text-3xl font-bold text-yellow-900">
            کتاب و لوازم التحریر و هنر
          </p>
        </div>
        <div className="flex gap-10">
          <Link
            className="flex flex-col items-center text-sm font-medium hover:text-yellow-500"
            to="/adminLogin"
          >
            <RiAdminLine size="1.5rem" />
            مدیریت
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-yellow-500">
            <MdFavoriteBorder size="1.5rem" />
            مورد علاقه ها
          </Link>
          <Link className="flex flex-col items-center text-sm font-medium hover:text-yellow-500">
            <BiShoppingBag size="1.5rem" />
            سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainLayoutHeader;
