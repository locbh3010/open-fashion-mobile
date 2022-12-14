import clsx from "clsx";
import React, { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { TypeActiveTab } from "../../utils/utils";

interface TabItemProps {
  id: TypeActiveTab;
  children: ReactNode;
  isActive?: boolean;
  setActive: Dispatch<SetStateAction<TypeActiveTab>>;
}

const TabItem: React.FC<TabItemProps> = ({
  id,
  children,
  isActive,
  setActive,
}) => {
  const onClick = (): void => {
    setActive(id);
  };
  return (
    <span
      className={clsx(
        "border-b-[0.5px] flex-1 block relative duration-300 cursor-pointer pb-4",
        "text-sm text-gray-scale-body text-center leading-[34.5px] tracking-[3px] uppercase font-tenor",
        isActive
          ? "opacity-100 border-b-[#DD8560]"
          : "opacity-50 border-b-gray-scale-placeholder"
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#DD8560] w-1.5 h-1.5 rotate-45 duration-300",
          isActive ? "opacity-100" : "opacity-0"
        )}
      ></div>
      {children}
    </span>
  );
};

export default TabItem;
