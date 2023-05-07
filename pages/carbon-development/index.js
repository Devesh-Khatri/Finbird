import React from "react";
import NavBar from "../../components/navBar";
import HeroSection from "../../components/HeroSection";
import SubHeroSection from "../../components/SubHeroSection";
import CarbonCycleTimeline from "../../components/carbonCycleTimeline";
import FormComponent from "../../components/formComponent";
import SubFooter from "../../components/subFooter";
import FooterComponent from "../../components/Footer";
import CarouselComponent from "../../components/CarouselComponent";

const index = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        heading="Become A Carbon developer"
        subHeading="Lorem Ipsum"
      />
      <SubHeroSection />
      <CarbonCycleTimeline />
      <FormComponent />
      <SubFooter />
      <FooterComponent />
    </>
  );
};

export default index;
