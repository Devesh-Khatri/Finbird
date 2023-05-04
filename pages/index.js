import React from "react";
import NavBar from "../components/navBar";
import HeroSection from "../components/HeroSection";
import SubHeroSection from "../components/SubHeroSection";
import CarbonCycleTimeline from "../components/carbonCycleTimeline";
import FormComponent from "../components/formComponent";
import SubFooter from "../components/subFooter";
import FooterComponent from "../components/Footer";
import CarouselComponent from "../components/CarouselComponent";
import WhatWeSolve from "../components/WhatWeSolve";

const index = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        root
        heading="Carbon Credit Exchange 🌍"
        subHeading="A way to bring carbon emissions down and enabling green economy by putting a price on carbon & encouraging businesses to take action to reduce impact on the environment."
      />
      <WhatWeSolve />
      {/* <SubHeroSection /> */}
      {/* <CarbonCycleTimeline /> */}
      {/* <FormComponent /> */}
      {/* <SubFooter /> */}
      <CarouselComponent /> 
      <FooterComponent />
    </>
  );
};

export default index;
