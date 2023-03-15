import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/Slices/categoriesSlice";
import { fetchSubcategories } from "../../../redux/Slices/subcategoriesSlice";
import { MdCloseCircleOutlineIcon } from "../../icons";
import FileInput from "../fileInput";
import Input from "../input";
import useAddModalValidation from "../modalValidation/customAddModalValidation";
import Select from "../select";

function AddProductModal(props) {
  const { register, handleSubmit, errors, addNewProduct } =
    useAddModalValidation();
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
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
    setCategoryId(e.target.value);
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
      <form
        onSubmit={handleSubmit(async (data, e) => {
          const refresh = await addNewProduct(data, e);
          props.onClose(refresh);
        })}
        className="flex flex-col gap-8"
      >
        <Input
          type="text"
          lable="نام کالا"
          className="border-2 w-96 h-8"
          validation={{ ...register("name") }}
          error={errors.name?.message}
        />
        <Input
          type="text"
          lable="برند کالا"
          className="border-2 w-96 h-8"
          validation={{ ...register("brand") }}
          error={errors.brand?.message}
        />
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            گروه کالا
          </lable>
          <Select
            opt={[{ name: "انتخاب گروه کالا" }, ...categories.data]}
            className="h-8 w-96 vazir-light text-slate-600"
            onChange={getCategoryId}
            validation={{ ...register("categoryId") }}
          />
        </div>
        {categoryId && (
          <div className="flex flex-col gap-3">
            <lable className="pr-3 text-slate-600 vazir-extraBold">
              زیرگروه کالا
            </lable>
            <Select
              opt={[
                { name: "انتخاب زیرگروه کالا" },
                ...subcategories.data.filter(
                  (item) => item.categoryId == categoryId
                ),
              ]}
              className="h-8 w-96 vazir-light text-slate-600"
              validation={{ ...register("subcategoryId") }}
            />
          </div>
        )}
        <div>
          <Input
            type="file"
            lable="تصویر کاور کالا"
            className="border-2 w-96 h-8 bg-white coustum-file-inpute"
            onChange={getFileName}
            validation={{ ...register("thumbnail") }}
            error={errors.thumbnail?.message}
          />
          <FileInput imgName={coverImageName} />
        </div>
        <div>
          <Input
            type="file"
            lable="تصاویر کالا"
            className="border-2 w-96 h-8 bg-white"
            onChange={getFilesName}
            validation={{ ...register("image") }}
            error={errors.image?.message}
          />
          <FileInput imgName={productImagesName} />
        </div>
        <Input
          type="number"
          lable="قیمت کالا"
          className="border-2 w-96 h-8"
          validation={{ ...register("price") }}
          error={errors.price?.message}
        />
        <Input
          type="number"
          lable="موجودی کالا"
          className="border-2 w-96 h-8"
          validation={{ ...register("quantity") }}
          error={errors.quantity?.message}
        />
        <div className="flex flex-col gap-3">
          <lable className="pr-3 text-slate-600 vazir-extraBold">
            توضیحات مربوط به کالا
          </lable>
          <textarea className="w-96 h-28" {...register("description")} />
          <p className="text-xs text-red-600 pr-3 vazir-medium">
            {errors.description?.message}
          </p>
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

export default AddProductModal;
