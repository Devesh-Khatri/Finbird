import React from "react";
import CarbonExplore from "../components/CarbonExplore";
import CardStack from "../components/CardStack";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/Footer";
import HeroSection from "../components/HeroSection";
import WhatWeSolve from "../components/WhatWeSolve";
import WorldFirstCarbonExchange from "../components/WorldFirstCarbonExchange";
import IndexSubFooter from "../components/indexSubFooter";
import NavBar from "../components/navBar";

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
      <WorldFirstCarbonExchange />
      {/* <SubHeroSection /> */}
      {/* <CarbonCycleTimeline /> */}
      {/* <FormComponent /> */}
      {/* <SubFooter /> */}
      <CarbonExplore />
      <CarouselComponent />
      <CardStack />
      <IndexSubFooter />
      <FooterComponent />
    </>
  );
};

export default index;
