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
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PhoneScreen from "../../utils/images/PhoneScreen.jpg";
import Link from "next/link";

const TrendingCategories = () => {
  return (
    <>
      <div className={styles.tc__conatainer}>
        <div className={styles.user__options__wrapper}>
          <div>
            <div className={styles.options__box__one}>
              <span>
                <FontAwesomeIcon icon={faVideo} />
              </span>
            </div>
            <div>
              <h1> Consultant Pro</h1>
              <p> Video Consultations with Top Experts in USD 20 </p>
              <button className={styles.user__option__button__one}>
                Book Appointment
              </button>
            </div>
          </div>
          <div>
            <div className={styles.options__box__two}>
              <span>
                <FontAwesomeIcon icon={faPerson} />
              </span>
            </div>
            <div>
              <h1> Experts Online Now</h1>
              <p> Instant Video Consultation with Top Experts </p>
              <button className={styles.user__option__button__two}>
                Start Consuting
              </button>
            </div>
          </div>
        </div>
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
        <button>
          <Link href="/experts">Explore more...</Link>
        </button>
      </div>
    </>
  );
};

export default TrendingCategories;
