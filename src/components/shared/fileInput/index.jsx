import React from "react";
import { baseURL } from "../../../api/constant";
import { MdCloseCircleOutlineIcon } from "../../icons";

function FileInput(props) {
  // let newImageArray = [];
  // function deleteImage(e) {
  //   console.log(e.currentTarget.dataset.id);
  //   newImageArray.push(props.imgSrc[e.currentTarget.dataset.id])
  //   console.log(newImageArray);
  // }

  return (
    <div className="flex gap-5 mt-2">
      {props.imgName.length
        ? props.imgName.map((itemName) => <div> {itemName} </div>)
        : props.imgSrc && props.imgSrc.length
        ? props.imgSrc.map((itemImg, index) => (
            <div className="w-16 h-16 p-1 pt-3 rounded-md border-2 border-slate-500 relative">
              {/* <MdCloseCircleOutlineIcon
                size="0.8rem"
                className="absolute top-0 right-0"
                color="red"
                onClick={deleteImage}
                data-id={index}
              /> */}
              <img
                src={`${baseURL}/files/${itemImg}`}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default FileInput;
