import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
import useBreakpoint from "use-breakpoint";

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BREAKPOINTS = { mobile: 1000, tablet: 1024, desktop: 1280 };

const CarouselComponent = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  const carouselData = [
    {
      metaData: {
        title: "Renewable Energy",
        desc: "BioGas, Hydro Power, Solar, BioMass",
      },
      img: "/images/carousel/1.png",
    },
    {
      metaData: {
        title: "Forestry and Land Use",
        desc: "Urban Forestry, Agro Forestry, Soil Carbon",
      },
      img: "/images/carousel/2.png",
    },
    {
      metaData: {
        title: "Household and Community",
        desc: "Clean Water, Clean Cook Stove",
      },
      img: "/images/carousel/3.png",
    },
    {
      metaData: {
        title: "Chemical/Industrial",
        desc: "Carbon Capture and Storage",
      },
      img: "/images/carousel/4.png",
    },
    {
      metaData: {
        title: "Energy Efficiency",
        desc: "Fuel Switching, Industrial Energy",
      },
      img: "/images/carousel/5.png",
    },
    {
      metaData: {
        title: "Waste Disposal",
        desc: "Waste Gas Recovery, Waste Gas",
      },
      img: "/images/carousel/6.png",
    },
    {
      metaData: {
        title: "Agriculture",
        desc: "Sustainable Agriculture, Livestock",
      },
      img: "/images/carousel/7.png",
    },
    {
      metaData: {
        title: "Transport",
        desc: "EV, Bio Fuel, Nitrogen Management",
      },
      img: "/images/carousel/8.png",
    },
  ];

  const [activeCarousel, setActiveCarousel] = useState(1);

  const CustomLeftArrow = ({ onClick }) => {
    useEffect(() => {
      console.log(activeCarousel, "activeCarousel");
    }, [activeCarousel]);

    return (
      <div className={styles.lefttArrow} onClick={() => onClick()}>
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
      <div className={styles.rightArrow} onClick={() => onClick()}>
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
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 964, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className="sub-heading text-align-center">Join Our Community</div>
      <div className={styles.light_paragraph}>
        Make money while combatting climate change - become a carbon developer
        with us!
      </div>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        renderButtonGroupOutside={true}
        arrows={true}
        // centerMode={true}
        // showDots
        renderArrowsWhenDisabled
      >
        {carouselData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                height: "300px",
                // backgroundColor: "#CBE2F9",
                // width: activeCarousel === index + 1 ? "500px" : "150px",
                margin: "10px 10px 100px 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              {activeCarousel === index + 1 && (
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#CBE2F9",
                    height: "calc(100% - 50px)",
                    padding: "20px",
                  }}
                >
                  <div className={styles.whiteCapsule}>
                    <div className={styles.blackDot}></div>
                    <div className={styles.blackDotText}>
                      {item.metaData.title}
                    </div>
                  </div>
                  <div className={styles.leftText}>{item.metaData.desc}</div>
                  <div className={styles.learnMore}>Learn More</div>
                </div>
              )}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {activeCarousel !== index + 1 && breakpoint !== "mobile" ? (
                  <>
                    <img
                      style={{
                        flex: 1,
                        margin: "0px 20px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                      src={`/images/carousel/${index + 1}.png`}
                      alt="1.png"
                    />
                    <img
                      style={{
                        flex: 1,
                        margin: "0px 20px",
                        height: "250px",
                        borderRadius: "10px",
                      }}
                      src={`/images/carousel/${index + 2}.png`}
                      alt="1.png"
                    />
                  </>
                ) : (
                  <img
                    style={{
                      flex: 1,
                      height: "250px",
                      borderRadius: "0px 10px 10px 0px",
                      marginRight: "20px",
                    }}
                    src={`/images/carousel/${index + 1}.png`}
                    alt="1.png"
                  />
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
