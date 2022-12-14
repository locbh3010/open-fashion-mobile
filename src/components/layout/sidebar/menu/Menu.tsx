import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiTwitter, SiYoutube, SiLinkedin } from "react-icons/si";

const MenuTabs = React.lazy(() => import("./components/tab/MenuTabs"));

const Menu = () => {
  return (
    <div className="flex w-full h-full flex-col justify-between relative">
      <MenuTabs />
      <div className="font-tenor flex-shrink-0 px-4 mt-auto sticky bottom-0 left-0 w-full bg-white z-50 py-2 border-t border-t-gray-scale-label/40">
        <div className="flex flex-col gap-4 mb-7 leading-[34.5px]">
          <div className="flex items-center gap-4 text-gray-scale-label">
            <BsTelephone className="w-6 h-6" />
            <span>(786) 713-8616</span>
          </div>
          <div className="flex items-center gap-4 text-gray-scale-label">
            <MdOutlineLocationOn className="w-6 h-6" />
            <span>Store locator</span>
          </div>
        </div>
        <div className="relative py-6">
          <div className="absolute w-36 h-[1px] top-0 left-1/2 -translate-x-1/2 bg-gray-scale-label">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-inherit"></span>
          </div>
          <div className="flex items-center justify-center gap-9">
            <SiTwitter className="w-6 h-6" />
            <SiYoutube className="w-6 h-6" />
            <SiLinkedin className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
