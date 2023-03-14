import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "../../../../redux/Slices/productsSlice";
import {
  AddProductModal,
  Button,
  DeleteProductModal,
  EditProductModal,
  Pagination,
  Table,
} from "../../../shared";

import { EditAltIcon, TrashIcon } from "../../../icons";

function AdminPanelProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();
  const [showAPModal, setShowAPModal] = useState(false);
  const [showEPModal, setShowEPModal] = useState(false);
  const [showDPModal, setShowDPModal] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState();
  const [selectedEditProducId, setSelectedEditProducId] = useState();

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
    setShowAPModal(true);
  }

  function closeAddProductModal(refresh) {
    setShowAPModal(false);
    if (refresh) {
      dispatch(
        fetchProducts({
          page: params.get("page"),
          categoryId: params.get("categoryId"),
        })
      );
    }
  }

  function showEditProductModal(e) {
    setShowEPModal(true);
    let elem = e.target;
    let selected;
    if (elem.tagName === "svg") {
      selected = elem.parentElement.dataset.id;
    } else if (elem.tagName === "path") {
      selected = elem.parentElement.parentElement.dataset.id;
    } else {
      return;
    }
    setSelectedEditProducId(selected);
  }

  function closeEddiProductModal() {
    setShowEPModal(false);
  }

  function showDeleteProductModal(e) {
    setShowDPModal(true);
    let elem = e.target;
    let selected;
    if (elem.tagName === "svg") {
      selected = elem.parentElement.dataset.id;
    } else if (elem.tagName === "path") {
      selected = elem.parentElement.parentElement.dataset.id;
    } else {
      return;
    }
    setSelectedProductId(selected);
  }

  function closeDeleteProductModal() {
    setShowDPModal(false);
  }

  const selectedProduct = products.data.filter(
    (item) => item.id == selectedProductId
  );

  const selectedEditProduct = products.data.filter(
    (item) => item.id == selectedEditProducId
  );

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
            <EditAltIcon
              size="1.4rem"
              className="hover:text-rose-400"
              onClick={showEditProductModal}
            />,
            <TrashIcon
              size="1.4rem"
              className="hover:text-rose-400"
              onClick={showDeleteProductModal}
            />,
          ]}
        />
      </div>
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
      {showAPModal && <AddProductModal onClose={closeAddProductModal} />}
      {showEPModal && (
        <EditProductModal
          onClose={closeEddiProductModal}
          editProduct={selectedEditProduct[0]}
        />
      )}
      {showDPModal && (
        <DeleteProductModal
          onClose={closeDeleteProductModal}
          products={selectedProduct[0]}
        />
      )}
    </>
  );
}

export default AdminPanelProducts;
