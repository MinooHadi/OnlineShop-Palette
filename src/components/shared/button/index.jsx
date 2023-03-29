import React from "react";

function Button(props) {
  return <button className={props.className} onClick={props.onClick} disabled={props.disabled??false}> {props.title} </button>;
}

export default Button;
