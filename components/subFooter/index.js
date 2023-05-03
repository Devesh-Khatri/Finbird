import React from "react";
import styles from "./subFooter.module.scss";
const SubFooter = () => {
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

  return (
    <div className={styles.subFooter_wrapper}>
      <h2 className={styles.sub_footer_header}>
        Move towards a Net Zero Future
      </h2>
      <p className={styles.sub_footer_subHeader}>
        Move towards a Net Zero Future
      </p>
      <div className={styles.subFooter_list}>
        {subFooterList.map((item, index) => {
          return (
            <div className={styles.subFooter_Item}>
              <img className={styles.sub_footer_icon} src={item.img} alt="icon" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubFooter;
