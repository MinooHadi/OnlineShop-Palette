import React from "react";

function Select(props) {
  return (
    <select
      value={props.value}
      className={props.className}
      {...props.validation}
      onChange={(e) => {
        props.onChange && props.onChange(e);
        props.validation && props.validation.onChange(e);
      }}
    >
      {props.opt.map((item, i) => (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Select;
