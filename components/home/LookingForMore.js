import React from "react";
import styles from "../../styles/homeStyles/LookingForMore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const LookingForMore = () => {
  return (
    <div className={styles.looking__for__more__wrapper}>
      <div>
        <h1>
          <FontAwesomeIcon icon={faMessage} />
          Contact Us
        </h1>
        <p>
          Contact us if you are facing any problem related to site working, any
          issue with specific expert or want some extra feature in our site.
          Your problem will be resolved and effort will be appreciated.{" "}
        </p>
      </div>
      <div>
        <div className={styles.contact__us__form}>
          <div>
            <label>Enter your name</label>
            <input type="text" placeholder="e.g John Doe" />
          </div>
          <div>
            <label> Enter your email</label>
            <input type="text" placeholder="e.g abc@gmail.com" />
          </div>
          <div>
            <label>Write your message here</label>
            <textarea placeholder="here..." />
          </div>
          <button>Submit Message</button>
        </div>
      </div>
    </div>
  );
};

export default LookingForMore;
