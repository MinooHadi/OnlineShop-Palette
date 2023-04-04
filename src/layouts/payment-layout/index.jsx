import React from "react";
import { IosKeypad, Loop2, RegEnvelope } from "../../components/icons";
import { useNavigate } from "react-router-dom";

function PaymentLayout() {
  const navigate = useNavigate()

  return (
    <div className="w-[50%] border-4 border-slate-400 flex flex-col gap-8 m-auto p-6 my-10 vazir-medium">
      <p className="text-fuchsia-700 text-xl">اطلاعات کارت</p>
      <form className="flex flex-col gap-10 py-3" onSubmit={() => navigate("/payment-result?status=true")}>
        <div className="flex gap-12 items-center">
          <div>
            <label>شماره کارت :</label>
            <p className="text-xs text-slate-500">
              شماره 16 رقمی درج شده بر روی کارت
            </p>
          </div>
          <input
            type="text"
            className="border-2 border-text-slate-200 w-[60%] py-2 rounded-lg"
          />
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <label>شماره شناسایی دوم (CVV2) :</label>
            <p className="text-xs text-slate-500">
              شماره 3 یا 4 رقمی درج شده بر روی کارت
            </p>
          </div>
          <input
            type="text"
            className="border-2 border-text-slate-200 w-[60%] py-2 rounded-lg"
          />
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <label>تاریخ انقضای کارت :</label>
            <p className="text-xs text-slate-500">
              دو رقم ماه/دو رقم آخر سال را وارد کنید
            </p>
          </div>
          <div className="w-[70%] flex gap-2 items-center">
            <input
              type="text"
              className="border-2 border-text-slate-200 w-[10%] py-2 rounded-lg"
            />
            /
            <input
              type="text"
              className="border-2 border-text-slate-200 w-[10%] py-2 rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <label>کد امنیتی :</label>
            <p className="text-xs text-slate-500">
              کد درج شده در کادر مقابل را وارد کنید
            </p>
          </div>
          <input
            type="text"
            className="border-2 border-text-slate-200 w-[20%] py-2 rounded-lg"
          />
          <div className="flex gap-2 items-center">
            <div className="bg-slate-100 text-center py-2 px-6">88402</div>
            <div className="bg-slate-100 p-3">
              <Loop2 />
            </div>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <label> رمز دوم (رمز اینترنتی) :</label>
            <p className="text-xs text-slate-500">رمز یکبار مصرف</p>
          </div>
          <input
            type="text"
            className="border-2 border-text-slate-200 w-[20%] py-2 rounded-lg"
          />
          <div className="flex gap-2 items-center">
            <div className="bg-slate-100 flex items-center justify-center gap-1 text-center py-2 px-4">
              <RegEnvelope size="1.2rem" />
              دریافت رمز پویا
            </div>
            <div className="bg-slate-100 p-3">
              <IosKeypad />
            </div>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <label> ایمیل (اختیاری) :</label>
            <p className="text-xs text-slate-500">
              رسید پرداخت به این ایمیل ارسال خواهد شد
            </p>
          </div>
          <input
            type="text"
            className="border-2 border-text-slate-200 w-[60%] py-2 rounded-lg"
          />
        </div>
        <div className="flex gap-[4%] ">
          <input
            type="submit"
            value="پرداخت"
            className="w-[63%] bg-green-600 text-white py-2 rounded-lg"
          />
          <button className="w-[33%] bg-red-600 text-white py-2 rounded-lg " onClick={() => navigate("/payment-result?status=false")}>
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentLayout;
