import React from "react";
import Navbar from "../components/home/Navbar";
import ExpertsCategoriesBar from "../components/allExperts/ExpertsCategoriesBar";
import ExpertsContainer from "../components/allExperts/ExpertsContainer";

const experts = () => {
  return (
    <div>
      <Navbar />
      <div className="all__experts__page">
        <div className="wrapper">
          <ExpertsCategoriesBar />
          <ExpertsContainer />
        </div>
      </div>
    </div>
  );
};

export default experts;
