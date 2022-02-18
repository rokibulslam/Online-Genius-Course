import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Workflow = () => {
  return (
    <React.Fragment>
      <Container sx={{ padding: "100px 0" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={4} md={4}>
              <Card>
                <CardActionArea sx={{ padding: "40px 0", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "64px", height: "64px", margin: "0 auto", background: "#fea970", padding: "15px", borderRadius: "50%" }}
                    image="https://i.ibb.co/12HNbYC/001-data-security.png
"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                      Security Assurance
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Our template architecture is designed for maximize security and prevent malware, Dos Attack other.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card>
                <CardActionArea sx={{ padding: "40px 0", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "64px", height: "64px", margin: "0 auto", background: "#f1eaf5", padding: "15px", borderRadius: "50%" }}
                    image="https://i.ibb.co/mJsPBpy/002-support.png
                   
"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                      Best Customer Support
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Testing closely, we ship templates. Yet,but anything goes out of track, Support team is there to get it
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Card>
                <CardActionArea sx={{ padding: "40px 0", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "64px", height: "64px", margin: "0 auto", background: "lightgrey", padding: "15px", borderRadius: "50%" }}
                    image=" https://i.ibb.co/gVWbsG1/003-medal.png
"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                      Great Quality template
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      We craft powerful templates to keep visitors engaged and maximize store sales extensively.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Workflow;
