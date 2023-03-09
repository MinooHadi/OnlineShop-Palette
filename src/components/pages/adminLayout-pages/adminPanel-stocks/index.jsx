import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchStocks } from "../../../../redux/Slices/stocksSlice";
import { Button, Pagination, Table } from "../../../shared";

function AdminPanelStocks() {
  const dispatch = useDispatch();
  const { stocks } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(
      fetchStocks({
        page: params.get("page"),
        categoryId: params.get("categoryId"),
      })
    );
  }, [dispatch, params]);

  function calculatePageCount() {
    const pageCount = Math.ceil(stocks.totalCount / 6);
    return pageCount;
  }

  function getPageNumber(e) {
    params.set("page", e.target.innerText);
    setParams(params.toString());
  }

  return (
    <>
      <div>
        <Button
          title="ذخیره"
          className="bg-rose-400 rounded-full text-slate-600 fixed top-40 left-4 h-14 w-28 mt-6 ml-6 vazir-extraBold"
        />
        <Table
          thead={["نام کالا", "قیمت", "موجودی"]}
          tbody={stocks.data}
          td={["name", "price", "quantity"]}
          renderInSrc={[]}
          iconThead={[]}
          iconTd={[]}
        />
      </div>
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default AdminPanelStocks;
