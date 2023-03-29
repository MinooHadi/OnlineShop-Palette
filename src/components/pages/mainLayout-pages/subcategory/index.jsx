import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchMainSubcategories } from "../../../../redux/MainSlices/mainSubcategoriesSlice";
import { store } from "../../../../redux/store";
import { Pagination } from "../../../shared";
import ProductCart from "../../../shared/product-cart";

function Subcategory() {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const { mainSubcategories } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchMainSubcategories({
        page: params.get("page"),
        subcategoryId: params.get("id"),
      })
    );
  }, [dispatch, params]);

  function goToProductDetailPage(e) {
    navigate(`/product?id=${e.target.id}`);
  }

  function calculatePageCount() {
    const pageCount = Math.ceil(mainSubcategories.totalCount / 3);
    return pageCount;
  }

  function getPageNumber(e) {
    params.set("page", e.target.innerText);
    setParams(params.toString());
  }

  return (
    <>
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
              id={item.id}
              onClick={goToProductDetailPage}
            />
          ))}
        </div>
      </div>
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default Subcategory;
