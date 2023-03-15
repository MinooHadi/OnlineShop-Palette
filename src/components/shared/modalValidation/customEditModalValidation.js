import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  productsCreateService,
  productsEditService,
  uploadImages,
} from "../../../api/services/products";

function useEditModalValidation() {
  const modalSchema = yup.object({
    name: yup
      .string()
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    brand: yup
      .string()
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    thumbnail: yup
      .mixed()
      .test("is-valid-type", "فرمت عکس انتخاب شده صحیح نیست", (value) => {
        if (value.length) {
          return (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/webp" ||
            value[0].type === "image/png"
          );
        } else {
          return true;
        }
      }),
    image: yup
      .mixed()
      .test("is-valid-type", "فرمت عکس انتخاب شده صحیح نیست", (value) => {
        for (let v of value) {
          if (
            !(
              v.type === "image/jpeg" ||
              v.type === "image/webp" ||
              v.type === "image/png"
            )
          ) {
            return false;
          }
        }
        return true;
      }),
    categoryId: yup.string(),
    subcategoryId: yup.string(),
    price: yup
      .number()
      .typeError("لطفا عدد وارد کنید")
      .min(0, "قیمت باید بیشتر از 0 باشد"),
    quantity: yup
      .number()
      .typeError("لطفا عدد وارد کنید")
      .min(0, "تعداد باید بیشتر از 0 باشد"),
    description: yup
      .string()
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
  });

  async function editProduct(id, data, e) {
    e.preventDefault();
    const images = [];
    if (!data.thumbnail.length) {
      delete data.thumbnail;
    } else {
      images.push(...data.thumbnail);
    }
    if (!data.image.length) {
      delete data.image;
    } else {
      images.push(...data.image);
    }
    try {
      if (images.length) {
        const imgRes = await uploadImages(images);
        const thumbnail = imgRes[0].data.filename;
        const image = imgRes.splice(1).map((item) => item.data.filename);
        const res = await productsEditService(id, { ...data, thumbnail, image });
        if (res.status == 200) {
          return true;
        }
      } else {
        const res = await productsEditService(id, data);
        if (res.status == 200) {
          return true;
        }
      }
    } catch {
      alert("failed");
    }

    //TODO handle failure in upload request
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalSchema), mode: "onChange" });

  return {
    register,
    handleSubmit,
    errors,
    editProduct,
  };
}

export default useEditModalValidation;
