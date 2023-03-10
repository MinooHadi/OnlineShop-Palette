import React from "react";

function Select(props) {
  return (
    <select className={props.className} onChange={props.onChange}>
      {props.opt.map((item) => (
        <option> {item.name} </option>
      ))}
    </select>
  );
}

export default Select;
