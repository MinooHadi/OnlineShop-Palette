import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="pr-3"> {props.lable} </label>
      <input type={props.type} className={props.className} value={props.value} onChange={props.onChange} />
    </div>
  );
}

export default Input;
