import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchMainSubcategories } from "../../../../redux/MainSlices/mainSubcategoriesSlice";
import { Pagination } from "../../../shared";
import ProductCart from "../../../shared/product-cart";
import { SortDown } from "../../../icons";

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
        sortId: params.get("sort"),
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
      <div className="flex gap-8 pr-10 vazir-bold text-slate-700 items-center hover:cursor-pointer">
        <div className="flex">
          <SortDown size="1.7rem" />
          <p>مرتب سازی:</p>
        </div>
        <p
          className="text-sm"
          data-id="1"
          onClick={(e) => {
            params.delete("page")
            params.set("sort", e.target.dataset.id);
            setParams(params)
          }}
        >
          نام کالا
        </p>
        <p
          className="text-sm"
          data-id="2"
          onClick={(e) => {
            params.delete("page")
            params.set("sort", e.target.dataset.id);
            setParams(params)
          }}
        >
          ارزان ترین قیمت
        </p>
        <p
          className="text-sm"
          data-id="3"
          onClick={(e) => {
            params.delete("page")
            params.set("sort", e.target.dataset.id);
            setParams(params)
          }}
        >
          گران ترین قیمت
        </p>
        <p
          className="text-sm"
          data-id="4"
          onClick={(e) => {
            params.delete("page")
            params.set("sort", e.target.dataset.id);
            setParams(params)
          }}
        >
          کمترین تعداد
        </p>
        <p
          className="text-sm"
          data-id="5"
          onClick={(e) => {
            params.delete("page")
            params.set("sort", e.target.dataset.id);
            setParams(params)
          }}
        >
          بیشترین تعداد
        </p>
      </div>
      <div className="px-10 my-6">
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
