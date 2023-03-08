import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { BsClipboardCheck } from "react-icons/bs";
import { Pagination, Table } from "../../../shared";

function AdminPanelOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchOrders(currentPage));
  }, [dispatch, currentPage]);

  function calculatePageCount() {
    const pageCount = Math.ceil(orders.totalCount / 6)
    return pageCount
  }

  function getPageNumber(e) {
    setCurrentPage(e.target.innerText);
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
