import React from "react";

import {
  BrandTiktokIcon,
  FacebookCircleLineIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/icons";

function MainLayoutFooter() {
  return (
    <div className="mainFooterColor h-40 w-full fixed bottom-0 flex justify-between items-center p-10">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-lg text-yellow-900">تماس با ما</p>
        <div>
          <p className="text-yellow-900">09373052909</p>
          <p className="text-yellow-900">minoo_munu@gmail.com</p>
        </div>
      </div>
      <hr className="bg-yellow-900 w-[0.05rem] h-24" />
      <div className="flex gap-5 items-center">
        <InstagramIcon size="1.5rem" className="text-yellow-900" />
        <FacebookCircleLineIcon size="1.9rem" className="text-yellow-900" />
        <TwitterIcon size="1.5rem" className="text-yellow-900" />
        <BrandTiktokIcon size="1.9rem" className="text-yellow-900" />
      </div>
    </div>
  );
}

export default MainLayoutFooter;
