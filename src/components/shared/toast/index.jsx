import React from "react";
import ReactDOM from "react-dom";

function Toast(props) {
  return ReactDOM.createPortal(
    <div
      className={`${
        props.status
          ? "bg-green-300 text-green-600"
          : "bg-red-300 text-red-600"
      } rounded-t-3xl rounded-br-3xl vazir-extraBold w-56 h-20 flex justify-center items-center`}
    >
      {props.msg}
    </div>,
    document.getElementById("toast-root")
  );
}

export default Toast;
