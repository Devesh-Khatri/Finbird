import React from "react";
import styles from "./whatwesolve.module.scss";
import CoinCarouselComponent from "../CoinCarousel";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 1024, tablet: 1024, desktop: 1280 };

const gridData1 = [
  {
    title: "1. Transparency and Liquidity",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
  {
    title: "2. Standard Price Discovery",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
  {
    title: "3. Instant P2P Transactions",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
];
const gridData2 = [
  {
    title: "4. Digital Carbon Tokens",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
  {
    title: "5. Smart Contract Enabled",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
  {
    title: "6. Secure Key Vault",
    desc: "We help secure financing for new carbon projects.",
    img: "",
  },
];

const ItemComponent = ({ data, key, alignLeft }) => {
  return (
    <div
      key={key}
      className={alignLeft ? styles.alignLeftItemWrapper : styles.itemWrapper}
    >
      <div className={styles.iconWrapper}>
        <img src="/images/what-we-solve/1.svg" alt="thumbnail" />
      </div>
      <div className={styles.heading}>{data.title}</div>
      <div className={styles.ItemParagraph}>
        {data.desc}
      </div>
    </div>
  );
};

const WhatWeSolve = () => {
  
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  return (
    <div className={styles.wrapper}>
      <div className="heading text-align-center">What We Solve</div>
      <div className={styles.paragraph}>
        A standardized system for measuring emissions reductions should be
        developed and adopted by all organizations that participate in the
        carbon credit market.
      </div>

      <div className={styles.gridComponent}>
        <div className={styles.flexItem}>
          {gridData1.map((item, index) => {
            return (
              <ItemComponent
                key={index}
                data={item}
                alignLeft={breakpoint == "mobile" ? true : false}
              />
            );
          })}
        </div>
        <div className={styles.flexItem}>
          <CoinCarouselComponent />
        </div>
        <div className={styles.flexItem}>
          {gridData2.map((item, index) => {
            return (
              <ItemComponent
                key={index + 4}
                data={item}
                alignLeft={breakpoint == "mobile" ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeSolve;
