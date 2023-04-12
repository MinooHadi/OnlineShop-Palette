import React from "react";

function Select(props) {
  return (
    <select
      className={props.className}
      {...props.validation}
      onChange={(e) => {
        props.onChange && props.onChange(e);
        props.validation && props.validation.onChange(e);
      }}
    >
      {props.opt.map((item) => (
        <option value={item.id}> {item.name} </option>
      ))}
    </select>
  );
}

export default Select;
