import React from "react";
import HeaderCart from "../headerCart";

import image1 from "./../../../assets/images/1.png";
import image2 from "./../../../assets/images/2.png";
import image3 from "./../../../assets/images/3.png";
import image4 from "./../../../assets/images/4.png";

function HeaderCarts() {
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
      <div className="flex vazir-semiBold justify-around items-center"></div>
    </div>
  );
}

export default HeaderCarts;
