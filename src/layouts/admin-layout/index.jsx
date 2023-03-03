import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  return (
    <>
      <h1>پنل ادمین</h1>
      <AdminLayoutHeader />
      <Outlet />
    </>
  );
}

export default AdminLayout;
