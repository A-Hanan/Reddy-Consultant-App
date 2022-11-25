import React from "react";
import styles from "../../styles/homeStyles/LookingForMore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessageMiddle } from "@fortawesome/free-solid-svg-icons";

const LookingForMore = () => {
  return (
    <div className={styles.looking__for__more__wrapper}>
      <h1>Looking for more?</h1>
      <span></span>
      <button>
        Contact Us <FontAwesomeIcon icon={faMessageMiddle} />
      </button>
    </div>
  );
};

export default LookingForMore;
