import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
import Carousel from "react-multi-carousel";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CoinCarouselComponent = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={styles.ButtonGroup}>
        <CustomLeftArrow previous={previous} />
        <CustomRightArrow next={next} />
        {/* // remember to give it position:absolute */}
        {/* <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>asdsadas</div>
        <div onClick={() => next()} />
        <div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div> */}
      </div>
    );
  };

  const CustomLeftArrow = ({ previous }) => {
    return (
      <div onClick={() => previous()}>
        <div
          className={styles.circleWrapper}
          // onClick={() => {
          //   activeCarousel !== 1 && setActiveCarousel(activeCarousel - 1);
          // }}
        >
          <img src={`/images/carousel/left.svg`} alt="1.png" />
        </div>
      </div>
    );
  };

  const CustomRightArrow = ({ next }) => {
    return (
      <div onClick={() => next()}>
        <div className={styles.circleWrapper}>
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
      <img
        className={styles.coinBackground}
        src="/images/what-we-solve/carousel/coinBackground.svg"
        alt="thumbnail"
      />
      <Carousel
        rewind={true}
        infinite={true}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        // centerMode={true}
        // renderArrowsWhenDisabled
      >
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/coin1.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/coin2.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/coin3.svg" alt="thumbnail" />
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/what-we-solve/carousel/coin4.svg" alt="thumbnail" />
        </div>
      </Carousel>
    </div>
  );
};

export default CoinCarouselComponent;
