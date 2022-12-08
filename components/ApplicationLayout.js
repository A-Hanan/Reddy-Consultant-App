// import Navbar from "../components/home/Navbar";
import ExpertsCategoriesBar from "./allExperts/ExpertsCategoriesBar";
import React, { useState, useEffect } from "react";
import Navbar from "./home/Navbar";
import { useStateValue } from "../StateProvider";

export default function ApplicationLayout({ children }) {
  const [{ activeCategory }, dispatch] = useStateValue();
  useEffect(() => {
    let User = JSON.parse(localStorage?.getItem("consult_pro_user"));
    dispatch({
      type: "SET_USER",
      user: User ? User : null,
    });
  }, []);
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
