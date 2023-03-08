import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { BsClipboardCheck } from "react-icons/bs";
import { Pagination, Table } from "../../../shared";
import { useSearchParams } from "react-router-dom";

function AdminPanelOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchOrders({
        page: params.get("page"),
        delivered: params.get("delivered"),
      })
    );
  }, [dispatch, params]);

  function calculatePageCount() {
    const pageCount = Math.ceil(orders.totalCount / 6);
    return pageCount;
  }

  function getPageNumber(e) {
    params.set("page", e.target.innerText);
    setParams(params.toString());
  }

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
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default AdminPanelOrders;
