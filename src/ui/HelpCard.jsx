'use client';

import React from 'react'

import styles from './ui.module.css';

function Card({image, text, message, className}) {
  return (
    <div className={`flex flex-col center gap-md ${styles.card} ${className}`}>
     {image}
     <div className='gap-sm flex flex-col center'>
      <h5>{text}</h5>
      <p>{message}</p>
     </div>
    </div>
  )
}

export default Card