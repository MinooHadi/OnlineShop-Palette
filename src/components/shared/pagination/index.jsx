import React from "react";

function Pagination(props) {
  let pages = [];

  function createPaginationDiv() {
    for (let i = 0; i < props.pageCount; i++) {
      pages.push(i + 1);
    }
    return pages;
  }

  return (
    <div className="m-auto my-5 flex flex-row-reverse gap-2 justify-center items-center">
      {createPaginationDiv().map((item) => (
        <div
          className="bg-rose-400 w-8 h-8 flex justify-center items-center rounded-full text-slate-600 vazir-extraBold hover:bg-rose-100  hover:cursor-pointer"
          onClick={props.onClick}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
