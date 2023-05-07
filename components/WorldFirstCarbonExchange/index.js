import React from "react";
import styles from "./worldFirstCarbonExchange.module.scss";

const TabCard = ({ title, para }) => {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.para}>{para}</div>
    </div>
  );
};

const WorldFirstCarbonExchange = () => {
  return (
    <div>
      <div>
        <div className="sub-heading text-align-center">
          World's First Carbon Exchange
        </div>
        <div className={styles.light_paragraph}>
          A sneak peak at our carbon exchange - enjoy making a difference for
          the environment and your wallet
        </div>
      </div>
      <div className={styles.wrapper}>
          <img
            className={styles.backgroundDots}
            src="/images/backgroundDots.svg"
            alt="1.jpg"
          />

          <div className={styles.leftContainer}>
            <TabCard
              title="A sneak peak at our carbon exchange"
              para="A sneak peak at our carbon exchange - enjoy making a difference for the environment and your wallet"
            />
            <TabCard
              title="A sneak peak at our carbon exchange"
              para="A sneak peak at our carbon exchange - enjoy making a difference for the environment and your wallet"
            />
            <TabCard
              title="A sneak peak at our carbon exchange"
              para="A sneak peak at our carbon exchange - enjoy making a difference for the environment and your wallet"
            />
          </div>
          <div className={styles.rightContainer}>
            <img
              className={styles.image}
              src="/images/worldFirstCarbonExchange.svg"
              alt="1.jpg"
            />
        </div>
      </div>
    </div>
  );
};

export default WorldFirstCarbonExchange;
