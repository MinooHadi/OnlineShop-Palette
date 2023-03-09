import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { Pagination, Table } from "../../../shared";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { ClipboardCheckIcon } from "../../../icons";


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
    <div>
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
          <ClipboardCheckIcon size="1.2rem" className="hover:text-yellow-500 font-bold" />,
        ]}
      />
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </div>
  );
}

export default AdminPanelOrders;
