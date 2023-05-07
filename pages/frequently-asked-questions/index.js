import React from "react";
import FooterComponent from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/navBar";
import SubFooter from "../../components/subFooter";

const index = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        heading="Frequently Asked Questions"
        subHeading="Your most common questions answered, in the most comprehensive manner."
      />
      <SubFooter />
      <FooterComponent />
    </>
  );
};

export default index;
