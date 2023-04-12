import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Input from "../input";
import SubMenu from "../subMenu";
import Select from "../select";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";

import { ArrowDownSFillIcon } from "../../icons";

function DrawerMenu(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ordersSub, setOrdersSub] = useState(false);
  const [stocksSub, setStocksSub] = useState(false);
  const [productsSub, setProductsSub] = useState(false);
  const [selectedValue, setSelectedValue] = useState(-1);
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  const { categories } = useSelector((store) => store);

  const commonOptions = [
    { name: "مرتب سازی", id: -1 },
    { name: "به ترتیب حروف الفبا", id: 5 },
    { name: "براساس قیمت (نزولی)", id: 1 },
    { name: "براساس قیمت (صعودی)", id: 2 },
    { name: "براساس تعداد (نزولی)", id: 3 },
    { name: "براساس تعداد (صعودی)", id: 4 },
  ];

  const orderOption = [
    { name: "مرتب سازی", id: -1 },
    { name: "به ترتیب حروف الفبا", id: 5 },
    { name: "به ترتیب تاریخ (نزولی)", id: 6 },
    { name: "به ترتیب تاریخ (صعودی)", id: 7 },
  ];

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function ordersFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        navigate("/admin/orders");
        break;
      case "1":
        navigate("/admin/orders?delivered=true");
        break;
      case "2":
        navigate("/admin/orders?delivered=false");
        break;
    }
  }

  function productsFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        navigate("/admin/products");
        break;
      default:
        navigate(`/admin/products?categoryId=${id}`);
    }
  }

  function stocksFilter(e) {
    const id = e.target.id;
    switch (id) {
      case "0":
        navigate("/admin/stocks");
        break;
      default:
        navigate(`/admin/stocks?categoryId=${id}`);
        break;
    }
  }

  function search(e) {
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    setParams(params.toString());
  }

  function sortProducts(e) {
    setSelectedValue(e.target.value);
    params.delete("page");
    if (e.target.value == -1) {
      params.delete("sort");
    } else {
      params.set("sort", e.target.value);
    }
    setParams(params.toString());
  }

  return (
    <div className="w-80 bg-rose-100 border-rose-400 text-slate-600 vazir-bold border-2 p-6 flex flex-col gap-5 h-[600px] fixed top-40 overflow-auto no-scrollbar">
      <Input
        type="search"
        value=""
        lable="جست و جو"
        className="border-2 h-8 w-64"
        onFocus={() => {
          setOrdersSub(false);
          setProductsSub(false);
          setStocksSub(false);
        }}
        onChange={search}
        defaultValue={params.get("search")}
      />
      {location.pathname.startsWith("/admin/orders") ? (
        <>
          <Select
            opt={orderOption}
            className="h-8 w-64"
            onChange={sortProducts}
            value={selectedValue}
          />
        </>
      ) : (
        <>
          <Select opt={[{ name: "فیلتر" }]} className="h-8 w-64" />
          <Select
            opt={commonOptions}
            className="h-8 w-64"
            onChange={sortProducts}
            value={selectedValue}
          />
        </>
      )}
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/orders" onClick={() => setSelectedValue(-1)}>
            سفارش ها
          </Link>
          <ArrowDownSFillIcon
            size="1.5rem"
            onClick={() => {
              setOrdersSub(!ordersSub);
              setProductsSub(false);
              setStocksSub(false);
            }}
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
          <Link
            to="/admin/stocks"
            className="flex gap-1 w-fit"
            onClick={() => setSelectedValue(-1)}
          >
            موجودی و قیمت ها
          </Link>
          <ArrowDownSFillIcon
            size="1.5rem"
            onClick={() => {
              setStocksSub(!stocksSub);
              setOrdersSub(false);
              setProductsSub(false);
            }}
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
          <Link
            to="/admin/products"
            className="flex gap-1 w-fit"
            onClick={() => setSelectedValue(-1)}
          >
            کالاها
          </Link>
          <ArrowDownSFillIcon
            size="1.5rem"
            onClick={() => {
              setProductsSub(!productsSub);
              setOrdersSub(false);
              setStocksSub(false);
            }}
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
      {props.children}
    </div>
  );
}

export default DrawerMenu;
