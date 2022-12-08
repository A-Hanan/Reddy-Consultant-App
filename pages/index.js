import styles from "../styles/homeStyles/Home.module.css";
import React, { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import HeroContainer from "../components/home/HeroContainer";
import TrendingCategories from "../components/home/TrendingCategories";
import TopRatedExperts from "../components/home/TopRatedExperts";
import LookingForMore from "../components/home/LookingForMore";
import GuideForBooking from "../components/home/GuideForBooking";
import Footer from "../components/home/Footer";
import Testimonial from "../components/home/Testimonial";
import { useStateValue } from "../StateProvider";

const home = () => {
  const [{ activeCategory }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: "SET_SEARCH_EXPERT_TEXT",
      searchExpertText: "",
    });
  }, []);
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
