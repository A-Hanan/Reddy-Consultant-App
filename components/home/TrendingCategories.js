import React from "react";
import styles from "../../styles/homeStyles/TrendingCategories.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const TrendingCategories = () => {
  return (
    <>
      <div className={styles.tc__conatainer}>
        <h1>Trending Categories</h1>
        <div className={styles.categoriesGrid}>
          <div>
            <span>
              <FontAwesomeIcon icon={faStethoscope} />
            </span>
            <p>Health & fitness</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </span>
            <p>Law & Order</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faDollarSign} />{" "}
            </span>
            <p>Business and Finances</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <p>Information Technology</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
            </span>
            <p>Architecture and Engineering</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faPersonRunning} />
            </span>
            <p>Sports and Games</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faPalette} />
            </span>
            <p>Arts and Culture</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faBookOpen} />
            </span>
            <p>Education</p>
          </div>
        </div>
        <button>Explore more...</button>
      </div>
    </>
  );
};

export default TrendingCategories;
