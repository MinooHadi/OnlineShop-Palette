import React from "react";
import ReactDOM from "react-dom";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Input from "../input";

function CustomerFormModal() {
  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-2/3 top-44 left-1/3 items-center border-2 bg-slate-100 overflow-auto no-scrollbar">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
      />
      <form>
        <Input type="text" lable="نام" />
        <Input type="text" lable="نام خانوادگی" />
        <Input type="text" lable="آدرس" />
        <Input type="tel" lable="تلفن همراه" />
        <Input type="date" lable="تاریخ تحویل" />
      </form>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CustomerFormModal;
