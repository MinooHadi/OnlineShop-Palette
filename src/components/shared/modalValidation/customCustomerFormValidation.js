import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";

function useCustomerFormValidation() {
  const navigate = useNavigate();
  const { shoppingCard } = useSelector((store) => store);

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
      .min(new Date(), "تاریخ انتخاب شده صحیح نمی باشد")
      .typeError("تاریخ انتخاب شده صحیح نمی باشد"),
  });

  function payment(data, e) {
    e.preventDefault();
    const card = JSON.parse(localStorage.getItem("card"));
    const products = card.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.thumbnail,
      count: shoppingCard.cardState[item.id],
    }));
    const finalData = { ...data, products };
    localStorage.setItem("order", JSON.stringify(finalData));
    navigate("/payment");
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
    payment,
  };
}

export default useCustomerFormValidation;
