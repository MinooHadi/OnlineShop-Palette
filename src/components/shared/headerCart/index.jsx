import React from "react";

function HeaderCart(props) {
  return (
    <div className={props.containerStyle}>
      <img src={props.src} alt="" className={props.className} />
      <div className="flex flex-col items-center justify-center">
        <p className="vazir-extraBold text-slate-600">{props.title}</p>
        <p className="vazir-light text-slate-600">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default HeaderCart