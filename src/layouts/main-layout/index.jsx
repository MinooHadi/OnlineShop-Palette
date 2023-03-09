import React from "react";
import { Outlet } from "react-router-dom";

import MainLayoutFooter from "../mainLayout-footer";
import MainLayoutHeader from "../mainLayout-header";

function MainLayout() {
  return (
    <>
      <MainLayoutHeader />
      <h1>صفحه اصلی</h1>
      <Outlet />
      <MainLayoutFooter />
    </>
  );
}

export default MainLayout;
