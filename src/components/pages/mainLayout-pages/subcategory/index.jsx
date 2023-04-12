import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseURL } from "../../../../api/constant";
import { fetchMainSubcategories } from "../../../../redux/MainSlices/mainSubcategoriesSlice";
import { Pagination } from "../../../shared";
import ProductCart from "../../../shared/product-cart";
import { FilterAlt, SortDown } from "../../../icons";

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
        filter: params.get("filter"),
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
      <div className="flex gap-32">
        <div className="flex gap-8 pr-10 vazir-bold text-slate-700 items-center hover:cursor-pointer">
          <div className="flex gap-1">
            <SortDown size="1.7rem" />
            <p>مرتب سازی:</p>
          </div>
          <p
            className={
              params.get("sort") == 1
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="1"
            onClick={(e) => {
              params.delete("page");
              params.set("sort", e.target.dataset.id);
              setParams(params);
            }}
          >
            نام کالا
          </p>
          <p
            className={
              params.get("sort") == 2
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="2"
            onClick={(e) => {
              params.delete("page");
              params.set("sort", e.target.dataset.id);
              setParams(params);
            }}
          >
            ارزان ترین قیمت
          </p>
          <p
            className={
              params.get("sort") == 3
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="3"
            onClick={(e) => {
              params.delete("page");
              params.set("sort", e.target.dataset.id);
              setParams(params);
            }}
          >
            گران ترین قیمت
          </p>
          <p
            className={
              params.get("sort") == 4
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="4"
            onClick={(e) => {
              params.delete("page");
              params.set("sort", e.target.dataset.id);
              setParams(params);
            }}
          >
            کمترین تعداد
          </p>
          <p
            className={
              params.get("sort") == 5
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="5"
            onClick={(e) => {
              params.delete("page");
              params.set("sort", e.target.dataset.id);
              setParams(params);
            }}
          >
            بیشترین تعداد
          </p>
        </div>
        <div className="flex gap-8 pl-10 vazir-bold text-slate-700 items-center hover:cursor-pointer">
          <div className="flex gap-1">
            <FilterAlt size="1.7rem" />
            <p> فیلتر: </p>
          </div>
          <p
            className={
              !params.get("filter")
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="3"
            onClick={() => {
              params.delete("page");
              params.delete("filter");
              setParams(params);
            }}
          >
            همه کالاها
          </p>
          <p
            className={
              params.get("filter") == 1
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="1"
            onClick={(e) => {
              params.delete("page");
              params.set("filter", e.target.dataset.id);
              setParams(params);
            }}
          >
            کالاهای موجود
          </p>
          <p
            className={
              params.get("filter") == 2
                ? `text-sm text-red-500`
                : `text-sm hover:text-red-500`
            }
            data-id="2"
            onClick={(e) => {
              params.delete("page");
              params.set("filter", e.target.dataset.id);
              setParams(params);
            }}
          >
            کالاهای ناموجود
          </p>
        </div>
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
