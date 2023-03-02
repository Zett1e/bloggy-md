import Image from "next/image";
import React from "react";
import Card from "../public/images/Wallpaper2.jpg";
import styles from "../styles/featureCard.module.css";
const FeatureCard = () => {
  return (
    <div className="">
      <div className={styles.cardimg}>
        <h1 className="absolute z-10 text-white text-xl bottom-5 left-2">
          Black Desert: New Class Maegu released
        </h1>
        <Image src={Card} alt="Card" />
      </div>
    </div>
  );
};

export default FeatureCard;
