import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../redux/Slices/subcategoriesSlice";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Button from "../button";
import Input from "../input";
import Select from "../select";

function AddEditProductModal(props) {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const { categories } = useSelector((store) => store);
  const { subcategories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSubcategories());
  }, [dispatch]);

  function getCategoryId(e) {
    const selectedCategory = categories.data.filter(
      (item) => item.name === e.target.value
    );
    setCategoryId(selectedCategory[0].id);
  }

  function saveProductInfo() {
    console.log("save");
  }

  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-2/3 top-44 left-1/3 items-center border-2 bg-slate-100 overflow-auto no-scrollbar">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
        onClick={props.onClose}
      />
      <Input type="text" lable="نام کالا" className="border-2 w-96 h-8" />
      <Input type="text" lable="برند کالا" className="border-2 w-96 h-8" />
      <div className="flex flex-col gap-3">
        <lable className="pr-3 text-slate-600 vazir-extraBold">گروه کالا</lable>
        <Select
          opt={[{name: "انتخاب گروه کالا"}, ...categories.data]}
          className="h-8 w-96 vazir-light text-slate-600"
          onChange={getCategoryId}
        />
      </div>
      {categoryId && (
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            زیرگروه کالا
          </lable>
          <Select
            opt={subcategories.data.filter((item) => item.categoryId === categoryId)}
            className="h-8 w-96 vazir-light text-slate-600"
          />
        </div>
      )}

      <Input
        type="file"
        lable="تصویر کاور کالا"
        className="border-2 w-96 h-8 bg-white"
      />
      <Input
        type="file"
        lable="تصاویر کالا"
        className="border-2 w-96 h-8 bg-white"
      />
      <Input type="number" lable="قیمت کالا" className="border-2 w-96 h-8" />
      <Input type="number" lable="موجودی کالا" className="border-2 w-96 h-8" />
      <div className="flex flex-col gap-3">
        <lable className="pr-3 text-slate-600 vazir-extraBold">
          توضیحات مربوط به کالا
        </lable>
        <textarea className="w-96 h-28" />
      </div>
      <Button
        title="ذخیره اطلاعات"
        className="p-3 mt-14 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold"
        onClick={saveProductInfo}
      />
    </div>,
    document.getElementById("modal-root")
  );
}

export default AddEditProductModal;
