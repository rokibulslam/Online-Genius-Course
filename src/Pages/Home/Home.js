import React from "react";

import Banner from "./Banner/Banner";
import ProductCard from "../Products/ProductCard/ProductCard";

import CourseDetails from "./CourseDetails/CourseDetails";
import HomePageProduct from "../Products/HomePageProduct/HomePageProduct";
import Pricing from "./Pricing/Pricing";

import Reviews from "./Reviews/Reviews";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageProduct></HomePageProduct>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
