import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../../api/constant";
import { fetchProducts } from "../../../../redux/Slices/productsSlice";

import { BiEditAlt } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { Button, Table } from "../../../shared";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <Table
        thead={["تصویر", "نام کالا", "دسته بندی"]}
        tbody={products.data}
        td={["thumbnail", "name", "category"]}
        renderInSrc={["thumbnail"]}
        iconThead={["ویرایش", "حذف"]}
        iconTd={[
          <BiEditAlt size="1.5rem" className="hover:text-yellow-500" />,
          <TbTrash size="1.5rem" className="hover:text-yellow-500" />,
        ]}
      />
      <Button
        title="افزودن کالا جدید"
        className="bg-green-200 text-green-900 h-14 w-36 mt-6 ml-6"
      />
    </div>
  );
}

export default AdminPanelProducts;
