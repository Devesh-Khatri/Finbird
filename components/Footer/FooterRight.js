import React from "react";
import styles from "./footer.module.scss";

const FooterRight = () => {
  return (
    <div className={styles.footer_right}>
      <div className="footer-heading">Latest blog</div>
      <div className={styles.footer_blog_container}>
        <div>
          <img src="/images/footer-images/1.png" alt="thumbnail" />
        </div>
        <div className={styles.blog_info}>
          <p className="footer-heading">Improve Sale Volume</p>
          <p className="footer-text" style={{marginTop: "1px"}}>24th Aug 2019</p>
        </div>
      </div>
      <div className={styles.footer_blog_container}>
        <div>
          <img src="/images/footer-images/1.png" alt="thumbnail" />
        </div>
        <div className={styles.blog_info}>
          <p className="footer-heading">Improve Sale Volume</p>
          <p className="footer-text" style={{marginTop: "1px"}}>24th Aug 2019</p>
        </div>
      </div>
    </div>
  );
};

export default FooterRight;
