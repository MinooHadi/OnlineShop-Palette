import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../../redux/store";
import { fetchMainProductDetail } from "../../../../redux/MainSlices/mainProductDetailSlice";
import { baseURL } from "../../../../api/constant";

function Product() {
  const dispatch = useDispatch();
  let [params, setParams] = useSearchParams();
  const { mainProductDetail } = useSelector((store) => store);

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
                  src={`${baseURL}/files/${item.thumbnail}`}
                  alt={item.name}
                  className="w-[100%] h-[100%] object-scale-down"
                />
              </div>
              <div className="flex justify-start p-2 border-2 w-96 border-slate-200 rounded-md overflow-x-auto no-scrollbar ">
                {item.image.map((i) => (
                  <div className="w-28 h-28 flex-none">
                    <img
                      src={`${baseURL}/files/${i}`}
                      className="w-[100%] h-[100%] object-scale-down"
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
              <p className="text-slate-600 text-sm">
                {" "}
                برند کالا: {item.brand}{" "}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-slate-700 text-xl"> {item.name} </p>
                {item.quantity == 0 ? (
                  <p className="text-red-600"> ناموجود </p>
                ) : (
                  <p className="text-slate-700 text-base"> {item.price} تومان </p>
                )}
              </div>
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
