import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <div style={{ width: openNav ? "300px" : "0px" }} class="sidenav">
        <a
          onClick={() => {
            setOpenNav(!openNav);
          }}
          href="javascript:void(0)"
          class="closebtn"
          onclick="closeNav()"
        >
          &times;
        </a>
        <a href="#">About Us</a>
        <a
          href="#"
          onClick={() => {
            router.push("/carbon-development");
          }}
        >
          Carbon Development
        </a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </div>
    </nav>
  );
};

export default NavBar;
