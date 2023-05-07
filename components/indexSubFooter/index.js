import React, { useEffect } from "react";
import styles from "./subFooter.module.scss";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const IndexSubFooter = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  const data = [
    {
      title: "1. Sign Up",
      desc: "Sign Up, complete the KYC, we’ll verify your documents and you’re ready to go!",
      img: "/images/index-sub-footer/1.svg",
    },
    {
      title: "2. Add funds",
      desc: "Deposit funds from all over the world, seamlessly and smoothly",
      img: "/images/index-sub-footer/2.svg",
    },
    {
      title: "3. Start trading",
      desc: "Trade Emissions by a simple click of your choice between buy, sell or burn!",
      img: "/images/index-sub-footer/3.svg",
    },
  ];

  return (
    <div className={styles.subFooter_wrapper}>
      <h2 className={styles.sub_footer_header}>
        Investing In Carbon Credits is Easier Than Ever
      </h2>
      <p className={styles.sub_footer_subHeader}>Three Simple Steps</p>
      <div className={styles.subFooter_list}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.subFooter_Item}>
              <img
                className={styles.sub_footer_icon}
                src={item.img}
                alt="icon"
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndexSubFooter;
