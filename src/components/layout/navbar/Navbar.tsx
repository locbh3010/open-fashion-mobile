import React from "react";
import Container from "../container/Container";
import NavbarCenter from "./components/NavbarCenter";
import NavbarEnd from "./components/NavbarEnd";
import NavbarStart from "./components/NavbarStart";

const Navbar = () => {
  return (
    <Container className="bg-[#E7EAEF]">
      <div className="navbar px-0 pt-5 pb-2">
        <NavbarStart />
        <NavbarCenter />
        <NavbarEnd />
      </div>
    </Container>
  );
};

export default Navbar;
