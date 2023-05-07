import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 1000, tablet: 1024, desktop: 1280 };

const CarbonExplore = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(4);

  const carouselData = [
    {
      heading: (
        <p>
          Envira Amazonia, <br /> Brazil
        </p>
      ),
    },
    {
      heading: "Territorio Indigena Originario Campesino, Bolivia",
    },
    {
      heading: (
        <p>
          Pacajai <br /> Redd+, <br /> Brazil
        </p>
      ),
    },
    {
      heading: "Izmir Landfill Gas Capture & Utilization Project, Turkey",
    },
  ];

  const carouselImageData = [
    {
      imgSource: "/images/carbon-explore/1.png",
      key: 4,
    },
    {
      imgSource: "/images/carbon-explore/2.png",
      key: 5,
    },
    {
      imgSource: "/images/carbon-explore/3.png",
      key: 6,
    },
    {
      imgSource: "/images/carbon-explore/4.png",
      key: 7,
    },
  ];

  console.log(carouselRef, "carouselRef");
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  const ButtonGroup = ({ data }) => {
    return (
      <div className={styles.leftContainer}>
        <div className={styles.containerHeading}>
          {carouselData?.[currentSlide - 4]?.heading}
        </div>
        <div className={styles.veraa}>Verra</div>
        <div className={styles.title}>VCS Methodology: AMS-ID</div>
        <div className={styles.values}>$4.4 (5%)</div>
        <div className={styles.ButtonGroup}>
          <CustomLeftArrow />
          <CustomRightArrow />
        </div>
      </div>
    );
  };

  const CustomLeftArrow = () => {
    return (
      <div onClick={() => carouselRef.current.previous()}>
        <div className={styles.circleWrapper}>
          <img src={`/images/carousel/left.svg`} alt="1.png" />
        </div>
      </div>
    );
  };

  const CustomRightArrow = ({ next }) => {
    return (
      <div onClick={() => carouselRef.current.next()}>
        <div className={styles.circleWrapper}>
          <img src={`/images/carousel/right.svg`} alt="1.png" />
        </div>
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 964, min: 0 },
      items: 2,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className="sub-heading text-align-center">Carbon Explorer</div>
      <div className={styles.light_paragraph}>
        Buy and discover new carbon credits on our marketplace for real-time
        settlement.
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.carouselContainer}>
          <ButtonGroup data={carouselData[currentSlide]} />
          <img
              className={styles.backgroundCircle}
              src='/images/carbon-explore/background.svg'
              alt="1.png"
            />
          <div
            className={styles.CarouselSlide}
          >

            <Carousel
              afterChange={(previousSlide, { currentSlide, onMove }) => {
                setCurrentSlide(currentSlide);
              }}
              focusOnSelect={true}
              // centerMode={true}
              ref={carouselRef}
              rewind={true}
              infinite={true}
              responsive={responsive}
              arrows={false}
              renderButtonGroupOutside={true}
              // customButtonGroup={<ButtonGroup />}
              // partialVisible={true}
            >
              {carouselImageData.map((item) => {
                console.log(item, "itemitem");
                return (
                  <div key={item?.key} className={styles.imageContainer}>
                    <img
                      className={
                        item.key == currentSlide
                          ? styles.activeImage
                          : styles.inActiveImage
                      }
                      src={item?.imgSource}
                      alt="1.png"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonExplore;

// Render ButtonGroup component wherever you want
