import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <h1>پنل ادمین</h1>
      <Outlet />
    </>
  );
}

export default AdminLayout;
