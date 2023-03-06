import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col gap-2">
      <label> {props.lable} </label>
      <input type={props.type} className={props.className} value={props.value} />
    </div>
  );
}

export default Input;
