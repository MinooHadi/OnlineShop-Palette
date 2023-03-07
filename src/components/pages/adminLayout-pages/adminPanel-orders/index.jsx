import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../redux/Slices/ordersSlice";

import { BsClipboardCheck } from "react-icons/bs";
import { fetchCategories } from "../../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../../redux/Slices/subcategoriesSlice";

function AdminPanelOrders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchCategories());
    dispatch(fetchSubcategories());
  }, [dispatch]);

  return (
    <table className="m-auto border-2 border-yellow-900 mt-10 text-center">
      <thead className="font-bold">
        <tr className="border-2 border-yellow-900">
          <td className="p-5">نام کالا</td>
          <td className="p-5">مجموع قیمت</td>
          <td className="p-5">زمان ثبت سفارش</td>
          <td className="p-5">بررسی سفارش</td>
        </tr>
      </thead>
      <tbody>
        {orders.status === "success" &&
          orders.data.map((item) => {
            return (
              <tr>
                <td className="p-5">
                  {item.username} {item.lastname}
                </td>
                <td className="p-5">{item.prices}</td>
                <td className="p-5">{item.createdAt}</td>
                <td className="p-5 flex justify-center">
                  <BsClipboardCheck
                    size="1.2rem"
                    className="hover:text-yellow-500"
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default AdminPanelOrders;
