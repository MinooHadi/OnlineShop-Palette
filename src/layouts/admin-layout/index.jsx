import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DrawerMenu } from "../../components/shared";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  const [drawerMenu, setDrawerMenu] = useState(false);
  const { pathname } = useLocation();

  function showHideDrawerMenu() {
    setDrawerMenu(!drawerMenu);
  }

  function headerTitle() {
    switch (pathname) {
      case "/admin/orders":
        return "مدیریت سفارش ها";
      case "/admin/stocks":
        return "مدیریت موجودی ها";
      case "/admin/products":
        return "مدیریت کالاها";
      default:
        return;
    }
  }

  return (
    <>
      <AdminLayoutHeader page={headerTitle()} />
      {drawerMenu ? (
        <div>
          <div
            className="w-8 h-16 rounded-l-full bg-yellow-300 fixed right-1/4 flex items-center justify-center cursor-pointer"
            onClick={showHideDrawerMenu}
          >
            <p className="text-yellow-900 text-lg -rotate-90">منو</p>
          </div>
          <DrawerMenu />
        </div>
      ) : (
        <div
          className="w-8 h-16 rounded-l-full bg-yellow-300 fixed right-0 flex items-center justify-center cursor-pointer"
          onClick={showHideDrawerMenu}
        >
          <p className="text-yellow-900 text-lg -rotate-90">منو</p>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default AdminLayout;
