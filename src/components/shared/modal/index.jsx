import React from "react";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div></div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
