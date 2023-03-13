import React from "react";
import { baseURL } from "../../../api/constant";

function FileInput(props) {
  return (
    <div className="flex gap-5 mt-2">
      {props.imgName.length
        ? props.imgName.map((itemName) => <div> {itemName} </div>)
        : props.imgSrc.map((itemImg) => (
            <div className="w-12">
              <img src={`${baseURL}/files/${itemImg}`} />
            </div>
          ))}
    </div>
  );
}

export default FileInput;
