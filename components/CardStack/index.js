import React from "react";
import styles from "./carsStack.module.scss";
import Button from "../Button";
import Marquee from "react-easy-marquee";

const CardStack = () => {
  return (
    <>
      <Marquee duration={100000} background="#2F2F2F" height="4.5rem">
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#SUSTAINIAM</div>
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#Decarbonization</div>
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#EV</div>
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#ClimateChange</div>
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#TheAirWeShare</div>
        <div className={styles.dotWrapper}></div>
        <div className={styles.marqueeText}>#ClimateCrisis</div>
        <div className={styles.dotWrapper}>
          <div className={styles.marqueeText}>#RenewableEnergy</div>
        </div>
        <div className={styles.dotWrapper}>
          <div className={styles.marqueeText}>#OffshoreWind</div>
        </div>
      </Marquee>
      <div className={styles.wrapper}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.cardheading}>Become a Carbon Developer</div>
            <div className={styles.paragraph}>
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur elit. Vesti at bulum the and the consectetur elit.
            </div>
            <Button text="Learn More" styling={styles.cardButton} />
          </div>
          <div className="divider"></div>
          <div className={styles.card}>
            <div className={styles.cardheading}>Invest In Climate Finance</div>
            <div className={styles.paragraph}>
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur elit. Vesti at bulum the and the consectetur elit.
            </div>
            <Button text="Contact Us" styling={styles.cardButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStack;
