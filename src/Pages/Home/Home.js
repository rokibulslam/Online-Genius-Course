import React from "react";
import Countup from "../Coutup/Countup";
import Banner from "./Banner/Banner";
import Cardd from "./Card/Cardd";
import CourseDetails from "./CourseDetails/CourseDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cardd></Cardd>
      <CourseDetails></CourseDetails>
      <Countup></Countup>
    </div>
  );
};

export default Home;
