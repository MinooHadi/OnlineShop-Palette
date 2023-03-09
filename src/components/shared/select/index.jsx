import React from "react";

function Select(props) {
  return (
    <select className="h-8">
      {props.opt.map((item) => (
        <option> {item} </option>
      ))}
    </select>
  );
}

export default Select;
