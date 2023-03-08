import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/Slices/productsSlice";
import { Button, Table } from "../../../shared";

function AdminPanelStocks() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <Table
        thead={["نام کالا", "قیمت", "موجودی"]}
        tbody={products.data.filter((item) => item.quantity !== 0)}
        td={["name", "price", "quantity"]}
        renderInSrc={[]}
        iconThead={[]}
        iconTd={[]}
      />
      <Button
        title="ذخیره"
        className="bg-green-200 text-green-900 h-14 w-36 mt-6 ml-6"
      />
    </div>
  );
}

export default AdminPanelStocks;
