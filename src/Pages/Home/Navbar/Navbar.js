import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import { Button } from "@mui/material";

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
          <Button variant="contained" color="secondary">
            LOGIN
          </Button>
        </NavItem>
      </MuiNavbar>
    </div>
  );
};

export default Navbar;
