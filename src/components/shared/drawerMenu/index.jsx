import React from "react";
import { Link } from "react-router-dom";
import Input from "../input";

function DrawerMenu() {
  return (
      <div className="w-1/4 bg-yellow-200 p-6 flex flex-col gap-5">
        <Input
          type="search"
          value=""
          lable="جست و جو براساس نام مشتری"
          className="border-2"
        />
        <select>
            <option>فیلتر</option>
        </select>
        <Link to="/admin/orders">سفارش ها</Link>
        <Link to="/admin/stocs">موجودی و قیمت ها</Link>
        <Link to="/admin/products">کالاها</Link>
      </div>
  );
}

export default DrawerMenu;
