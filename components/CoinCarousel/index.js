import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CoinCarouselComponent = () => {
  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          marginTop: "400px",
          left: "20%",
        }}
        onClick={() => onClick()}
      >
        <div
          className={styles.circleWrapper}
          onClick={() => {
            activeCarousel !== 1 && setActiveCarousel(activeCarousel - 1);
          }}
        >
          <img src={`/images/carousel/left.svg`} alt="1.png" />
        </div>
      </div>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          position: "absolute",
          right: "20%",
          marginTop: "300px",
        }}
        onClick={() => onClick()}
      >
        <div
          className={styles.circleWrapper}
          onClick={() => {
            activeCarousel < 8 && setActiveCarousel(activeCarousel + 1);
          }}
        >
          <img src={`/images/carousel/right.svg`} alt="1.png" />
        </div>
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.wrapper}>
      <Carousel
        responsive={responsive}
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        renderButtonGroupOutside={true}
        arrows={true}
        // centerMode={true}
        // showDots
        // renderArrowsWhenDisabled
      >
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/1.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/2.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/3.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/4.svg" alt="thumbnail" />
        </div>

      </Carousel>
    </div>
  );
};

export default CoinCarouselComponent;
