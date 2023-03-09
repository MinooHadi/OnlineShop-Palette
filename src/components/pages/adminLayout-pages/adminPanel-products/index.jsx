import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/Slices/productsSlice";

import { BiEditAlt } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { Button, Pagination, Table } from "../../../shared";
import { useSearchParams } from "react-router-dom";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchProducts({
        page: params.get("page"),
        categoryId: params.get("categoryId"),
      })
    );
  }, [dispatch, params]);

  function calculatePageCount() {
    const pageCount = Math.ceil(products.totalCount / 6);
    return pageCount;
  }

  function getPageNumber(e) {
    params.set("page", e.target.innerText);
    setParams(params.toString())
  }

  return (
    <>
      <div className="flex">
        <Table
          thead={["تصویر", "نام کالا", "گروه", "زیرگروه"]}
          tbody={products.data}
          td={[
            "thumbnail",
            "name",
            ["category", "name"],
            ["subcategory", "name"],
          ]}
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
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default AdminPanelProducts;
