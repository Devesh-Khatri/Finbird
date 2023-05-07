import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className={styles.hamburger}
          src={"/images/hamBurger.svg"}
          width="30px"
          alt="Mayur"
        />
        <div
          className={styles.navbar_brand}
          onClick={() => {
            router.push("/");
          }}
        >
          SUSTAINIAM
        </div>
        <ul className={styles.navbar_nav}>
          <li className={styles.nav_item}>
            <p className={styles.nav_link}>About Us</p>
          </li>
          <li className={styles.nav_item}>
            <p
              href="/about"
              onClick={() => {
                router.push("/carbon-development");
              }}
              className={styles.nav_link}
            >
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
      <div style={{ width: openNav ? "100vw" : "0px" }} class="sidenav">
        <div className={styles.mobileTopBar}>
          <img
            onClick={() => {
              router.push("/");
            }}
            src={`/images/mobileNav/logo.svg`}
            alt="1.png"
          />
          <img
            onClick={() => {
              setOpenNav(!openNav);
            }}
            src={`/images/mobileNav/cross.svg`}
            alt="1.png"
          />
        </div>

        <a href="#">Tokens</a>
        <a
          href="#"
          onClick={() => {
            router.push("/carbon-development") && setOpenNav(!openNav);
          }}
        >
          Carbon Development
        </a>
        <a
          href="#"
          onClick={() => {
            router.push("/about-us") && setOpenNav(!openNav);
          }}
        >
          About Us
        </a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </div>
    </nav>
  );
};

export default NavBar;
