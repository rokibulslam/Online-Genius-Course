import { Container, Grid, Typography, TextField, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import MuiButton from "../../../StyledComponent/MuiButton";
import "./CourseDetails.css";

const CourseDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ flexGrow: 1, background: "#1C1D1F", p: 5, color: "white" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={8}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                React Native - The Practical Guide
              </Typography>{" "}
              <Typography variant="body1" sx={{ p: 3 }}>
                React Native - The Practical Guide Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push
                Notifications, Hooks, Redux
              </Typography>
              <CardMedia component="img" sx={{ width: "75%", mx: "auto" }} image="https://i.ibb.co/FnKGrMg/1-5.png" alt="Paella dish" />
            </Grid>
            <Grid item xs={12} sm={12} lg={4} sx={{ background: "white", boxShadow: "2px 3px 5px red", py: 3 }}>
              <form onSubmit={handleSubmit} action="#">
                <TextField sx={{ width: "90%" }} id="standard-basic" label="Course name" variant="standard" />{" "}
                <TextField sx={{ width: "90%" }} id="standard-basic" label="Your email" variant="standard" />{" "}
                <TextField sx={{ width: "90%" }} id="standard-basic" label="Course id" variant="standard" />{" "}
                <TextField sx={{ width: "90%" }} id="standard-basic" label="Description" variant="standard" />{" "}
                <TextField sx={{ width: "90%" }} id="standard-basic" label="How long do you want to buy?" variant="standard" />
                <MuiButton sx={{ color: "white", my: 2 }}>Purchase Now</MuiButton>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default CourseDetails;
