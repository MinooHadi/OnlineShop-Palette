import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Input from "../input";

import { RiArrowDownSFill } from "react-icons/ri";
import SubMenu from "../subMenu";
import Select from "../select";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";
import { fetchOrders } from "../../../redux/Slices/ordersSlice";
import { fetchProducts } from "../../../redux/Slices/productsSlice";
import { fetchStocks } from "../../../redux/Slices/stocksSlice";

function DrawerMenu() {
  const [ordersSub, setOrdersSub] = useState(false);
  const [stocksSub, setStocksSub] = useState(false);
  const [productsSub, setProductsSub] = useState(false);
  const [orderParams, setOrderParams] = useSearchParams();
  const [productParams, setProductParams] = useSearchParams();
  const [stockParams, setStockParams] = useSearchParams();

  const { categories } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchOrders({
        page: orderParams.get("page"),
        delivered: orderParams.get("delivered"),
      })
    );
  }, [dispatch, orderParams]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        page: productParams.get("page"),
        categoryId: productParams.get("categoryId"),
      })
    );
  }, [dispatch, productParams]);

  useEffect(() => {
    dispatch(
      fetchStocks({
        page: stockParams.get("page"),
        categoryId: stockParams.get("categoryId"),
      })
    );
  }, [dispatch, stockParams]);

  function ordersFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        orderParams.delete("delivered");
        break;
      case "1":
        orderParams.set("delivered", true);
        break;
      case "2":
        orderParams.set("delivered", false);
        break;
    }
    orderParams.set("page", 1);
    setOrderParams(orderParams.toString());
  }

  function productsFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        productParams.delete("categoryId");
        break;
      case "1":
        productParams.set("categoryId", 1);
        break;
      case "2":
        productParams.set("categoryId", 2);
        break;
      case "3":
        productParams.set("categoryId", 3);
        break;
      case "4":
        productParams.set("categoryId", 4);
        break;
      case "5":
        productParams.set("categoryId", 5);
        break;
      case "6":
        productParams.set("categoryId", 6);
        break;
      case "7":
        productParams.set("categoryId", 7);
        break;
    }
    productParams.set("page", 1);
    setProductParams(productParams.toString());
  }

  function stocksFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        stockParams.delete("categoryId");
        break;
      case "1":
        stockParams.set("categoryId", 1);
        break;
      case "2":
        stockParams.set("categoryId", 2);
        break;
      case "3":
        stockParams.set("categoryId", 3);
        break;
      case "4":
        stockParams.set("categoryId", 4);
        break;
      case "5":
        stockParams.set("categoryId", 5);
        break;
      case "6":
        stockParams.set("categoryId", 6);
        break;
      case "7":
        stockParams.set("categoryId", 7);
        break;
    }
    stockParams.set("page", 1);
    setStockParams(stockParams.toString());
  }

  return (
    <div className="w-1/4 bg-yellow-200 p-6 flex flex-col gap-5 h-[600px] fixed top-40 overflow-auto no-scrollbar">
      <Input type="search" value="" lable="جست و جو" className="border-2 h-8" />
      <Select opt={["فیلتر"]} />
      <Select opt={["مرتب سازی"]} />
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/orders">سفارش ها</Link>
          <RiArrowDownSFill
            size="1.5rem"
            onClick={() => setOrdersSub(!ordersSub)}
          />
        </div>
        {ordersSub && (
          <SubMenu
            items={[
              { name: "سفارش های ارسال شده", id: 1 },
              { name: "سفارش های ارسال نشده", id: 2 },
            ]}
            all="همه سفارش ها"
            onClick={ordersFilter}
          />
        )}
      </div>
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/stocks" className="flex gap-1 w-fit">
            موجودی و قیمت ها
          </Link>
          <RiArrowDownSFill
            size="1.5rem"
            onClick={() => setStocksSub(!stocksSub)}
          />
        </div>
        {stocksSub && (
          <SubMenu
            items={categories.data}
            all="همه موجودی ها"
            onClick={stocksFilter}
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
            onClick={() => setProductsSub(!productsSub)}
          />
        </div>
        {productsSub && (
          <SubMenu
            items={categories.data}
            all="همه کالاها"
            onClick={productsFilter}
          />
        )}
      </div>
    </div>
  );
}

export default DrawerMenu;
