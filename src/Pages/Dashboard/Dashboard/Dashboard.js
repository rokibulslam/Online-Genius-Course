import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import {
  FcHeatMap,
  FcHome,
  FcRating,
  FcManager,
  FcExport,
  FcRedo,
} from "react-icons/fc";
import profile from "../../../Image/profile.png";
import "./Dasboard.css";
import { useState } from "react";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeUserMenu, setActiveUserMenu] = useState("");
  const { logout, admin, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuActivator = (item) => {
    setActiveUserMenu(item);
  };

  const userMenu = [
    {
      path: "/",
      name: "Home",
      icon: <FcHome />,
    },
    {
      path: "/dashboard/",
      name: "Order",
      icon: <FcHome />,
    },
    {
      path: "/dashboard/review",
      name: "Review",
      icon: <FcRating />,
    },
    {
      path: "/dashboard/orders",
      name: "All Order",
      icon: <FcHome />,
    },
    {
      path: "/dashboard/manageProduct",
      name: "Courses",
      icon: <FcHeatMap />,
    },
    {
      path: "/dashboard/addProduct",
      name: "Add Course",
      icon: <FcExport />,
    },
  ];
 
  // Sidebar
  const drawer = (
    <Box className="dashboard-sidebar">
      <Typography
        variant=""
        sx={{
          py: 2,
          mb: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          fontSize: "600",
        }}
      >
        {admin ? <span>ADMIN Dashbord</span> : <span>USER Dashbord</span>}
      </Typography>
      {/* Sidebar Items for users  */}
      <List>
        {!admin && (
          <Box>
            {userMenu.map((item, index) => (
              <NavLink
                onClick={() => menuActivator(item.name)}
                style={{ textDecoration: "none" }}
                to={item.path}
              >
                <ListItem
                  className={`navlink ${
                    activeUserMenu === item.name ? "active-nav" : ""
                  }`}
                >
                  <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                    {item.icon}
                  </span>
                  <Button variant="text" style={{ color: "white" }}>
                    {item.name}
                  </Button>
                </ListItem>
              </NavLink>
            ))}
          </Box>
        )}
        {/* Sidebar items for Admin  */}
        
        {/* Logout Button  */}
        <Box>
          <ListItem>
            <Button style={{ color: "white" }} onClick={logout} variant="text">
              <span style={{ paddingRight: "10px", fontSize: "20px" }}>
                <FcRedo />
              </span>
              Logout
            </Button>
          </ListItem>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#6790FF", color: "whitesmoke" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xl: "end",
              lg: "end",
              md: "end",
              sm: "end",
              xs: "space-between",
            },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <span>
              {user.photoURL ? (
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                  src={profile}
                  alt=""
                />
              )}
            </span>
            <Typography variant="p" noWrap component="div">
              {user.displayName}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Sidebar Start  */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Sidebar End  */}
      {/* Main Frame  */}
      <Box
        component="main"
        style={{ minHeight: "100vh", backgroundColor: "rgb(255, 255, 255)" }}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
