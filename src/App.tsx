import React from "react";
import { Cart, Menu, Navbar } from "./components/layout";

import { IoCloseOutline } from "react-icons/io5";

const App = () => {
  return (
    <>
      <div className="drawer">
        <input type="checkbox" className="drawer-toggle" id="toggle-drawer" />
        <div className="drawer-content">
          <Navbar></Navbar>
        </div>
        <div className="drawer-side">
          <label htmlFor="toggle-drawer" className="drawer-overlay"></label>
          <div className="w-full max-w-md bg-white pt-2.5 menu relative">
            <label
              htmlFor="toggle-drawer"
              className="flex-shrink-0 sticky top-0 left-0 w-full bg-white px-4 pt-2.5 z-50 pb-5 cursor-pointer"
            >
              <IoCloseOutline className="w-6 h-6" />
            </label>

            <div className="flex-1">
              {/* <Menu /> */}
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
