import React from "react";
import ReactDOM from "react-dom";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Input from "../input";
import useCustomerFormValidation from "../modalValidation/customCustomerFormValidation";

function CustomerFormModal() {
  const { register, handleSubmit, errors } = useCustomerFormValidation();

  console.log(errors);
  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-2/3 top-44 left-1/3 items-center border-2 bg-slate-100 overflow-auto no-scrollbar">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
      />
      <form className="flex flex-col gap-6"
        onSubmit={handleSubmit((e) => {
          e.preventDefault();
        })}
      >
        <Input
          type="text"
          lable="نام"
          className="border-2 w-96 h-8"
          validation={{ ...register("username") }}
          error={errors.username?.message}
        />
        <Input
          type="text"
          lable="نام خانوادگی"
          className="border-2 w-96 h-8"
          validation={{ ...register("lastname") }}
          error={errors.lastname?.message}
        />
        <Input
          type="text"
          lable="آدرس"
          className="border-2 w-96 h-8"
          validation={{ ...register("address") }}
          error={errors.address?.message}
        />
        <Input
          type="tel"
          lable="تلفن همراه"
          className="border-2 w-96 h-8"
          validation={{ ...register("phone") }}
          error={errors.phone?.message}
        />
        <Input
          type="date"
          lable="تاریخ تحویل"
          className="border-2 w-96 h-8"
          validation={{ ...register("expectAt") }}
          error={errors.expectAt?.message}
        />
        <Input
          type="submit"
          value="پرداخت"
          className="p-3 mt-14 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold"
        />
      </form>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CustomerFormModal;
