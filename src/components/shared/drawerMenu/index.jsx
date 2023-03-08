import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../input";

import { RiArrowDownSFill } from "react-icons/ri";
import SubMenu from "../subMenu";
import Select from "../select";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";

function DrawerMenu() {
  const [ordersSub, setOrdersSub] = useState(false);
  const [stocksSub, setStocksSub] = useState(false);
  const [productsSub, setProductsSub] = useState(false);

  const { categories } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    console.log(categories.data);
  }, [dispatch]);

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
              { name: "همه سفارش ها" },
              { name: "سفارش های ارسال شده" },
              { name: "سفارش های ارسال نشده" },
            ]}
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
