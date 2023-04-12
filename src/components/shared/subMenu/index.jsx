import React from "react";

function SubMenu(props) {
  return (
    <div
      className="bg-rose-200 p-2 my-2 mr-8"
      onMouseLeave={props.onMouseLeave}
    >
      {props.all.map((item) => (
        <p onClick={props.onClick} id={item.id} className="py-2 hover:cursor-pointer">
          {item.name}
        </p>
      ))}

      {props.items.map((item) => (
        <p
          className="py-2 hover:cursor-pointer"
          onClick={props.onClick}
          id={item.id}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}

export default SubMenu;
