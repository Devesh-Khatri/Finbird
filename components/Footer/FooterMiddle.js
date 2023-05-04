import React from "react";
import styles from "./footer.module.scss";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 1024, tablet: 1024, desktop: 1280 };

const FooterMiddle = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );
  return (
    <>
    {breakpoint == 'mobile' && <div className={styles.divider}></div>}
    <div className={styles.footer_middle}>
      
      <div>
        <div className="footer-heading">Company</div>
        <p className="footer-text">Strategic Partners</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">About Us</p>
      </div>
      <div>
        <div className="footer-heading">Contact</div>
        <p className="footer-text">Strategic Partners</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">About Us</p>
      </div>
      <div>
        <div className="footer-heading">Resources</div>
        <p className="footer-text">Strategic Partners</p>
        <p className="footer-text">Privacy Policy</p>
        <p className="footer-text">About Us</p>
      </div>
    </div>
    </>
  );
};

export default FooterMiddle;
