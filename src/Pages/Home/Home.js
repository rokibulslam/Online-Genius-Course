import React from "react";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import Banner from "./Banner/Banner";
import ProductCard from "../Products/ProductCard/ProductCard";

import CourseDetails from "./CourseDetails/CourseDetails";
import HomePageProduct from "../Products/HomePageProduct/HomePageProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomePageProduct></HomePageProduct>
      <AddProduct></AddProduct>
    </div>
  );
};

export default Home;
