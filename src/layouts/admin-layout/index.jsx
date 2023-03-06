import React from "react";
import { Outlet } from "react-router-dom";
import { DrawerMenu } from "../../components/shared";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  return (
    <>
      <AdminLayoutHeader />
      {/* <div className="w-8 h-16 rounded-l-full bg-yellow-600"></div> */}
      <DrawerMenu />
      <Outlet />
    </>
  );
}

export default AdminLayout;
