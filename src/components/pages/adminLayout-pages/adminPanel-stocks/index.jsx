import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { stocksEditService } from "../../../../api/services/stocks";

import { fetchStocks } from "../../../../redux/Slices/stocksSlice";
import { Button, Pagination, Table, Toast } from "../../../shared";

function AdminPanelStocks() {
  const dispatch = useDispatch();
  const { stocks } = useSelector((store) => store);
  const [params, setParams] = useSearchParams();
  const [showSToast, setShowSToast] = useState(undefined);

  const [editions, setEditions] = useState({});

  useEffect(() => {
    dispatch(
      fetchStocks({
        page: params.get("page"),
        categoryId: params.get("categoryId"),
        searchItem: params.get("search"),
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

  async function saveEdit() {
    let promises = [];
    for (let [id, obj] of Object.entries(editions)) {
      promises.push(stocksEditService({ ...obj, id }));
    }
    const res = await Promise.all(promises);
    if (res[0].status === 200) {
      setShowSToast(true);
      setTimeout(() => {
        setShowSToast(undefined);
      }, 2000);
    } else {
      setShowSToast(false);
      setTimeout(() => {
        setShowSToast(undefined);
      }, 2000);
    }
    //TODO handle failure
    dispatch(
      fetchStocks({
        page: params.get("page"),
        categoryId: params.get("categoryId"),
        searchItem: params.get("search"),
      })
    );
  }

  return (
    <>
      <div>
        <Button
          title="ذخیره"
          className="bg-rose-400 rounded-full shadow-lg shadow-rose-200 text-slate-600 fixed top-40 left-4 h-14 w-28 mt-6 ml-6 vazir-extraBold"
          onClick={saveEdit}
        />
        <Table
          thead={["نام کالا", "قیمت", "موجودی"]}
          tbody={stocks.data}
          td={["name", "price", "quantity"]}
          editable={["price", "quantity"]}
          editions={editions}
          setEditions={setEditions}
        />
      </div>
      {showSToast === true ? (
        <Toast msg="اطلاعات با موفقیت ویرایش شد" status={1} />
      ) : showSToast === false ? (
        <Toast msg="دوباره امتحان کنید" status={0} />
      ) : null}
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default AdminPanelStocks;
