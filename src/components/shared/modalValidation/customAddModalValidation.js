import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { productsCreateService, uploadImages } from "../../../api/services/products";

function useAddModalValidation() {
  const modalSchema = yup.object({
    name: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    brand: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    thumbnail: yup
      .mixed()
      .required("پر کردن این فیلد الزامی می باشد")
      .test("is-valid-type", "فرمت عکس انتخاب شده صحیح نیست", (value) => {
        return (
          value &&
          value.length &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/webp" ||
            value[0].type === "image/png")
        );
      }),
    image: yup
      .mixed()
      .required("پر کردن این فیلد الزامی می باشد")
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
    categoryId: yup.string().required("لطفا گروه را انتخاب کنید"),
    subcategoryId: yup.string().required("لطفا زیرگروه را انتخاب کنید"),
    price: yup
      .number()
      .typeError("لطفا عدد وارد کنید")
      .required("پر کردن این فیلد الزامی می باشد")
      .min(0, "قیمت باید بیشتر از 0 باشد"),
    quantity: yup
      .number()
      .typeError("لطفا عدد وارد کنید")
      .required("پر کردن این فیلد الزامی می باشد")
      .min(0, "تعداد باید بیشتر از 0 باشد"),
    description: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
  });

  async function addNewProduct(data, e) {
    e.preventDefault();
    try {
      const imgRes = await uploadImages([...data.thumbnail, ...data.image]);
      const thumbnail = imgRes[0].data.filename;
      const image = imgRes.splice(1).map(item => item.data.filename)
      //TODO handle failure in upload request
      const res = await productsCreateService({...data, thumbnail, image});
      if (res.status === 201) {
        return true
      } else {
        return false
      }
    } catch {
      return false
    }
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
    addNewProduct,
  };
}

export default useAddModalValidation;
