import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import MuiButton from "../../../StyledComponent/MuiButton";

const Navbar = () => {
  return (
    <div>
      {/* Mui-navbar package used */}
      <MuiNavbar logo="https://i.ibb.co/N3Y9VVw/logo.png" background="#444444">
        <NavItem to="/home">HOME</NavItem>
        <NavItem to="/about">ABOUT US</NavItem>
        <NavItem to="/course">OUR COURSES</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
        <NavItem to="/login">
          <MuiButton sx={{ color: "white", padding: "5px 30px", fontSize: "18px" }}>Login</MuiButton>
        </NavItem>
      </MuiNavbar>
    </div>
  );
};

export default Navbar;
