import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/logo/logo.png";

import { OutlineArrowLeftIcon } from "./../../components/icons";

function AdminLayoutHeader(props) {
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
        <div>
          <p className="text-xl py-2 px-6 bg-yellow-900 rounded-full text-yellow-100">
            {" "}
            {props.page}{" "}
          </p>
        </div>
        <div className="hover:text-yellow-400">
          <Link to="/">
            <OutlineArrowLeftIcon size="1.5rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLayoutHeader;
