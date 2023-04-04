import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { OutlineClose, Tick } from "../../components/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  postMainOrder,
  shoppingCardSliceActions,
} from "../../redux/MainSlices/shoppingCardSlice";

function PaymentResultLayout() {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const { shoppingCard } = useSelector((store) => store);

  useEffect(() => {
    if (params.get("status") == "true") {
      const data = JSON.parse(localStorage.getItem("order"));
      dispatch(postMainOrder(data));
    }
  }, [dispatch]);

  useEffect(() => {
    if (shoppingCard.status === "success") {
      localStorage.removeItem("card");
      localStorage.removeItem("cardState");
      localStorage.removeItem("order");
      dispatch(shoppingCardSliceActions.reset());
    }
  }, [dispatch, shoppingCard.status]);

  return (
    <>
      {params.get("status") == "true" ? (
        <div className="flex flex-col gap-4 items-center justify-center h-[100vh] w-[100%]">
          <div className="w-72 h-72 rounded-full bg-green-500 flex items-center justify-center">
            <Tick size="13rem" color="white" />
          </div>
          <p className="vazir-bold text-xl">پرداخت با موفقیت انجام شد</p>
          <Link
            to="/"
            className="w-52 h-12 rounded-xl vazir-medium mainHeaderColor text-slate-600 flex justify-center items-center "
          >
            بازگشت به سایت اصلی
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center h-[100vh] w-[100%]">
          <div className="w-72 h-72 rounded-full bg-red-500 flex items-center justify-center">
            <OutlineClose size="13rem" color="white" />
          </div>
          <p className="vazir-bold text-xl"> پرداخت با خطا مواجه شد </p>
          <Link
            to="/"
            className="w-52 h-12 rounded-xl vazir-medium mainHeaderColor text-slate-600 flex justify-center items-center "
          >
            بازگشت به سایت اصلی
          </Link>
        </div>
      )}
    </>
  );
}

export default PaymentResultLayout;
