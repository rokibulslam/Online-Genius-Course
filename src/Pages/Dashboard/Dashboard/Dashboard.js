import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
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
import { FcAddDatabase, FcHeatMap, FcHome, FcRating } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import profile from "../../../Image/profile.png";
// import DashboardHome from "../DashboardHome/DashboardHome";
import "./Dasboard.css";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { logout, user } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      style={{
        backgroundColor: "rgb(49, 58, 70)",
        height: "100vh",
        color: "whitesmoke",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          mb: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "red" }}>D</span>ashboar
        <span style={{ color: "red" }}>D</span>
      </Typography>

      <Divider style={{ color: "white", height: "2px" }} />
      <List>
        <Box>
          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcHome />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                Home
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/review">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcRating />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                Add A Review
              </Button>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/addProduct">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcAddDatabase />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                Add a Course
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/manageProduct">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcHeatMap />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                Courses
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/orders">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcHeatMap />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                Manage Order
              </Button>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/myOrders">
              <span style={{ fontSize: "20px", paddingRight: "2px" }}>
                <FcHeatMap />
              </span>
              <Button variant="text" style={{ color: "white" }}>
                MY Order
              </Button>
            </NavLink>
          </ListItem>
        </Box>

        <Box>
          <ListItem>
            <Button style={{ color: "white" }} onClick={logout} variant="text">
              <span style={{ paddingRight: "10px", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              Logout
            </Button>
          </ListItem>
        </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="dashboard-main" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgb(250, 251, 254)", color: "#727CF5" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>

          <span>
            {user.photoURL ? (
              <img
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src={user.photoURL}
                alt=""
              />
            ) : (
              <img
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                src={profile}
                alt=""
              />
            )}
          </span>
          <Box>
            <Typography style={{ color: "black" }} variant="h6" noWrap component="div">
              {user.displayName}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
