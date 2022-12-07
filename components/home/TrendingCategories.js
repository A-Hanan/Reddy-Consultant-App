import React from "react";
import styles from "../../styles/homeStyles/TrendingCategories.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Link from "next/link";

const TrendingCategories = () => {
  return (
    <>
      <div className={styles.tc__conatainer}>
        <h1>Trending Categories</h1>
        <div className={styles.categoriesGrid}>
          <div>
            <span>
              <FontAwesomeIcon icon={faPassport} />
            </span>
            <p>O1 Visa and EB Green Card</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <p>Consulting</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faFileLines} />{" "}
            </span>
            <p>Resumes and Interviews</p>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <p>Speciality Topics</p>
          </div>
        </div>
        <button>
          <Link href="/experts">Explore more...</Link>
        </button>
      </div>
    </>
  );
};

export default TrendingCategories;
