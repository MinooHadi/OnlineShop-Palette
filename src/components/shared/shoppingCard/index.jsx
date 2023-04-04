import React, { useEffect, useState } from "react";
import { Minus, Plus, TrashIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { shoppingCardSliceActions } from "../../../redux/MainSlices/shoppingCardSlice";
import { baseURL } from "../../../api/constant";

function ShoppingCard(props) {
  const dispatch = useDispatch()
  const { shoppingCard } = useSelector((store) => store);


  function increaseProductCount() {
    if (shoppingCard.cardState[props.id] < props.quantity) {
      dispatch(shoppingCardSliceActions.increase({id: props.id, count: 1}))
    }
  }

  function decreaseProductCount() {
    // if (shoppingCard.cardState[props.id] > 1) {
      dispatch(shoppingCardSliceActions.decrease(props.id))
    // }
  }


  return (
    <div className="w-1/2 border-2 border-slate-200 rounded-lg p-4 flex justify-between items-center vazir-medium">
      <div className="flex items-center gap-12 w-2/3">
        <div className="w-24 h-24">
          <img src={`${baseURL}/files/${props.thumbnail}`} className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-lg text-slate-700"> {props.name} </p>
          <p className="text-sm text-slate-500"> {props.price} تومان </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <TrashIcon size="1.5rem" />
        <div className="flex items-center bg-slate-100 text-slate-600 w-20 h-8 px-2 rounded-3xl justify-between">
          <Plus size="1rem" onClick={increaseProductCount} />
          {props.count}
          <Minus size="1rem" onClick={decreaseProductCount} />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
