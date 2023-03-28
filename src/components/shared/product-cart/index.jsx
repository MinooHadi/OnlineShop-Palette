import React from "react";

function ProductCart(props) {
  return (
    <div className="w-72 h-80 border-2 border-slate-300 flex flex-col items-center relative rounded-2xl">
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
