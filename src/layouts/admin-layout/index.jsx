import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { DrawerMenu } from "../../components/shared";
import AdminLayoutHeader from "../adminLayout-header";

function AdminLayout() {
  const [drawerMenu, setDrawerMenu] = useState(false);

  function showHideDrawerMenu() {
    setDrawerMenu(!drawerMenu);
  }
  return (
    <>
      <AdminLayoutHeader />
      {drawerMenu ? (
        <div>
          <div
            className="w-8 h-16 rounded-l-full bg-yellow-300 fixed right-1/4"
            onClick={showHideDrawerMenu}
          ></div>
          <DrawerMenu />
        </div>
      ) : (
        <div
          className="w-8 h-16 rounded-l-full bg-yellow-600 fixed right-0"
          onClick={showHideDrawerMenu}
        ></div>
      )}

      <Outlet />
    </>
  );
}

export default AdminLayout;
