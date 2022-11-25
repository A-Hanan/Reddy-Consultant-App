import React from "react";
import styles from "../../styles/homeStyles/TopRatedExperts.module.css";
import Image from "next/image";
import manFace from "../../utils/images/manface.jpg";

const ExpertBox = () => {
  console.log("image", manFace);
  return (
    <div className={styles.ExpertBox}>
      <div className={styles.image__box}>
        <Image
          className={styles.image__of__expert}
          src={manFace}
          alt="face"
          width="auto"
          height={150}
        />
      </div>
      <h1>Mr. Ranchodas Chanchad</h1>
      <p>x years experience</p>
      <p>Speciality</p>
      <div className={styles.footer__of__expert__box}>
        <div>
          <h6>76</h6>
          <p>Client Reviews</p>
        </div>
        <div>
          <h6>80%</h6>
          <p>satisfaction rate</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertBox;
