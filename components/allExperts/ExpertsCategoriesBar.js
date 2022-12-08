import React, { useState, useEffect } from "react";
import styles from "../../styles/allExpertsStyles/ExpertsCategoriesBar.module.css";
import { useStateValue } from "../../StateProvider";
import { useRouter } from "next/router";
const ExpertsCategoriesBar = () => {
  const router = useRouter();
  const [{ activeCategory }, dispatch] = useStateValue();

  return (
    <div className={styles.category__bar__wrapper}>
      <div
        onClick={() => {
          dispatch({
            type: "SET_ACTIVE_CATEGORY",
            activeCategory: "All",
          });
          dispatch({
            type: "SET_SEARCH_EXPERT_TEXT",
            searchExpertText: "",
          });
          router.push("/experts");
        }}
        className={
          activeCategory == "All"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>All Experts</p>
      </div>
      <h4>Categories</h4>
      <div
        onClick={() => {
          dispatch({
            type: "SET_ACTIVE_CATEGORY",
            activeCategory: "Consulting",
          });
          dispatch({
            type: "SET_SEARCH_EXPERT_TEXT",
            searchExpertText: "",
          });
          router.push("/experts");
        }}
        className={
          activeCategory == "Consulting"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Consulting</p>
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "SET_ACTIVE_CATEGORY",
            activeCategory: "O1 Visa And EB GreenCard",
          });
          dispatch({
            type: "SET_SEARCH_EXPERT_TEXT",
            searchExpertText: "",
          });
        }}
        className={
          activeCategory == "O1 Visa And EB GreenCard"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>O1 Visa And EB GreenCard</p>
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "SET_ACTIVE_CATEGORY",
            activeCategory: "Resumes And Interviews",
          });
          dispatch({
            type: "SET_SEARCH_EXPERT_TEXT",
            searchExpertText: "",
          });
          router.push("/experts");
        }}
        className={
          activeCategory == "Resumes And Interviews"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Resumes And Interviews</p>
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "SET_ACTIVE_CATEGORY",
            activeCategory: "Speciality Topics",
          });
          dispatch({
            type: "SET_SEARCH_EXPERT_TEXT",
            searchExpertText: "",
          });
          router.push("/experts");
        }}
        className={
          activeCategory == "Speciality Topics"
            ? styles.category__menu__active
            : styles.category__menu
        }
      >
        <p>Speciality Topics</p>
      </div>
    </div>
  );
};

export default ExpertsCategoriesBar;
