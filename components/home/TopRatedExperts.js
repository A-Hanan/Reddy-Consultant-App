import React from "react";
import styles from "../../styles/homeStyles/TopRatedExperts.module.css";
import ExpertBox from "./ExpertBox";

const TopRatedExperts = () => {
  return (
    <div className={styles.top__rated__experts__wrapper}>
      <header>
        <h1>Top Rated Experts</h1>
        <p>Experts with exceptional services & client satisfaction</p>
      </header>
      <div className={styles.expert__boxes__wrapper}>
        <ExpertBox />
        <ExpertBox />
      </div>
    </div>
  );
};

export default TopRatedExperts;
