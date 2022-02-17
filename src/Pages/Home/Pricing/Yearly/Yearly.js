import React from "react";
import "./Yearly.css";
import { Link } from "react-router-dom";
import { Box, CardMedia, Grid } from "@mui/material";

const Yearly = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ border: "none" }} className="card">
              <Box className="yearly">
                <Box className="pricing-banner" sx={{ textAlign: "center", mb: 4 }}>
                  <CardMedia component="img" image="https://i.ibb.co/41S6zyj/Screenshot-6.png" alt="Paella dish" />
                </Box>

                <Box sx={{ py: 3 }}>
                  <Box>
                    <li className="pricing-check text-muted">
                      <small>Advance template option.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Visual page builder.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>One click demo importer.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Lifetime free update.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>6 Months Premium Support .</small>
                    </li>{" "}
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <button style={{ margin: "0 auto" }} className="cssbuttons-io-button">
                        {" "}
                        Choose Single
                        <div className="icon">
                          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ border: "none" }} className="card">
              <Box sx={{}} className="yearly">
                <Box className="pricing-banner" sx={{ textAlign: "center", mb: 4 }}>
                  <CardMedia component="img" image="https://i.ibb.co/tY4336z/Screenshot-4.png" alt="Paella dish" />
                </Box>

                <Box sx={{ py: 3 }}>
                  <Box>
                    <li className="pricing-check text-muted">
                      <small>Advance template option.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Visual page builder.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>One click demo importer.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Lifetime free update.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>6 Months Premium Support .</small>
                    </li>{" "}
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <button style={{ margin: "0 auto" }} className="cssbuttons-io-button">
                        {" "}
                        Choose Multiple
                        <div className="icon">
                          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ border: "none" }} className="card">
              <Box sx={{}} className="yearly">
                <Box className="pricing-banner" sx={{ textAlign: "center", mb: 4 }}>
                  <CardMedia component="img" image="https://i.ibb.co/PtkPLNH/Screenshot-5.png" alt="Paella dish" />
                </Box>

                <Box sx={{ py: 3 }}>
                  <Box>
                    <li className="pricing-check text-muted">
                      <small>Advance template option.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Visual page builder.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>One click demo importer.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>Lifetime free update.</small>
                    </li>{" "}
                    <li className="pricing-check text-muted">
                      <small>6 Months Premium Support .</small>
                    </li>{" "}
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <button style={{ margin: "0 auto" }} className="cssbuttons-io-button">
                        {" "}
                        Choose Extended
                        <div className="icon">
                          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Yearly;
