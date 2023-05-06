import React from "react";
import styles from "./HeroSection.module.scss";
import Button from "../Button";
import Marquee from "react-easy-marquee";

const HeroSection = ({ heading, subHeading, root }) => {
  const arr = ["SNBT", "SRET", "SEBT", "SAOT", "SPRT", "SICT", "SCET"];
  function createCopiesAndFlatten(arr) {
    let flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 3; j++) {
        flatArr.push(arr[i]);
      }
    }
    return flatArr;
  }
  const flatArr = createCopiesAndFlatten(arr);

  return (
    <>
      <div className={styles.hero_section_container}>
        <div className={styles.left_container}>
          <h1 className={styles.hero_title}>{heading}</h1>
          <p className={styles.hero_subTitle}>{subHeading}</p>

          {root && <Button text="Register Interest" />}
        </div>
        <div className={styles.right_container}>
          <img
            src={root ? "/images/index.svg" : "/images/carbon-development.png"}
            className={root ? styles.root_hero_image : styles.hero_image}
            alt="Mayur"
          />
        </div>
      </div>
      {root && <Marquee duration={100000} background="#2F2F2F" height="4rem">
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SNBT</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SRET</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SEBT</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SAOT</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SPRT</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SICT</div>
        <div className={styles.dotWrapper}><span className={styles.dot}></span></div>
        <div className={styles.marqueeText}>SCET</div>
        </Marquee>}
    </>
  );
};

export default HeroSection;
