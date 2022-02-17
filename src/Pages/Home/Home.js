import React from "react";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import Banner from "./Banner/Banner";
import Cardd from "./Cardd/Cardd";

import CourseDetails from "./CourseDetails/CourseDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cardd></Cardd>
      <AddProduct></AddProduct>
    </div>
  );
};

export default Home;
