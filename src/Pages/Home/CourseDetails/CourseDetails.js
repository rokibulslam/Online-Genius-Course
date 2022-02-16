import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CourseDetails.css";

const CourseDetails = () => {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ flexGrow: 1, background: "#1C1D1F", p:5, color:'white' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={8}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                React Native - The Practical Guide
              </Typography>{" "}
              <Typography variant="body1" sx={{p:3}}>
                React Native - The Practical Guide Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push
                Notifications, Hooks, Redux
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <Typography>This is Form</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CourseDetails;
