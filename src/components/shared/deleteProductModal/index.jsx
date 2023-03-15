import React from "react";
import ReactDOM from "react-dom";
import { productsDeleteService } from "../../../api/services/products";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Button from "../button";

function DeleteProductModal(props) {
  async function deleteProduct() {
    let id = props.products.id;
    try {
      const res = await productsDeleteService(id);
      if (res.status === 200) {
        props.onClose(true)
      }
    } catch {
      alert("failed");
    }
    props.onClose()
  }

  function closeDeleteModal() {
    props.onClose();
  }

  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-fit top-1/2 left-1/3 items-center border-2 bg-slate-100">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
        onClick={props.onClose}
      />
      <p className="text-slate-600 vazir-bold">
        آیا میخواهید <span> {props.products.name} </span> را حذف کنید؟
      </p>
      <div className="w-[100%] flex justify-center gap-10">
        <Button
          title="بلی"
          className="w-20 py-2 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold"
          onClick={deleteProduct}
        />
        <Button
          title="خیر"
          className="w-20 py-2 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold"
          onClick={closeDeleteModal}
        />
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default DeleteProductModal;
