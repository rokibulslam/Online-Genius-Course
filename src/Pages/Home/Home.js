import React from "react";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import Banner from "./Banner/Banner";
import ProductCard from "../Products/ProductCard/ProductCard";

import CourseDetails from "./CourseDetails/CourseDetails";
import HomePageProduct from "../Products/HomePageProduct/HomePageProduct";
import Pricing from "./Pricing/Pricing";

import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageProduct></HomePageProduct>
      <Pricing></Pricing>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
