import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../../api/constant";
import { fetchProducts } from "../../../../redux/Slices/shoppingSlice";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <table className="m-auto border-2 border-yellow-900 mt-10">
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
        {products.data &&
          products.data.map((item) => {
            return (
              <tr>
                <td className="p-5">
                  <img src={`${baseURL}/files/${item.thumbnail}`} className="w-20" alt={item.name}/>
                </td>
                <td className="p-5"> {item.name} </td>
                <td className="p-5">
                  {item.category} {item.subcategory}
                </td>
                <td className="p-5">ویرایش</td>
                <td className="p-5">حذف</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default AdminPanelProducts;
