import React, { useState, useEffect } from "react";
import styles from "../../styles/allExpertsStyles/ExpertsCategoriesBar.module.css";

const ExpertsCategoriesBar = () => {
  const [activeCategory, setActiveCategory] = useState("category1");
  return (
    <div className={styles.category__bar__wrapper}>
      <div
        onClick={() => setActiveCategory("category1")}
        className={
          activeCategory == "category1"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>All Experts</p>
      </div>
      <h4>Categories</h4>
      <div
        onClick={() => setActiveCategory("Consulting")}
        className={
          activeCategory == "Consulting"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Consulting</p>
      </div>
      <div
        onClick={() => setActiveCategory("VisaAndGreenCard")}
        className={
          activeCategory == "VisaAndGreenCard"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>VisaAndGreenCardr</p>
      </div>
      <div
        onClick={() => setActiveCategory("category4")}
        className={
          activeCategory == "category4"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Information Technology</p>
      </div>
      <div
        onClick={() => setActiveCategory("category5")}
        className={
          activeCategory == "category5"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Architecture and Engineering</p>
      </div>
      <div
        onClick={() => setActiveCategory("category6")}
        className={
          activeCategory == "category6"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Sports and Games</p>
      </div>
      <div
        onClick={() => setActiveCategory("category7")}
        className={
          activeCategory == "category7"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Arts and Culture</p>
      </div>
      <div
        onClick={() => setActiveCategory("category8")}
        className={
          activeCategory == "category8"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Education</p>
      </div>
    </div>
  );
};

export default ExpertsCategoriesBar;
