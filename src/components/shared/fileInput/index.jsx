import React from "react";

function FileInput(props) {
    console.log(props.imgName);
  return (
    <div className="flex flex-col gap-1">
      {props.imgSrc
        ? props.imgSrc.map((itemImg) => (
            <div>
              <img src={itemImg} />
            </div>
          ))
        : props.imgName.map((itemName) => <div> {itemName} </div>)}
    </div>
  );
}

export default FileInput;
