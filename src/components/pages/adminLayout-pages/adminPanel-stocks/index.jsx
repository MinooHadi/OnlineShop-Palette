import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../../../../redux/Slices/stocksSlice";
import { Button, Pagination, Table } from "../../../shared";

function AdminPanelStocks() {
  const dispatch = useDispatch();
  const { stocks } = useSelector((store) => store);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchStocks(currentPage));
    console.log(currentPage);
  }, [dispatch, currentPage]);

  function calculatePageCount() {
    const pageCount = Math.ceil(stocks.totalCount / 6);
    return pageCount;
  }

  function getPageNumber(e) {
    setCurrentPage(e.target.innerText);
  }

  return (
    <>
      <div className="flex">
        <Table
          thead={["نام کالا", "قیمت", "موجودی"]}
          tbody={stocks.data}
          td={["name", "price", "quantity"]}
          renderInSrc={[]}
          iconThead={[]}
          iconTd={[]}
        />
        <Button
          title="ذخیره"
          className="bg-green-200 text-green-900 h-14 w-36 mt-6 ml-6"
        />
      </div>
      <Pagination pageCount={calculatePageCount()} onClick={getPageNumber} />
    </>
  );
}

export default AdminPanelStocks;
