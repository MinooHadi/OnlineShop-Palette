import React from "react";
import { Link } from "react-router-dom";

import Input from "../input";
import useAuth from "./customAuth";

import { OutlineArrowLeftIcon } from "../../icons";

function Form() {
  const { register, handleSubmit, errors, login } = useAuth();

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="w-1/3 border-4 rounded-lg border-l-fuchsia-300 border-r-fuchsia-300 border-t-fuchsia-400 border-b-fuchsia-200 py-10 m-auto fixed top-[150px] right-1/3 flex flex-col items-center gap-8"
    >
      <div className="self-end pl-12 hover:text-yellow-400">
        <Link to="/">
          <OutlineArrowLeftIcon size="1.5rem" />
        </Link>
      </div>
      <Input
        lable="نام کاربری"
        type="text"
        className="border-2 w-96 h-8"
        validation={{ ...register("username") }}
        error={errors.username?.message}
      />
      <Input
        lable="رمز عبور"
        type="password"
        className="border-2 w-96 h-8"
        validation={{ ...register("password") }}
        error={errors.password?.message}
      />
      <Input
        type="submit"
        value="ورود به پنل ادمین"
        className="mainHeaderColor w-44 h-14 text-slate-600 font-semibold rounded-full mt-16 vazir-bold"
      />
    </form>
  );
}

export default Form;
