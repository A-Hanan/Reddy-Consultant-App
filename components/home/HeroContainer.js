import React, { useState, useEffect } from "react";
import styles from "../../styles/homeStyles/HeroSection.module.css";
import Image from "next/image";
import imageOne from "../../utils/images/vector2.png";
import imageTwo from "../../utils/images/vector 5.jpg";
import imageThree from "../../utils/images/vector1.jpg";

const HeroContainer = () => {
  const [subheaderText, setSubheaderText] = useState(
    "15 thousand+ users served"
  );
  const [subheaderTextCount, setCount] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      console.log("runnng");
      if (subheaderTextCount == 1) {
        setCount(2);
        setSubheaderText("2000+ Experts");
      }
      if (subheaderTextCount == 2) {
        setCount(3);
        setSubheaderText("6000+ User Reviews");
      }
      if (subheaderTextCount == 3) {
        setCount(1);
        setSubheaderText("15 thousand+ Users Served");
      }
    }, 5000);
  }, [subheaderTextCount]);
  return (
    <div className={styles.hero__container__wrapper}>
      <div className={styles.dark__layer}>
        <h1>
          Find and Book <span>best experts</span> of every field
        </h1>
        <div className={styles.search__input__wrapper}>
          <input
            placeholder="Search for experts in different fields by name or category"
            type="text"
          />
          <button>Search</button>
        </div>
        <h3>{subheaderText}</h3>
      </div>
      <div className={styles.image__two}>
        <Image
          src="/images/vector 5.jpg"
          alt="Picture of the author"
          width={300}
          height={320}
        />
      </div>
      <div className={styles.image__three}>
        <Image
          src="/images/vector2.png"
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div className={styles.image__one}>
        <Image
          src="/images/vector1.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HeroContainer;
/**
 * <div className={styles.image__wrapper}>
        <Image
          src={heroImage}
          alt="Picture of the author"
          width="100%"
          height={500}
        />
      </div>
 */
