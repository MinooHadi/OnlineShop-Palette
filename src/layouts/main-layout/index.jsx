import React from "react";
import { Outlet } from "react-router-dom";
import MainLayoutFooter from "../mainLayout-footer";
import MainLayoutHeader from "../mainLayout-header";

function MainLayout() {
  return (
    <>
      <h1>صفحه اصلی</h1>
      <MainLayoutHeader />
      <Outlet />
      <MainLayoutFooter />
    </>
  );
}

export default MainLayout;
