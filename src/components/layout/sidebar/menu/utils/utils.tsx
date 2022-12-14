import { To } from "react-router-dom";

export type TypeActiveTab = "women" | "man" | "kids";

interface ICollapseItem {
  text: string;
  to: To;
}
export interface ICollapseContainer {
  title: string;
  content: ICollapseItem[];
}
export interface ITab {
  id: TypeActiveTab;
  display: string;
}
