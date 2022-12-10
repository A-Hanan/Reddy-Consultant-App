import React from "react";
import styles from "../../styles/allExpertsStyles/ExpertBox.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const ExpertBox = ({ expert }) => {
  const router = useRouter();
  // console.log("image", manFace);
  return (
    <div className={styles.ExpertBox}>
      <div className={styles.image__box}>
        {expert?.profile ? (
          <Image
            className={styles.image__of__expert}
            src={expert?.profile}
            alt="face"
            width={150}
            height={150}
          />
        ) : (
          <h5>{expert?.name?.at(0)}</h5>
        )}
      </div>
      <span>
        <Image src="/images/linkedInLogo.png" width={20} height={20} />
      </span>
      <h1>{expert?.name}</h1>

      <p>${expert?.minFee}/min</p>
      <p>{expert?.category}</p>
      <Link href={"/book-appointment/" + expert?._id}>
        <button
        // onClick={() => router.push("/book-appointment/" + expert?._id)}
        >
          Book Now
        </button>
      </Link>
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
