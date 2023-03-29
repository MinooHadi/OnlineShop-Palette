import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../../redux/store";
import { fetchMainProductDetail } from "../../../../redux/MainSlices/mainProductDetailSlice";
import { baseURL } from "../../../../api/constant";
import Button from "../../../shared/button";
import Input from "../../../shared/input";

function Product() {
  const dispatch = useDispatch();
  let [params, setParams] = useSearchParams();
  const { mainProductDetail } = useSelector((store) => store);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    dispatch(
      fetchMainProductDetail({
        id: params.get("id"),
      })
    );
  }, [dispatch]);

  return (
    <>
      {mainProductDetail.data.map((item) => {
        return (
          <div className="flex border-2 border-slate-600 rounded-lg w-[90%] m-auto my-8">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-96 h-96 border-2 border-slate-200 rounded-md flex justify-center items-center p-5">
                <img
                  src={
                    selectedImage !== undefined
                      ? `${baseURL}/files/${item.image[+selectedImage]}`
                      : `${baseURL}/files/${item.thumbnail}`
                  }
                  alt={item.name}
                  className="w-[100%] h-[100%] object-scale-down"
                />
              </div>
              <div className="flex justify-start p-2 border-2 w-96 border-slate-200 rounded-md overflow-x-auto no-scrollbar ">
                {item.image.map((iItem, index) => (
                  <div className="w-28 h-28 flex-none">
                    <img
                      src={`${baseURL}/files/${iItem}`}
                      className="w-[100%] h-[100%] object-scale-down"
                      onClick={() => setSelectedImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 m-8 vazir-medium w-[70%]">
              <p className="text-slate-800">
                <span className="text-slate-600">{item.category.name}</span> /{" "}
                <span className="text-slate-500">{item.subcategory.name}</span>
              </p>
              <p className="text-slate-600 text-sm">برند کالا: {item.brand}</p>
              <div className="flex justify-between items-center">
                <p className="text-slate-700 text-xl"> {item.name} </p>
                {item.quantity == 0 ? (
                  <p className="text-red-600"> ناموجود </p>
                ) : (
                  <p className="text-slate-700 text-base">{item.price} تومان</p>
                )}
              </div>
              {item.quantity == 0 ? (
                <Button
                  className="disabled:bg-emerald-300 w-40 h-12 text-slate-100 px-3 rounded-lg self-end"
                  onClick={() => console.log("hi")}
                  title="افزودن به سبد خرید"
                  disabled={true}
                />
              ) : (
                <div className="flex justify-between">
                  <div className="flex flex-col gap-3">
                    <Input
                      type="number"
                      className="border-2 w-14"
                      defaultValue="1"
                      min="1"
                      max={item.quantity}
                    />
                    {item.quantity < 10 ? (
                      <p className="text-red-600 text-sm"> تنها {item.quantity} عدد در انبار باقی مانده </p>
                    ) : null}
                  </div>
                  <Button
                    className="w-40 h-12 bg-emerald-700 text-slate-100 px-3 rounded-lg hover:bg-emerald-900 self-end"
                    onClick={() => console.log("hi")}
                    title="افزودن به سبد خرید"
                  />
                </div>
              )}
              <div>
                <p className="text-slate-500 text-sm p-2">توضیحات: </p>
                <p className="text-slate-700"> {item.description} </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
