import React, { useState } from "react";
import { Button, CustomerFormModal, ShoppingCard } from "../../../shared";

function Card() {
  const [showCFormModal, setShowCFormModal] = useState(false);

  function showCustomerFormModal() {
    setShowCFormModal(true);
  }

  return (
    <>
      <div className="p-6 m-10 flex flex-col gap-3 items-center">
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex justify-between items-center w-[100%] vazir-semiBold text-slate-700">
            <p className="text-lg">جمع مبلغ خرید :</p>
            <p className="text-sm text-slate-700"> مبلغ به تومان</p>
          </div>
          <Button
            title="نهایی کردن خرید"
            className="w-[30%] self-end bg-slate-700 py-3 rounded-lg text-slate-100 vazir-bold"
            onClick={showCustomerFormModal}
          />
        </div>
      </div>
      {showCFormModal && <CustomerFormModal />}
    </>
  );
}

export default Card;
