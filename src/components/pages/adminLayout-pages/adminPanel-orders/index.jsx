import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { CheckOrderModal, Pagination, Table } from "../../../shared";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { ClipboardCheckIcon } from "../../../icons";


function AdminPanelOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();
  const [showChOModal, setShowChOModal] = useState(false)
  const selectedOrder = useRef()

  const [selectedOrderId, setSelectedOrderId] = useState("")

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

  function showCheckOrderModal(e) {
    setShowChOModal(true)
    let selected = e.target.parentElement.parentElement.parentElement.id
    setSelectedOrderId(selected);
  }


  function closeCheckOrderModal() {
    setShowChOModal(false)
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
          <ClipboardCheckIcon size="1.2rem" className="hover:text-rose-400 font-bold" onClick={showCheckOrderModal} />,
        ]}
        myRef={selectedOrder}
      />
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
      {showChOModal && <CheckOrderModal onClose={closeCheckOrderModal} orders={orders.data[selectedOrderId-1]} />}
    </div>
  );
}

export default AdminPanelOrders;
