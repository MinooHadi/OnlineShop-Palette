import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col gap-2 relative">
      <label className="pr-3 text-slate-600 vazir-extraBold">
        {props.lable}
      </label>
      {props.type === "submit" ? (
        <input
          type={props.type}
          className={props.className}
          value={props.value}
        />
      ) : props.type === "file" ? (
        <input
          type={props.type}
          className={props.className}
          {...props.validation}
          defaultValue={props.defaultValue}
          multiple
          onChange={props.onChange}
        />
      ) : (
        <input
          type={props.type}
          className={props.className}
          {...props.validation}
          defaultValue={props.defaultValue}
        />
      )}

      <p className="text-xs text-red-600 absolute top-[70px] vazir-medium">
        {props.error}
      </p>
    </div>
  );
}

export default Input;
