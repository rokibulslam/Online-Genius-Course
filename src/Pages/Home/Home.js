import React from "react";
import Banner from "./Banner/Banner";
import Cardd from "./Card/Cardd";
import CourseDetails from "./CourseDetails/CourseDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cardd></Cardd>
      <CourseDetails></CourseDetails>
    </div>
  );
};

export default Home;
