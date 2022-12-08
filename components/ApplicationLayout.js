// import Navbar from "../components/home/Navbar";
import ExpertsCategoriesBar from "./allExperts/ExpertsCategoriesBar";
import React, { useState, useEffect } from "react";
import Navbar from "./home/Navbar";

export default function ApplicationLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="all__experts__page">
        <div className="wrapper">
          <ExpertsCategoriesBar />
          {children}
        </div>
      </div>
    </div>
  );
}
