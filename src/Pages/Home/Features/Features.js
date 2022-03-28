import React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import security from "../../../Images/shield.png";
import support from "../../../Images/support.png";
import quality from "../../../Images/gold-medal.png";
import Grid from "@mui/material/Grid";
import "./Features.css";

const Features = () => {
  return (
    <>
      <section>
        <Container>
          <div style={{ padding: "100px 0", display: "flex", justifyContent: "space-between" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  {/*------------------------ card 1 ---------------------*/}

                  <Paper
                    className="feature"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    style={{ boxShadow: "5px 5px 23px 0px rgba(0,0,0,0.05)" }}
                  >
                    <Typography sx={{ textAlign: "center" }} variant="h3">
                      <img style={{ padding: 16, height: "100px", width: "100px" }} src={security} alt="" />

                      <Box style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>Security Assurance</p>
                        <Typography sx={{ px: 4, pb: 2 }} variant="body1">
                          Our template architecture is designed for maximize security and prevent malware...
                        </Typography>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  {/*------------------------ card 2 ---------------------*/}

                  <Paper
                    className="feature"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    style={{ boxShadow: "5px 5px 23px 0px rgba(0,0,0,0.05)" }}
                  >
                    <Typography sx={{ textAlign: "center" }} variant="h3">
                      <img style={{ padding: 16, height: "100px", width: "100px" }} src={support} alt="" />

                      <Box style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>Best Customer Support</p>
                        <Typography sx={{ px: 4, pb: 2 }} variant="body1">
                          Testing closely, we ship templates. Yet,but anything goes out of track...
                        </Typography>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box>
                  {/*------------------------ card 3 ---------------------*/}
                  <Paper
                    className="feature"
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
                    style={{ boxShadow: "5px 5px 23px 0px rgba(0,0,0,0.05)" }}
                  >
                    <Typography sx={{ textAlign: "center" }} variant="h3">
                      <img style={{ padding: 16, height: "100px", width: "100px" }} src={quality} alt="" />

                      <Box style={{ textAlign: "center" }}>
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>Great Quality template</p>
                        <Typography sx={{ px: 4, pb: 2 }} variant="body1">
                          We craft powerful templates to keep visitors engaged and maximize stor...
                        </Typography>
                      </Box>
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;
