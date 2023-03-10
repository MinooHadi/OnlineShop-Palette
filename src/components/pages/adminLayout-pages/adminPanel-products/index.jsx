import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "../../../../redux/Slices/productsSlice";
import { AddEditProductModal, Button, Pagination, Table } from "../../../shared";

import { EditAltIcon, TrashIcon } from "../../../icons";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();
  const [showAPModal, setShowAPModal] = useState(false)

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
    setParams(params.toString());
  }

  function showAddProductModal() {
    setShowAPModal(true)
  }

  function closeAddProductModal() {
    setShowAPModal(false)
  }
  return (
    <>
      <div>
        <Button
          title="افزودن کالا جدید"
          className="bg-rose-400 rounded-full shadow-lg shadow-rose-200 text-slate-600 fixed top-40 left-4 h-14 w-32 mt-6 ml-6 vazir-extraBold"
          onClick={showAddProductModal}
        />
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
            <EditAltIcon size="1.4rem" className="hover:text-rose-400" />,
            <TrashIcon size="1.4rem" className="hover:text-rose-400" />,
          ]}
        />
      </div>
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
      {showAPModal && <AddEditProductModal onClose={closeAddProductModal} /> }
    </>
  );
}

export default AdminPanelProducts;
