import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../redux/Slices/subcategoriesSlice";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Button from "../button";
import FileInput from "../fileInput";
import Input from "../input";
import useModalValidation from "../modalValidation/customModalValidation";
import Select from "../select";

function EditProductModal(props) {
  const { register, handleSubmit, errors, editProduct } = useModalValidation();
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubcategoryId] = useState("");
  const { categories } = useSelector((store) => store);
  const { subcategories } = useSelector((store) => store);
  const [coverImageName, setCoverImageName] = useState([]);
  const [productImagesName, setProductImagesName] = useState([]);

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

  function getSubcategoryId(e) {
    const selectedSubcategory = subcategories.data.filter(
      (item) => item.name === e.target.value
    );
    setSubcategoryId(selectedSubcategory[0].id);
  }

  function getFileName(e) {
    setCoverImageName([e.target.files[0].name]);
  }

  function getFilesName(e) {
    setProductImagesName([
      ...Array.from(e.target.files).map((item) => item.name),
    ]);
  }

  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-2/3 top-44 left-1/3 items-center border-2 bg-slate-100 overflow-auto no-scrollbar">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
        onClick={props.onClose}
      />
      <form onSubmit={handleSubmit(editProduct)}>
        <Input
          type="text"
          lable="نام کالا"
          className="border-2 w-96 h-8"
          defaultValue={props.editProduct.name}
          validation={{ ...register("name") }}
        />
        <Input
          type="text"
          lable="برند کالا"
          className="border-2 w-96 h-8"
          defaultValue={props.editProduct.brand}
          validation={{ ...register("brand") }}
        />
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            گروه کالا
          </lable>
          <Select
            opt={[
              { name: props.editProduct.category.name },
              ...categories.data,
            ]}
            className="h-8 w-96 vazir-light text-slate-600"
            onChange={getCategoryId}
          />
        </div>
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            زیرگروه کالا
          </lable>
          <Select
            opt={[
              { name: props.editProduct.subcategory.name },
              ...subcategories.data.filter(
                (item) => item.categoryId === categoryId
              ),
            ]}
            className="h-8 w-96 vazir-light text-slate-600"
            onChange={getSubcategoryId}
          />
        </div>
        <div>
          <Input
            type="file"
            lable="تصویر کاور کالا"
            className="border-2 w-96 h-8 bg-white"
            onChange={getFileName}
            validation={{ ...register("thumbnail") }}
          />
          <FileInput
            imgSrc={[props.editProduct.thumbnail]}
            imgName={coverImageName}
          />
        </div>
        <div>
          <Input
            type="file"
            lable="تصاویر کالا"
            className="border-2 w-96 h-8 bg-white"
            onChange={getFilesName}
            validation={{ ...register("image") }}
          />
          <FileInput
            imgSrc={props.editProduct.image}
            imgName={productImagesName}
          />
        </div>
        <Input
          type="number"
          lable="قیمت کالا"
          className="border-2 w-96 h-8"
          defaultValue={props.editProduct.price}
          validation={{ ...register("price") }}
        />
        <Input
          type="number"
          lable="موجودی کالا"
          className="border-2 w-96 h-8"
          defaultValue={props.editProduct.quantity}
          validation={{ ...register("quantity") }}
        />
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            توضیحات مربوط به کالا
          </lable>
          <textarea
            className="w-96 h-28"
            defaultValue={props.editProduct.description}
            {...register("description")}
          />
        </div>
        <Input
          type="submit"
          value="ذخیره اطلاعات"
          className="p-3 mt-14 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold"
        />
      </form>
    </div>,
    document.getElementById("modal-root")
  );
}

export default EditProductModal;
