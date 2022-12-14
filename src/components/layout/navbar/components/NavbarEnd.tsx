import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavbarEnd = () => {
  return (
    <div className="navbar-end gap-4">
      <FiSearch className="w-6 h-6"></FiSearch>
      <HiOutlineShoppingBag className="w-6 h-6"></HiOutlineShoppingBag>
    </div>
  );
};

export default NavbarEnd;
