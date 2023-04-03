import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function useCustomerFormValidation() {
  const modalSchema = yup.object({
    username: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    lastname: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    address: yup
      .string()
      .required("پر کردن این فیلد الزامی می باشد")
      .matches(
        "[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]",
        "لطفا حروف فارسی وارد کنید"
      ),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "شماره وارد شده صحیح نمی باشد"
      )
      .required("پر کردن این فیلد الزامی می باشد"),
    expectAt: yup
      .date()
      .required("پر کردن این فیلد الزامی می باشد")
      .min(new Date())
      .typeError("تاریخ انتخاب شده صحیح نمی باشد"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(modalSchema), mode: "onChange" });

  return {
    register,
    handleSubmit,
    errors,
  };
}

export default useCustomerFormValidation;
