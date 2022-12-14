import React from "react";
import { KidsMenu, ManMenu, WomenMenu } from "../../utils/data";
import { TypeActiveTab } from "../../utils/utils";
import MenuContent from "../content/MenuContent";

interface TabContentProps {
  active: TypeActiveTab;
}

const TabContent: React.FC<TabContentProps> = ({ active }) => {
  return (
    <>
      {active === "women" ? (
        <MenuContent arr={WomenMenu} />
      ) : active === "man" ? (
        <MenuContent arr={ManMenu} />
      ) : (
        <MenuContent arr={KidsMenu} />
      )}
    </>
  );
};

export default TabContent;
