import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import {
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from "../../icons";

function Pagination(props) {
  const divWidth = useRef();
  const [params] = useSearchParams()
  const currentPage = params.get("page") || 1

  console.log(currentPage);

  function createPaginationDiv() {
    let pages = [];
    for (let i = 0; i < props.pageCount; i++) {
      pages.push(i + 1);
    }
    return pages;
  }

  function goToLeft() {
    divWidth.current.scrollLeft -= 100;
  }

  function goToRight() {
    divWidth.current.scrollLeft += 100;
  }

  return (
    <>
      {createPaginationDiv().length > 5 ? (
        <div className="w-72 m-auto flex justify-center items-center gap-4">
          <div>
            <KeyboardDoubleArrowRightIcon
              size="1.5rem"
              className="text-slate-600"
              onClick={goToRight}
            />
          </div>
          <div
            className="m-auto my-5 flex flex-row-reverse gap-2 justify-start items-center w-52 overflow-x-scroll no-scrollbar"
            ref={divWidth}
          >
            {createPaginationDiv().map((item) => (
              <div
                className={`${item == currentPage ? "bg-rose-200" : "bg-rose-400" } w-8 h-8 flex justify-center items-center rounded-full text-slate-600 vazir-extraBold hover:bg-rose-100  hover:cursor-pointer p-3`}
                onClick={props.onClick}
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <KeyboardDoubleArrowLeftIcon
              size="1.5rem"
              className="text-slate-600"
              onClick={goToLeft}
            />
          </div>
        </div>
      ) : (
        <div
          className="m-auto my-5 flex flex-row-reverse gap-2 justify-start items-center w-52 overflow-x-scroll no-scrollbar"
          ref={divWidth}
        >
          {createPaginationDiv().map((item) => (
            <div
              className="bg-rose-400 w-8 h-8 flex justify-center items-center rounded-full text-slate-600 vazir-extraBold hover:bg-rose-100  hover:cursor-pointer p-3"
              onClick={props.onClick}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Pagination;
