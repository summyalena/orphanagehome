'use client';

import React, {useState} from 'react'

import styles from './ui.module.css';
import Button from './Button';

function Card({image, text, message, className, handleClick}) {

  return (
    <div className={`flex flex-col center gap-md ${styles.card} ${className}`}>
     {image}
     <div className='gap-sm flex flex-col center'>
      <h5>{text}</h5>
      <p>{message}</p>
      <Button type='button' onClick={handleClick}>Donate now</Button>
     </div>
    </div>
  )
}

export default Card