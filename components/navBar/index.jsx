import React from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div href="/" className={styles.navbar_brand}>
          SUSTAINIAM
        </div>
        <ul className={styles.navbar_nav}>
          <li className={styles.nav_item}>
            <p href="/" className={styles.nav_link}>
              About U
            </p>
          </li>
          <li className={styles.nav_item}>
            <p href="/about" className={styles.nav_link}>
              Carbon Development
            </p>
          </li>
          <li className={styles.nav_item}>
            <p href="/services" className={styles.nav_link}>
              Contact
            </p>
          </li>
          <li className={styles.nav_item}>
            <p href="/contact" className={styles.nav_link}>
              FAQ
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
