import React, { useState } from "react";
import { Plus } from "../../icons";

function ProductCart(props) {
  const [showAddShoppingCard, setShowAddShoppingCard] = useState(false);

  function addToShoppingCard(e) {
    e.stopPropagation()
    console.log("hi");
  }

  return (
    <div
      className="w-72 h-80 border-2 border-slate-300 flex flex-col items-center relative rounded-2xl"
      id={props.id}
      onClick={props.onClick}
      onMouseEnter={() => setShowAddShoppingCard(true)}
      onMouseLeave={() => setShowAddShoppingCard(false)}
    >
      {showAddShoppingCard && props.quantity > 0 ? (
        <div
          className="absolute flex items-center justify-center top-1 left-1 w-12 text-center h-6 bg-slate-700 rounded-2xl"
          onClick={addToShoppingCard}
        >
          <Plus color="white" />
        </div>
      ): null}
      <img
        src={props.src}
        alt={props.alt}
        className="w-32 hover:w-36 absolute top-6"
      />
      <div className="flex flex-col w-full px-3 absolute bottom-6">
        <div className="flex justify-between pb-3">
          <p className="vazir-bold"> {props.name} </p>
          {props.quantity > 0 ? (
            <p className="vazir-medium text-sm self-end">{props.price} تومان</p>
          ) : (
            <p className="text-red-600 vazir-semiBold text-sm">ناموجود</p>
          )}
        </div>
        {props.quantity > 0 && props.quantity < 10 ? (
          <p className="text-red-600 vazir-semiBold absolute -bottom-5 text-sm">
            فقط {props.quantity} عدد در انبار باقی مانده
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProductCart;
