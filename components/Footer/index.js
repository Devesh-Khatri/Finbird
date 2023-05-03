import React from 'react'
import styles from './footer.module.scss'
import FooterLeft from './FooterLeft'
import FooterMiddle from './FooterMiddle'
import FooterRight from './FooterRight'

const FooterComponent = () => {
  return (
    <div className={styles.footer_wrapper}>
      <FooterLeft />
      <FooterMiddle />
      <FooterRight />
    </div>
  )
}

export default FooterComponent