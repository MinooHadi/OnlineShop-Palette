import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/Slices/productsSlice";
import { Button } from "../../../shared";

function AdminPanelStocks() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <table className="m-auto border-2 border-yellow-900 mt-10 text-center">
        <thead className="font-bold">
          <tr className="border-2 border-yellow-900">
            <td className="p-5">نام کالا</td>
            <td className="p-5">قیمت</td>
            <td className="p-5">موجودی</td>
          </tr>
        </thead>
        <tbody>
          {products.status === "success" &&
            products.data
              .filter((item) => item.quantity !== 0)
              .map((item) => {
                return (
                  <tr>
                    <td className="p-5"> {item.name} </td>
                    <td className="p-5">{item.price}</td>
                    <td className="p-5">{item.quantity}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <Button title="ذخیره" className="bg-green-200 text-green-900 h-14 w-36 mt-6 ml-6" />
    </div>
  );
}

export default AdminPanelStocks;
