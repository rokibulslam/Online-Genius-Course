import React from "react";
import Banner from "./Banner/Banner";
import Pricing from "./Pricing/Pricing";
import Workflow from "./Workflow/Workflow";

const Home = () => {
  return (
    <div>
      <Banner />
      <Workflow />
      <Pricing />
    </div>
  );
};

export default Home;
