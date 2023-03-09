import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/logo/logo.png";

import { OutlineArrowLeftIcon } from "./../../components/icons";

function AdminLayoutHeader(props) {
  return (
    <div>
      <div className="flex justify-center items-center h-10 text-slate-50 topColor arsoo text-xl">
        <p>پنل ادمین</p>
      </div>
      <div className="flex items-center justify-between mainFooterColor px-12 py-3">
        <div className="flex items-center gap-16">
          <img src={logo} alt="logo" className="w-32 h-24" />
          <p className="text-3xl font-bold text-slate-600 vazir-medium">
            پنل مدیریت فروشگاه
          </p>
        </div>
        <div>
          <p className="text-xl text-slate-500 vazir-bold">
            {props.page}
          </p>
        </div>
        <div className="hover:text-fuchsia-500 text-slate-600">
          <Link to="/">
            <OutlineArrowLeftIcon size="1.5rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLayoutHeader;
