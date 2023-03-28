import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchMainSubcategories } from "../../../../redux/MainSlices/mainSubcategoriesSlice";
import { store } from "../../../../redux/store";
import ProductCart from "../../../shared/product-cart";

function Subcategory() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const { mainSubcategories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchMainSubcategories({
        subcategoryId: params.get("id"),
      })
    );
  }, [dispatch, params]);

  return (
    <div className="px-10 my-16">
      <div className="bg-slate-300 flex justify-center items-center h-10 vazir-extraBold text-lg text-slate-700 rounded-xl">
        {mainSubcategories.data[0] &&
          mainSubcategories.data[0].subcategory.name}
      </div>
      <div className="flex gap-28 mt-8 flex-wrap justify-center">
        {mainSubcategories.data.map((item) => (
          <ProductCart
            src={`${baseURL}/files/${item.thumbnail}`}
            alt={item.name}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Subcategory;
