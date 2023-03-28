import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchMainCategories } from "../../../../redux/MainSlices/mainCategorySlice";
import { fetchSubcategories } from "../../../../redux/Slices/subcategoriesSlice";
import { store } from "../../../../redux/store";
import ProductCart from "../../../shared/product-cart";

function Category() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const { mainCategories, subcategories } = useSelector((store) => store);

  useEffect(() => {
    dispatch(
      fetchMainCategories({
        categoryId: params.get("id"),
      })
    );
  }, [dispatch, params]);

  return (
    <div>
      {Object.entries(mainCategories.data).map((item) => {
        return (
          <div className="flex flex-col px-10 my-16">
            <div className="bg-slate-300 flex justify-center items-center h-10 vazir-extraBold text-lg text-slate-700 rounded-xl">
              {item[1] && item[1][0].subcategory.name}
            </div>
            <div className="flex gap-28 mt-8 flex-wrap justify-center">
              {item[1].map((i) => (
                <ProductCart
                  src={`${baseURL}/files/${i.thumbnail}`}
                  alt={i.name}
                  name={i.name}
                  quantity={i.quantity}
                  price={i.price}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
