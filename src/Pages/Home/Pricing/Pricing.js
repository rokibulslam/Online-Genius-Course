import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Monthly from "./Monthly/Monthly";
import Yearly from "./Yearly/Yearly";
import "./Pricing.css";

const Pricing = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <React.Fragment sx={{ my: 5, py: 5 }}>
      <Box>
        <Box sx={{ textAlign: "center", pb: 5 }}>
          <h2>Our Pricing Plan</h2>
          <Typography variant="body1">
            Build and Earn with your online store with lots of cool and exclusive <br /> features bundled with online genius course.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", pb: 5, mb: 4 }}>
          <button autoFocus onClick={() => toggleTab(1)} className="button1">
            Monthly Plan
          </button>

          <button onClick={() => toggleTab(2)} className="button2">
            Yearly Plan
          </button>
        </Box>

        <Container sx={{ mx: "auto" }}>
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Monthly />
          </div>
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <Yearly />
          </div>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Pricing;
