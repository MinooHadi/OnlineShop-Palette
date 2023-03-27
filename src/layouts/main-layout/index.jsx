import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderCarts } from "../../components/shared";

import MainLayoutFooter from "../mainLayout-footer";
import MainLayoutHeader from "../mainLayout-header";

function MainLayout() {
  return (
    <>
      <MainLayoutHeader />
      <HeaderCarts />
      <Outlet />
      <MainLayoutFooter />
    </>
  );
}

export default MainLayout;
