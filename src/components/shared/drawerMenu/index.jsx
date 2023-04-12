import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Input from "../input";
import SubMenu from "../subMenu";
import Select from "../select";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";

import { ArrowDownSFillIcon } from "../../icons";

function DrawerMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ordersSub, setOrdersSub] = useState(false);
  const [stocksSub, setStocksSub] = useState(false);
  const [productsSub, setProductsSub] = useState(false);
  const [params, setParams] = useSearchParams();

  const { categories } = useSelector((store) => store);

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
      <Select opt={[{ name: "فیلتر" }]} className="h-8 w-64" />
      <Select
        opt={[
          { name: "مرتب سازی", id: 0 },
          { name: "براساس قیمت (نزولی)", id: 1 },
          { name: "براساس قیمت (صعودی)", id: 2 },
          { name: "براساس تعداد (نزولی)", id: 3 },
          { name: "براساس تعداد (صعودی)", id: 4 },
        ]}
        className="h-8 w-64"
        onChange={(e) => console.log(e.target.value)}
      />
      <div>
        <div className="flex gap-1 w-fit">
          <Link to="/admin/orders">سفارش ها</Link>
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
          <Link to="/admin/stocks" className="flex gap-1 w-fit">
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
          <Link to="/admin/products" className="flex gap-1 w-fit">
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
    </div>
  );
}

export default DrawerMenu;
