import React, { useState } from "react";
import HeaderCart from "../headerCart";
import Input from "../input";
import Select from "../select";

import image1 from "./../../../assets/images/1.png";
import image2 from "./../../../assets/images/2.png";
import image3 from "./../../../assets/images/3.png";
import image4 from "./../../../assets/images/4.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProduct } from "../../../redux/MainSlices/searchProductSlice";
import { useNavigate } from "react-router";

function HeaderCarts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchProduct } = useSelector((store) => store);
  const [showSearchResults, setShowSearchResults] = useState(false);

  function searchProducts(e) {
    if (e.target.value) {
      dispatch(
        fetchSearchProduct({
          searchItem: e.target.value,
        })
      );
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around mt-8">
        <HeaderCart
          containerStyle="w-1/5 h-28 bg-red-100 flex flex-row-reverse justify-between pr-3"
          src={image1}
          className="w-20 h-28"
          title="ارسال رایگان"
          description="برای خرید بالای 500 هزار تومان"
        />
        <HeaderCart
          containerStyle="w-1/5 h-28 bg-blue-100 flex flex-row-reverse justify-between pr-3"
          src={image2}
          className="w-24 h-28"
          title="زمان و شیوه ارسال"
          description="ارسال با پست به سرتاسر ایران"
        />
        <HeaderCart
          containerStyle="w-1/5 h-28 bg-green-100 flex flex-row-reverse justify-between pr-3"
          src={image3}
          className="w-20 h-28"
          title="خودت طراحی کن"
          description="خودت طراحی کن ساختنش با ما"
        />
        <HeaderCart
          containerStyle="w-1/5 h-28 bg-purple-100 flex flex-row-reverse justify-between pr-3"
          src={image4}
          className="w-24 h-28"
          title="پشتیبانی سایت"
          description="با ما تماس بگیر 0973052909"
        />
      </div>
      <div className="flex vazir-semiBold justify-around items-center">
        <div className="flex flex-col relative">
          <Input
            type="search"
            value=""
            className="border-2 h-8 w-64 px-2"
            placeholder="جست و جو"
            onChange={searchProducts}
            onFocus={(e) => {
              if (e.target.value) {
                setShowSearchResults(true);
              }
            }}
            onBlur={() =>
              setTimeout(() => {
                setShowSearchResults(false);
              }, 200)
            }
          />
          {showSearchResults && (
            <div className="w-64 max-h-36 overflow-y-scroll no-scrollbar bg-slate-100 absolute top-10 pr-2">
              {searchProduct.data.length !== 0 ? (
                searchProduct.data.map((item) => (
                  <p
                    className="text-sm leading-8 text-slate-700 hover:cursor-pointer"
                    id={item.id}
                    onClick={(e) => {
                      navigate(`/product?id=${e.target.id}`);
                      setShowSearchResults(false);
                    }}
                  >
                    {item.name}
                  </p>
                ))
              ) : (
                <p className="text-sm leading-8 text-red-700 hover:cursor-pointer">
                  محصول مورد نظر یافت نشد
                </p>
              )}
            </div>
          )}
        </div>

        <Select
          opt={[{ name: "فیلتر" }]}
          className="h-8 w-64 border-2 text-gray-400 px-2"
        />
        <Select
          opt={[{ name: "مرتب سازی" }]}
          className="h-8 w-64 border-2 text-gray-400 px-2"
        />
      </div>
    </div>
  );
}

export default HeaderCarts;
