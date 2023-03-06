import React from "react";
import { Outlet } from "react-router-dom";
import { Circle } from "../../components/shared";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  return (
    <>
      <AdminLayoutHeader />
      <div className="flex">
        <Circle title="سفارش ها" />
        <Circle title="موجودی ها" />
        <Circle title="کالا ها" />
      </div>
      <Outlet />
    </>
  );
}

export default AdminLayout;
