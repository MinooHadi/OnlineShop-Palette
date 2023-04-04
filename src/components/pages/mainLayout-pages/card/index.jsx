import React, { useEffect, useRef, useState } from "react";
import { Button, CustomerFormModal, ShoppingCard } from "../../../shared";
import { useSelector } from "react-redux";
import { mainProductDetailService } from "../../../../api/mainServices/products";
import { Basket } from "../../../icons";

function Card() {
  const [showCFormModal, setShowCFormModal] = useState(false);
  const { shoppingCard } = useSelector((store) => store);
  const [data, setData] = useState([]);
  let totalPrice = 0;

  function showCustomerFormModal() {
    setShowCFormModal(true);
  }

  function getProducts() {
    const promises = Object.keys(shoppingCard.cardState).map((item) =>
      mainProductDetailService(item)
    );
    Promise.all(promises).then((res) =>
      setData(res.map((item) => item.data[0]))
    );
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const newData = data.filter((item) => item.id in shoppingCard.cardState);
      setData(newData);
      localStorage.setItem("card", JSON.stringify(newData));
    }
  }, [shoppingCard.cardState]);

  return (
    <>
      {Object.keys(shoppingCard.cardState).length ? (
        <div className="p-6 m-10 flex flex-col gap-3 items-center">
          {data.map((product) => {
              totalPrice +=
                +shoppingCard.cardState[product.id] * +product.price;
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
          })}
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex justify-between items-center w-[100%] vazir-semiBold text-slate-700">
              <p className="text-lg">جمع مبلغ خرید :</p>
              <p className="text-sm text-slate-700"> {totalPrice} تومان </p>
            </div>
            <Button
              title="نهایی کردن خرید"
              className="w-[30%] self-end bg-slate-700 py-3 rounded-lg text-slate-100 vazir-bold"
              onClick={showCustomerFormModal}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-36 gap-4">
          <Basket size="9rem" color="gray" />
          <p className="vazir-bold text-slate-600">
            هنوز محصولی به سبد خرید اضافه نکرده اید
          </p>
        </div>
      )}

      {showCFormModal && (
        <CustomerFormModal onClose={() => setShowCFormModal(false)} />
      )}
    </>
  );
}

export default Card;
