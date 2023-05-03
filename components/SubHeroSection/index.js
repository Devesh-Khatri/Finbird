import React from "react";
import styles from "./SubHero.module.scss";
const SubHeroSection = () => {
  return (
    <div className={styles.subHeroSection_Container}>
      <h2 className="heading text-align-center">The Carbon Lifecycle</h2>
      <p className="paragraph text-align-center">
        <em>
          {" "}
          “Carbon offsetting is an essential part of the global response to
          climate change. It allows individuals and businesses to take
          responsibility for their carbon emissions, support the development of
          renewable energy and other low-carbon projects, and help move us
          towards a more sustainable future for all.”{" "}
        </em>
      </p>
      <p className="paragraph text-align-center" style={{fontWeight: "400"}}>– United Nations Framework Convention on Climate Change (UNFCCC)</p>
    </div>
  );
};

export default SubHeroSection;
