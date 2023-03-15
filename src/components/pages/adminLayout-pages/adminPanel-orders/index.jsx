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
  const [showChOModal, setShowChOModal] = useState(false);

  const [selectedOrderId, setSelectedOrderId] = useState("");

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
    setShowChOModal(true);
    let elem = e.target;
    let selected;
    if (elem.tagName === "svg") {
      selected = elem.parentElement.dataset.id;
    } else if (elem.tagName === "path") {
      selected = elem.parentElement.parentElement.dataset.id;
    } else {
      return;
    }
    setSelectedOrderId(selected);
  }

  function closeCheckOrderModal() {
    setShowChOModal(false);
  }

  const selectedOrder = orders.data.filter(
    (item) => item.id == selectedOrderId
  );

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
        iconThead={["بررسی سفارش"]}
        iconTd={[
          <ClipboardCheckIcon
            size="1.2rem"
            className="hover:text-rose-400 font-bold"
            onClick={showCheckOrderModal}
          />,
        ]}
      />
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
      {showChOModal && (
        <CheckOrderModal
          onClose={closeCheckOrderModal}
          orders={selectedOrder[0]}
        />
      )}
    </div>
  );
}

export default AdminPanelOrders;
