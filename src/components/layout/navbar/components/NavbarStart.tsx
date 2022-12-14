import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const NavbarStart = () => {
  return (
    <div className="navbar-start">
      <label htmlFor="toggle-drawer" className="cursor-pointer">
        <HiOutlineMenuAlt1 className="w-6 h-6 pointer-events-none"></HiOutlineMenuAlt1>
      </label>
    </div>
  );
};

export default NavbarStart;
