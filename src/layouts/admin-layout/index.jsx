import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  return (
    <>
      <AdminLayoutHeader />
      <h1>پنل ادمین</h1>
      <Outlet />
    </>
  );
}

export default AdminLayout;
