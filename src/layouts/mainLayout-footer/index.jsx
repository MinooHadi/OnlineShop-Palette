import React from "react";

import {
  BrandTiktokIcon,
  FacebookCircleLineIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/icons";

function MainLayoutFooter() {
  return (
    <div className="mainFooterColor h-40 w-full flex justify-between items-center p-10 mt-6">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-lg text-slate-600 vazir-extraBold">تماس با ما</p>
        <div>
          <p className="text-slate-600 vazir-semiBold">09373052909</p>
          <p className="text-slate-600 vazir-semiBold">minoo_munu@gmail.com</p>
        </div>
      </div>
      <hr className="bg-slate-600 w-[0.054rem] h-24" />
      <div className="flex gap-5 items-center">
        <InstagramIcon size="1.5rem" className="text-slate-600" />
        <FacebookCircleLineIcon size="1.9rem" className="text-slate-600" />
        <TwitterIcon size="1.5rem" className="text-slate-600" />
        <BrandTiktokIcon size="1.9rem" className="text-slate-600" />
      </div>
    </div>
  );
}

export default MainLayoutFooter;
