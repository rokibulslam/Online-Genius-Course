import React from "react";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Cardd from "./Card/Cardd";
import CourseDetails from "./CourseDetails/CourseDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cardd></Cardd>
      <CourseDetails></CourseDetails>
      <Footer></Footer>
    </div>
  );
};

export default Home;
