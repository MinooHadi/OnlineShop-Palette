import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="pr-3"> {props.lable} </label>
      {props.type === "submit" ? (
        <input
          type={props.type}
          className={props.className}
          value={props.value}
        />
      ) : (
        <input
          type={props.type}
          className={props.className}
          {...props.validation}
        />
      )}

      <p className="text-xs text-red-600 absolute top-16"> {props.error} </p>
    </div>
  );
}

export default Input;
