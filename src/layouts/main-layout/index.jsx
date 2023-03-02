import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h1>صفحه اصلی</h1>
      <Outlet />
    </>
  );
}

export default MainLayout;
