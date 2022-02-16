import React from "react";
import Countup from "./Coutup/Countup";
import Banner from "./Banner/Banner";
import Cardd from "./Card/Cardd";
import CourseDetails from "./CourseDetails/CourseDetails";
import Features from "./Features/Features";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cardd></Cardd>
      <CourseDetails></CourseDetails>
      <Countup></Countup>
      <Features></Features>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
