import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { OutlineClose, Tick } from "../../components/icons";

function PaymentResultLayout() {
  const [qParams] = useSearchParams();
  const { id } = useParams();

  console.log(id);

  return (
    <>
      {qParams.get("status") == "true" ? (
        <div className="flex flex-col gap-4 items-center justify-center h-[100vh] w-[100%]">
          <div className="w-72 h-72 rounded-full bg-green-500 flex items-center justify-center">
            <Tick size="13rem" color="white" />
          </div>
          <p className="vazir-bold text-xl">
            پرداخت سفارش {id} با کد رهگیری {Date.now} با موفقیت انجام شد
          </p>
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
          {id !== "null" ? (
            <p className="vazir-bold text-xl">
              {" "}
              پرداخت سفارش {id} با خطا مواجه شد{" "}
            </p>
          ) : (
            <p className="vazir-bold text-xl"> شما از این خرید انصراف داده اید </p>
          )}
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
