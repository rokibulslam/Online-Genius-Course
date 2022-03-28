import React from "react";
import Count from "./CountUp/Count";
import Banner from "./Banner/Banner";
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
      <Features></Features>
      <HomePageProduct></HomePageProduct>
      <Count></Count>
      <Feedback></Feedback>
      <Pricing></Pricing>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
