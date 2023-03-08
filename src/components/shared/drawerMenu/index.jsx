import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Input from "../input";

import { RiArrowDownSFill } from "react-icons/ri";
import SubMenu from "../subMenu";
import Select from "../select";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";
import { fetchOrders } from "../../../redux/Slices/ordersSlice";

function DrawerMenu() {
  const [ordersSub, setOrdersSub] = useState(false);
  const [stocksSub, setStocksSub] = useState(false);
  const [productsSub, setProductsSub] = useState(false);
  const [params, setParams] = useSearchParams();

  const { categories } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategories({
        page: params.get("page"),
        delivered: params.get("delivered"),
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, params]);

  function rowClicked(e) {
    const id = e.target.id;
    switch (id) {
      case "1":
        params.delete("delivered");
        break;
      case "2":
        params.set("delivered", true);
        break;
      case "3":
        params.set("delivered", false);
        break;
    }
    params.set("page", 1);
    setParams(params.toString());
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
              { name: "همه سفارش ها", id: 1 },
              { name: "سفارش های ارسال شده", id: 2 },
              { name: "سفارش های ارسال نشده", id: 3 },
            ]}
            onClick={rowClicked}
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
        {stocksSub && <SubMenu items={categories.data} />}
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
        {productsSub && <SubMenu items={categories.data} />}
      </div>
    </div>
  );
}

export default DrawerMenu;
