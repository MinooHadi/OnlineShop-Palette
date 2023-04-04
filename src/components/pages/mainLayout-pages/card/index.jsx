import React, { useEffect, useState } from "react";
import { Button, CustomerFormModal, ShoppingCard } from "../../../shared";
import { useSelector } from "react-redux";
import { mainProductDetailService } from "../../../../api/mainServices/products";

function Card() {
  const [showCFormModal, setShowCFormModal] = useState(false);
  const { shoppingCard } = useSelector((store) => store);
  const [data, setData] = useState([]);

  function showCustomerFormModal() {
    setShowCFormModal(true);
  }

  function getProducts() {
    const promises = Object.keys(shoppingCard.cardState).map((item) =>
      mainProductDetailService(item)
    );
    Promise.all(promises).then((res) => setData(res));
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <div className="p-6 m-10 flex flex-col gap-3 items-center">
        {data.map((item) => {
          const product = item.data[0];
          if (shoppingCard.cardState[product.id]) {
            return (
              <ShoppingCard
                name={product.name}
                price={product.price}
                thumbnail={product.thumbnail}
                count={shoppingCard.cardState[product.id]}
                id={product.id}
                quantity={product.quantity}
              />
            );
          }
        })}
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
