import React from "react";
import styles from "../../styles/homeStyles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav__wrapper}>
      <div>
        <h1 className={styles.nav__logo__text}>
          <span className={styles.yellowText}>Consult</span>
          <span className={styles.blueText}>Pro</span>
        </h1>
      </div>
      <div className={styles.nav__buttons__wrapper}>
        <button className={styles.buttonOne}>Login/Signup</button>
        <button className={styles.buttonTwo}>Join as Expert</button>
      </div>
    </div>
  );
};

export default Navbar;
