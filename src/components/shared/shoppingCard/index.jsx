import React from "react";
import { TrashIcon } from "../../icons";
import image1 from "./../../../assets/images/1.png"


function ShoppingCard() {
  return (
    <div className="w-1/2 border-2 border-slate-200 rounded-lg p-4 flex justify-between items-center vazir-medium">
      <div className="flex items-center gap-12 w-2/3">
        <div className="w-24 h-24">
          <img src={image1} className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg text-slate-700">نام کالا</p>
          <p className="text-sm text-slate-500">قیمت کالا</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-5">
        <TrashIcon size="1.5rem" />
        <input type="number" defaultValue={1} className="w-1/3 text-center" />
      </div>
    </div>
  );
}

export default ShoppingCard