import React from "react";
import styles from "./footer.module.scss";
import FooterLeft from "./FooterLeft";
import FooterMiddle from "./FooterMiddle";
import FooterRight from "./FooterRight";
import useBreakpoint from "use-breakpoint";
const BREAKPOINTS = { mobile: 1024, tablet: 1024, desktop: 1280 };

const FooterComponent = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "desktop"
  );
  return (
    <>
      <div className={styles.footer_wrapper}>
        <FooterLeft />
        <FooterMiddle />
        <FooterRight />
      </div>

    </>
  );
};

export default FooterComponent;
