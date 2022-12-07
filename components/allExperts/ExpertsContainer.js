import React, { useState, useEffect } from "react";
import styles from "../../styles/allExpertsStyles/ExpertsContainer.module.css";
import ExpertBox from "../home/ExpertBox";
import api from "../../utils/api";
const ExpertsContainer = () => {
  const [allExperts, setAllExperts] = useState();
  useEffect(() => {
    api
      .get("/experts")
      .then((res) => {
        console.log("response from experts", res.data);
        setAllExperts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
        {allExperts?.length > 0 ? (
          allExperts?.map((expert) => <ExpertBox />)
        ) : (
          <h1>No Experts Found.</h1>
        )}
      </div>
    </div>
  );
};

export default ExpertsContainer;
