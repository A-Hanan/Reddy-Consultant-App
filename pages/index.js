import styles from "../styles/homeStyles/Home.module.css";
import React from "react";
import Navbar from "../components/home/Navbar";
import HeroContainer from "../components/home/HeroContainer";
import TrendingCategories from "../components/home/TrendingCategories";
import TopRatedExperts from "../components/home/TopRatedExperts";
import LookingForMore from "../components/home/LookingForMore";
import GuideForBooking from "../components/home/GuideForBooking";
import Footer from "../components/home/Footer";
import Testimonial from "../components/home/Testimonial";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="home__page">
        <HeroContainer />
        <Testimonial />
        <TrendingCategories />
        {/* <TopRatedExperts /> */}

        <GuideForBooking />
        <LookingForMore />
        <Footer />
      </div>
    </div>
  );
};

export default home;
