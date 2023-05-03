import React from 'react'
import styles from './HeroSection.module.scss'
const HeroSection = () => {
  return (
    <div className={styles.hero_section_container}>
    <div className={styles.left_container}>
    <h1 className={styles.hero_title}>Become A <br /> Carbon <br /> developer</h1>
    <p className={styles.hero_subTitle}>Bringing carbon down, and enabling green economy, by trading <br /> carbon credits</p>
    </div>
    <div className={styles.right_container}>
        <img src='/images/carbon-development.png' className={styles.hero_image} alt="Mayur" />
    </div>
    </div>
  )
}

export default HeroSection