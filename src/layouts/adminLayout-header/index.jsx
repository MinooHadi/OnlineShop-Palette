import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/logo/logo.png";

import { AiOutlineArrowLeft } from "react-icons/ai";

function AdminLayoutHeader() {
  return (
    <div>
      <div className="flex justify-center items-center text-yellow-700 bg-yellow-300 h-10">
        <p>پنل ادمین</p>
      </div>
      <div className="flex items-center justify-between bg-yellow-100 px-12 py-3">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" className="w-32 h-24" />
          <p className="text-3xl font-bold text-yellow-900">
            پنل مدیریت فروشگاه
          </p>
        </div>
        <div className="hover:text-yellow-400">
          <Link to="/">
            <AiOutlineArrowLeft size="1.5rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLayoutHeader;
