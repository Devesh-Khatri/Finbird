import React from "react";
import styles from "./footer.module.scss";


const FooterLeft = () => {
  return (
    <>
      <div className={styles.footer_left}>
        <div className={styles.footer_heading}>SUSTAINIAM</div>
        <p className={styles.footer_text}>
          We create digital experiences for brands and companies by using
          technology.
        </p>
        <div className={styles.socialMediaIconsContainer}>
          <div className={styles.iconContainer}> <img src="/images/footer-images/social-media-icons/twitter.svg" alt="thumbnail" width="20px" height="20px" /></div>
          <div className={styles.iconContainer}> <img src="/images/footer-images/social-media-icons/linkedin.svg" alt="thumbnail" width="20px" height="20px" /></div>
          <div className={styles.iconContainer}> <img src="/images/footer-images/social-media-icons/youtube.svg" alt="thumbnail" width="20px" height="20px" /></div>
          <div className={styles.iconContainer}> <img src="/images/footer-images/social-media-icons/facebook.svg" alt="thumbnail" width="20px" height="20px" /></div>
        </div>
      </div>
    </>
  );
};

export default FooterLeft;
