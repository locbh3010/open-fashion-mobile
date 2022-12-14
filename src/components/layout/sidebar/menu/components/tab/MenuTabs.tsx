import React, { SetStateAction, useState } from "react";

import { TabList } from "../../utils/data";
import { TypeActiveTab } from "../../utils/utils";
import TabContent from "./TabContent";
import TabItem from "./TabItem";

const MenuTabs = () => {
  const [active, setActive] = useState<SetStateAction<TypeActiveTab>>("women");

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="tabs w-full grid-cols-3 mb-5 flex-shrink-0">
        {TabList.map((tab) => (
          <TabItem
            key={tab.id}
            id={tab.id}
            setActive={setActive}
            isActive={tab.id === active}
          >
            {tab.display}
          </TabItem>
        ))}
      </div>
      <div className="px-4 flex-1 overflow-y-scroll">
        <TabContent active={active as TypeActiveTab} />
      </div>
    </div>
  );
};

export default MenuTabs;
888888;
