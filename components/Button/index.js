import React from 'react'
import styles from './Button.module.scss'

const Button = ({text}) => {
  return (
    <div className={styles.button}>{text}</div>
  )
}

export default Button