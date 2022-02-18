import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import MuiButton from "../../../StyledComponent/MuiButton";
import useAuth from "../../../Hooks/useAuth";
import profile from "../../../Image/profile.png"
const Navbar = () => {
    const {user, logout} = useAuth()
  return (
    <div>
      {/* Mui-navbar package used */}
      <MuiNavbar logo="https://i.ibb.co/N3Y9VVw/logo.png" background="#00ACD6">
        <NavItem to="/home">HOME</NavItem>
        <NavItem to="/about">ABOUT US</NavItem>
        <NavItem to="/explore">OUR COURSES</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
        {!user.email ? (
          <NavItem to="/login">
            <MuiButton
              sx={{ color: "white", padding: "5px 30px", fontSize: "18px" }}
            >
              Login
            </MuiButton>
          </NavItem>
        ) : (
          <NavItem to="/register">
              <MuiButton
                onClick={logout}
              sx={{ color: "white", padding: "5px 30px", fontSize: "18px" }}
            >
              Logout
            </MuiButton>
          </NavItem>
        )}
        <NavItem>{user.displayName}</NavItem>
        
      </MuiNavbar>
    </div>
  );
};

export default Navbar;
