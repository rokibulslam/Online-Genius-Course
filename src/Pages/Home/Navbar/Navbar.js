import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import MuiButton from "../../../StyledComponent/MuiButton";
import useAuth from "../../../Hooks/useAuth";
import { Box, CardMedia } from "@mui/material";
const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      {/* Mui-navbar package used */}
      <MuiNavbar logo="https://i.ibb.co/N3Y9VVw/logo.png" background="#00ACD6">
        <NavItem to="/home">Home</NavItem>

        <NavItem to="/explore">Our Courses</NavItem>

        {!user.email ? (
          <NavItem to="/login">
            <MuiButton sx={{ color: "white", padding: "5px 30px", fontSize: "18px" }}>Login</MuiButton>
          </NavItem>
        ) : (
          <>
            <NavItem to="/dashboard">Dashboard</NavItem>
            <Box sx={{ display: "inline", background: "rgba(255,255,255,0.5)", pt: 5, pb: 2, borderRadius: "5px", px: 2, color: "white" }}>
              {" "}
              <>
                <CardMedia
                  component="img"
                  sx={{ width: "auto", display: "inline", me: 1 }}
                  image="https://i.ibb.co/fq4WsRF/user-icon.png"
                  alt="Paella dish"
                />{" "}
              </>
              <>{user.displayName} </>
            </Box>
            <NavItem to="/">
              <MuiButton onClick={logout} sx={{ color: "white", padding: "5px 30px", fontSize: "18px" }}>
                Logout
              </MuiButton>
            </NavItem>
          </>
        )}
      </MuiNavbar>
    </div>
  );
};

export default Navbar;
