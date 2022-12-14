import clsx from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import _ from "lodash";

interface CollapseProps {
  title: string;
  children: ReactNode;
}
interface CollapseItemProps {
  children?: ReactNode;
}

export const CollapseItem: React.FC<CollapseItemProps> = ({ children }) => {
  return <div className="py-3">{children}</div>;
};

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [show, setShow] = useState<boolean>(false);
  const collapseContent = useRef<HTMLDivElement | null>(null);
  const onClick = _.debounce(() => {
    setShow((oldVal) => !oldVal);
  }, 50);

  useEffect(() => {
    if (collapseContent.current) {
      show
        ? (collapseContent.current.style.height = `${collapseContent.current?.scrollHeight}px`)
        : (collapseContent.current.style.height = `0`);
    }
  }, [show]);
  return (
    <div className="font-tenor text-gray-scale-body w-full bg-white">
      <div
        className="flex items-center justify-between cursor-pointer py-4"
        onClick={onClick}
      >
        <span>{title}</span>
        <HiOutlineChevronDown
          className={clsx(
            "w-6 h-6 opacity-50 duration-300",
            show ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      <div
        className="pl-4 flex flex-col duration-300 overflow-hidden"
        style={{
          height: "0px",
        }}
        ref={collapseContent}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
