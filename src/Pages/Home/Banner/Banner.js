import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const getStart = {
    href: "#product",
  };
  return (
    <div className="bg banner">
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid sx={{ display: "flex", alignItems: "center" }} sm={16} lg={8} xs={16}>
            <Box>
              <h2 className="banner-content1">
                The Best Course To Achieve Your <span className="banner-content-secondary">Digital Marketplace</span>
              </h2>
              <p className="banner-content2">
                We make selling digital products a breeze. Easy Digital Downloads is simple to learn and free to download.
              </p>
              <Box sx={{ display: "flex" }}>
                {/* first button */}
                <a {...getStart} style={{ color: "white", textDecoration: "none" }}>
                  <button className="cssbuttons-io-button">
                    {" "}
                    <span> Get started now</span>
                    <div className="icon">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </button>
                </a>

                {/* 2nd button */}
                <button className="cta ">
                  <NavLink className="text-decoration-none" to="/explore">
                    <span> Explore courses</span>
                  </NavLink>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Box>
            </Box>
          </Grid>

          <Grid sm={16} lg={8} xs={16}>
            <Box>
              <img className="banner-area" src="https://i.ibb.co/QrFFyx2/b8ae0dc98044f8c4c4b2cb236d2540b5.png" alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
