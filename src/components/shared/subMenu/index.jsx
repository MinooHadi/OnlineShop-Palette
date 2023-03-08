import React from "react";

function SubMenu(props) {
  return (
    <div className="bg-yellow-100 p-2 my-2 mr-8">
      <p onClick={props.onClick} id="0" className="py-2 hover:cursor-pointer"> {props.all} </p>
      {props.items.map((item) => (
        <p className="py-2 hover:cursor-pointer" onClick={props.onClick} id={item.id} > {item.name} </p>
      ))}
    </div>
  );
}

export default SubMenu;
