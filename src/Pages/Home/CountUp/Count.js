import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Typography, Container } from "@mui/material";
import network from "../../../Images/network .png";
import member from "../../../Images/employee.png";
import smile from "../../../Images/smile.png";
import download from "../../../Images/download.png";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Count.css";

const Count = () => {
  return (
    <>
      <section>
        <div
          className="number"
          style={{
            padding: "100px 0",
            display: "flex",
            justifyContent: "space-between",
            background: "#f9fbfb",
          }}
        >
          <Container>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "2px 3px 45px rgba(0,0,0,0.05)",
                    }}
                    style={{ height: "268px", width: "292px" }}
                  >
                    <Typography sx={{ padding: 16, textAlign: "center" }} variant="h3">
                      <img
                        style={{
                          marginLeft: "25px",
                          height: "60px",
                          width: "60px",
                        }}
                        src={network}
                        alt=""
                      />

                      <Box>
                        <CountUp start={1058} end={1190} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "#242f6c",
                                    fontSize: "35px",
                                    margin: "0 3px",
                                  }}
                                  ref={countUpRef}
                                ></span>
                                <Typography variant="h3">+</Typography>
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>

                        <p style={{ fontSize: "16px" }}>Amazing Products</p>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "2px 3px 45px rgba(0,0,0,0.05)",
                    }}
                    style={{ height: "268px", width: "292px" }}
                  >
                    <Typography sx={{ padding: 16, textAlign: "center" }} variant="h3">
                      <img style={{ height: "60px", width: "60px" }} src={download} alt="" />

                      <Box>
                        {/*---------------- count up -----------*/}
                        <CountUp start={1588} end={1720} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "#242f6c",
                                    fontSize: "35px",
                                    margin: "0 3px",
                                  }}
                                  ref={countUpRef}
                                ></span>
                                <Typography variant="h3">+</Typography>
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <p style={{ fontSize: "16px" }}>Total Downloads</p>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "2px 3px 45px rgba(0,0,0,0.05)",
                    }}
                    style={{ height: "268px", width: "292px" }}
                  >
                    <Typography sx={{ padding: 16, textAlign: "center" }} variant="h3">
                      <img style={{ height: "60px", width: "60px" }} src={smile} alt="" />

                      <Box>
                        {/*---------------- count up -----------*/}
                        <CountUp start={1720} end={1852} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "#242f6c",
                                    fontSize: "35px",
                                    margin: "0 3px",
                                  }}
                                  ref={countUpRef}
                                ></span>
                                <Typography variant="h3">+</Typography>
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>

                        <p style={{ fontSize: "16px" }}>Happy Customers</p>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "2px 3px 45px rgba(0,0,0,0.05)",
                    }}
                    style={{ height: "268px", width: "292px" }}
                  >
                    <Typography sx={{ padding: 16, textAlign: "center" }} variant="h3">
                      <img style={{ height: "60px", width: "60px" }} src={member} alt="" />
                      {/*---------------- count up -----------*/}

                      <Box>
                        <CountUp start={1852} end={1984} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    color: "#242f6c",
                                    fontSize: "35px",
                                    margin: "0 3px",
                                  }}
                                  ref={countUpRef}
                                ></span>
                                <Typography variant="h3">+</Typography>
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>

                        <p style={{ fontSize: "16px" }}>Team Members</p>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Count;
