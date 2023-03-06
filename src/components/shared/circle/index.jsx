import React from "react";

function Circle(props) {
  return (
    <div className="bg-yellow-500 w-1/4 h-96 rounded-tl-4xl rounded-br-4xl flex items-center justify-center text-5xl m-16 shadow-2xl shadow-yellow-900 text-yellow-900 hover:bg-yellow-200">
      {props.title}
    </div>
  );
}

export default Circle;
