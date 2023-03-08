import React from "react";

function SubMenu(props) {
  return (
    <div className="bg-yellow-100 p-2 my-2 mr-8">
      {props.items.map((item) => (
        <p className="py-2 hover:cursor-pointer" onClick={props.onClick} id={item.id} > {item.name} </p>
      ))}
    </div>
  );
}

export default SubMenu;
