import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../../api/constant";
import { fetchProducts } from "../../../../redux/Slices/productsSlice";

import { BiEditAlt } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { Button } from "../../../shared";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex">
      <table className="m-auto border-2 border-yellow-900 mt-10 text-center">
        <thead className="font-bold">
          <tr className="border-2 border-yellow-900">
            <td className="p-5">تصویر</td>
            <td className="p-5">نام کالا</td>
            <td className="p-5">دسته بندی</td>
            <td className="p-5">ویرایش</td>
            <td className="p-5">حذف</td>
          </tr>
        </thead>
        <tbody>
          {products.status === "success" &&
            products.data.map((item) => {
              return (
                <tr>
                  <td className="p-5">
                    <img
                      src={`${baseURL}/files/${item.thumbnail}`}
                      className="w-20"
                      alt={item.name}
                    />
                  </td>
                  <td className="p-5"> {item.name} </td>
                  <td className="p-5">
                    {categories.data[item.category].name} {item.subcategory}
                  </td>
                  <td className="p-5">
                    <BiEditAlt
                      size="1.5rem"
                      className="hover:text-yellow-500"
                    />
                  </td>
                  <td className="p-5">
                    <TbTrash size="1.5rem" className="hover:text-yellow-500" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Button title="افزودن کالا جدید" className="bg-green-200 text-green-900 h-14 w-36 mt-6 ml-6" />
    </div>
  );
}

export default AdminPanelProducts;
