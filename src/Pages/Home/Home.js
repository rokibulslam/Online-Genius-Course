import React from "react";
import Countup from "./Coutup/Countup";
import Banner from "./Banner/Banner";
import ProductCard from "../Products/ProductCard/ProductCard";

import CourseDetails from "./CourseDetails/CourseDetails";
import Features from "./Features/Features";
import Feedback from "../Feedback/Feedback";
import HomePageProduct from "../Products/HomePageProduct/HomePageProduct";
import Pricing from "./Pricing/Pricing";

import Reviews from "./Reviews/Reviews";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Cardd></Cardd> */}
      <CourseDetails></CourseDetails>
      <Countup></Countup>
      <Features></Features>
      <Feedback></Feedback>
      <HomePageProduct></HomePageProduct>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
