import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../input";

import { RiArrowDownSFill } from "react-icons/ri";
import SubMenu from "../subMenu";

function DrawerMenu() {
  const [orders, setOrders] = useState(false);
  const [stocks, setStocks] = useState(false);
  const [products, setProducts] = useState(false);

  return (
    <div className="w-1/4 bg-yellow-200 p-6 flex flex-col gap-5 h-[600px] fixed top-40 overflow-auto no-scrollbar">
      <Input
        type="search"
        value=""
        lable="جست و جو براساس نام مشتری"
        className="border-2 h-8"
      />
      <select className="h-8">
        <option>فیلتر</option>
      </select>
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/orders">سفارش ها</Link>
          <RiArrowDownSFill size="1.5rem" onClick={() => setOrders(!orders)} />
        </div>
        {orders && (
          <SubMenu
            items={[
              "همه سفارش ها",
              "سفارش های ارسال شده",
              "سفارش های ارسال نشده",
            ]}
          />
        )}
      </div>
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/stocks" className="flex gap-1 w-fit">
            موجودی و قیمت ها
          </Link>{" "}
          <RiArrowDownSFill size="1.5rem" onClick={() => setStocks(!stocks)} />
        </div>
        {stocks && (
          <SubMenu
            items={[
              "همه موجودی ها",
              "بازی های فکری",
              "کتاب و مجله",
              "کیف",
              "لوازم اداری",
              "لوازم التحریر",
              "لوازم جانبی",
              "نقاشی",
            ]}
          />
        )}
      </div>
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/products" className="flex gap-1 w-fit">
            کالاها
          </Link>
          <RiArrowDownSFill
            size="1.5rem"
            onClick={() => setProducts(!products)}
          />
        </div>
        {products && (
          <SubMenu
            items={[
              "همه کالاها",
              "بازی های فکری",
              "کتاب و مجله",
              "کیف",
              "لوازم اداری",
              "لوازم التحریر",
              "لوازم جانبی",
              "نقاشی",
            ]}
          />
        )}
      </div>
    </div>
  );
}

export default DrawerMenu;
