import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginAdminService } from "../../../api/services/auth";
import * as yup from "yup";
import Cookies from "react-cookie";
import { useState } from "react";

function useAuth() {
  const navigate = useNavigate();
  const [showLToast, setShowLToast] = useState(undefined);

  const loginSchema = yup.object({
    username: yup.string().required("پر کردن این فیلد الزامی می باشد"),
    password: yup.string().required("پر کردن این فیلد الزامی می باشد"),
  });

  async function login(adminInfo, e) {
    e.preventDefault();
    try {
      const res = await loginAdminService(adminInfo);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        navigate("/admin/orders");
      }
    } catch {
      setShowLToast(false);
      setTimeout(() => {
        setShowLToast(undefined);
      }, 2000);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onChange" });

  return {
    register,
    handleSubmit,
    errors,
    login,
    showLToast,
  };
}

export default useAuth;
