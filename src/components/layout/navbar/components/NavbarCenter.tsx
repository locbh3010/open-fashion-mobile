import React from "react";
import Logo from "../../../../assets/images/Logo.png";

const NavbarCenter = () => {
  return (
    <div className="navbar-center">
      <img srcSet={`${Logo} 2x`} alt="" />
    </div>
  );
};

export default NavbarCenter;
