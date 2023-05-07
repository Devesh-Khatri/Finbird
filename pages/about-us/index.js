import React from "react";
import FooterComponent from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/navBar";
import SubFooter from "../../components/subFooter";
import styles from "./about-us.module.scss";

const index = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        heading="About Us"
        subHeading="Leading the Way in Carbon Markets and Carbon Development: Our Commitment to Sustainable Development"
      />
      <div className="container">
        <h2 className="sub-heading text-align-center">
          Restoring The Planet That Used To Be
        </h2>
        <p
          className="light-paragraph text-align-center"
          style={{ padding: "0px 6%" }}
        >
          Welcome to our company, dedicated to sustainable development through
          carbon markets and carbon development. We understand the urgent need
          to reduce carbon emissions and mitigate the impact of climate change.
          Carbon credits, which represent a reduction of one metric ton of
          carbon dioxide or its equivalent in other greenhouse gases, are a
          valuable tool that can be bought and sold on the carbon market. Our
          commitment to carbon development involves creating projects that
          reduce greenhouse gas emissions. Join us in our mission to create a
          cleaner and healthier planet for future generations.
        </p>
      </div>
      <div className="container">
        <h2 className="sub-heading text-align-center">Recognition</h2>
        <p
          className="light-paragraph text-align-center"
          style={{ padding: "0px 6%" }}
        >
          Certified by Globally recognized Bodies in the Industry for Continued
          Success
        </p>
      </div>
      <div
        className={styles.form_row}
        style={{ display: "flex", alignItems: "center", padding: "3% 5%" }}
      >
        <div className="form-control">
          <div className={styles.sub_heading}>
            Our Commitment to Excellence and Innovation
          </div>
          <p className="light-paragraph">
            We are proud to be recognized by leading industry bodies to
            highlight our commitment to excellence and innovation. This serves
            as a testament to our dedication to providing our clients with
            high-quality services and solutions. We value our partnerships with
            reputable organizations and associations. By working with us, you
            can rest assured that you are partnering with a company that has a
            proven track record of success and a commitment to excellence.
          </p>
        </div>
        <div
          className="form-control"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="images/about-us-certificate.png"
            alt="certificate"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <SubFooter />
      <FooterComponent />
    </>
  );
};

export default index;
