import React from "react";
import styles from "../../styles/allExpertsStyles/ExpertsContainer.module.css";
import ExpertBox from "../home/ExpertBox";

const ExpertsContainer = () => {
  return (
    <div className={styles.experts__container}>
      <div className={styles.search__input__wrapper}>
        <input
          placeholder="Search for experts in different fields by name or category"
          type="text"
        />
        <button>Search</button>
      </div>
      <h1>All Experts</h1>
      <div className={styles.all__experts__wrapper}>
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
        <ExpertBox />
      </div>
    </div>
  );
};

export default ExpertsContainer;
