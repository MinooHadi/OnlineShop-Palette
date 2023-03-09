import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/shared";

function LoginLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/admin/orders");
  }, []);

  return (
    <>{localStorage.getItem("token") ? undefined : <Form />}</>
  );
}

export default LoginLayout;
