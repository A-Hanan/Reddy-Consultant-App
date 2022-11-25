import styles from "../styles/homeStyles/Home.module.css";
import React from "react";
import Navbar from "../components/home/Navbar";
import HeroContainer from "../components/home/HeroContainer";
import TrendingCategories from "../components/home/TrendingCategories";
import TopRatedExperts from "../components/home/TopRatedExperts";
import LookingForMore from "../components/home/LookingForMore";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="home__page">
        <HeroContainer />
        <TrendingCategories />
        <TopRatedExperts />
        <LookingForMore />
      </div>
    </div>
  );
};

export default home;
