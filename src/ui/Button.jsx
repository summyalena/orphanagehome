import React from 'react';

import styles from './ui.module.css'

function Button({children, className}) {
  return (
    <button className={`flex center ${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button