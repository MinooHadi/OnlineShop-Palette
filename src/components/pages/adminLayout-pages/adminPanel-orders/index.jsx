import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { BsClipboardCheck } from "react-icons/bs";
import { fetchCategories } from "../../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../../redux/Slices/subcategoriesSlice";
import { Pagination, Table } from "../../../shared";

function AdminPanelOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  return (
    <>
      <Table
        thead={[
          "نام کاربر",
          "نام خانوادگی کاربر",
          "مجموع قیمت",
          "زمان ثبت سفارش",
        ]}
        tbody={orders.data}
        td={["username", "lastname", "prices", "createdAt"]}
        renderInSrc={[]}
        iconThead={["بررسی سفارش"]}
        iconTd={[
          <BsClipboardCheck size="1.2rem" className="hover:text-yellow-500" />,
        ]}
      />
      <Pagination pageCount="10" />
    </>
  );
}

export default AdminPanelOrders;
