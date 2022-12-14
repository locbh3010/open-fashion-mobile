import React from "react";
import { ICollapseContainer } from "../../utils/utils";
import Collapse, { CollapseItem } from "../Collapse";

interface MenuContentProps {
  arr: ICollapseContainer[] | undefined;
}
const MenuContent: React.FC<MenuContentProps> = ({ arr }) => {
  return (
    <ul className="menu">
      {arr?.map((collapse) => (
        <Collapse key={collapse.title} title={collapse.title}>
          {collapse.content.map((item) => (
            <CollapseItem key={item.text}>{item.text}</CollapseItem>
          ))}
        </Collapse>
      ))}
    </ul>
  );
};

export default MenuContent;
