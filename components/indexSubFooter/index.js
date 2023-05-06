import React, { useEffect } from "react";
import styles from "./subFooter.module.scss";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const IndexSubFooter = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );

  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);

  console.log(breakpoint);

  const subFooterList = [
    {
      name: "Save Forest",
      img: "/images/sub-footer-icons/tree.svg",
    },
    {
      name: "Clear Water",
      img: "/images/sub-footer-icons/clear-water.svg",
    },
    {
      name: "Save Energy",
      img: "/images/sub-footer-icons/save-energy.svg",
    },
    {
      name: "Recycle Waste",
      img: "/images/sub-footer-icons/recycle.svg",
    },
    {
      name: "Clean Cooking",
      img: "/images/sub-footer-icons/clean-cooking.svg",
    },
  ];
  const mobileSubFooterList = [
    {
      name: "Save Forest",
      img: "/images/sub-footer-icons/mobile/1.svg",
    },
    {
      name: "Clear Water",
      img: "/images/sub-footer-icons/mobile/2.svg",
    },
    {
      name: "Save Energy",
      img: "/images/sub-footer-icons/mobile/3.svg",
    },
    {
      name: "Recycle Waste",
      img: "/images/sub-footer-icons/mobile/4.svg",
    },
    {
      name: "Clean Cooking",
      img: "/images/sub-footer-icons/mobile/5.svg",
    },
  ];

  return (
    <div className={styles.subFooter_wrapper}>
      <h2 className={styles.sub_footer_header}>
        Move towards a Net Zero Future
      </h2>
      <p className={styles.sub_footer_subHeader}>
        On a mission to reach 1 billion Carbon Offsets
      </p>
      <div className={styles.subFooter_list}>
        {breakpoint === "mobile"
          ? mobileSubFooterList.map((item) => {
              return (
                <div className={styles.subFooter_Item}>
                  <img
                    className={styles.sub_footer_icon}
                    src={item.img}
                    alt="icon"
                  />
                  <span>{item.name}</span>
                </div>
              );
            })
          : subFooterList.map((item) => {
              return (
                <div className={styles.subFooter_Item}>
                  <img
                    className={styles.sub_footer_icon}
                    src={item.img}
                    alt="icon"
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default IndexSubFooter;
