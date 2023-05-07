import React from 'react'
import styles from './Button.module.scss'

const Button = ({text, styling}) => {
  return (
    <div className={styling ? styling : styles.button}>{text}</div>
  )
}

export default Button