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
      .mixed()
      .test("is-valid-date", "تاریخ باید حداقل یک روز بعد باشد", (value) => {
        let tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0)
        if (value === undefined) {
          return false;
        } else {
          return (value.getTime() >= tomorrow.getTime());
        }
      }),
  });

  function payment(data, e) {
    e.preventDefault();
    console.log(data.expectAt);
    const card = JSON.parse(localStorage.getItem("card"));
    const products = card.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.thumbnail,
      count: shoppingCard.cardState[item.id],
    }));
    const prices = card.reduce(
      (sum, curent) => sum + curent.price * shoppingCard.cardState[curent.id],
      0
    );
    const finalData = {
      ...data,
      expectAt: new Date(data.expectAt).getTime(),
      products,
      delivered: "false",
      prices,
    };
    localStorage.setItem("order", JSON.stringify(finalData));
    navigate("/payment");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm({ resolver: yupResolver(modalSchema), mode: "onChange" });

  return {
    register,
    handleSubmit,
    errors,
    payment,
    setValue,
    setError,
  };
}

export default useCustomerFormValidation;
