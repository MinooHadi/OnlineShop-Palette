import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../input";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { loginAdminService } from "../../../api/services/auth";

function Form() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const adminInfo = { username, password };

  async function login(e) {
    e.preventDefault();
    try {
      const res = await loginAdminService(adminInfo);
      console.log(res.status);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/admin/orders");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form
      onSubmit={login}
      className="w-1/3 border-4 rounded-lg border-yellow-400 py-10 m-auto fixed top-1/4 right-1/3 flex flex-col items-center gap-5"
    >
      <div className="self-end pl-12 hover:text-yellow-400">
        <Link to="/">
          <AiOutlineArrowLeft size="1.5rem" />
        </Link>
      </div>
      <Input
        lable="نام کاربری"
        type="text"
        value={username}
        className="border-2 w-96 h-8"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        lable="رمز عبور"
        type="password"
        value={password}
        className="border-2 w-96 h-8"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="submit"
        value="ورود به پنل ادمین"
        className="bg-yellow-600 w-44 h-10 text-slate-50 font-semibold rounded-full mt-16"
      />
    </form>
  );
}

export default Form;
