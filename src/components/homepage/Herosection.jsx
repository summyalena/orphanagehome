'use client';

import React from 'react'

import Image from 'next/image';
import arrow from '../../../public/assests/images/downarrow.svg'

import styles from './homepage.module.css';
import imageone from '../../../public/assests/images/HomeHeros.svg';
import Hero from '@/ui/Hero';
import Navigation from '@/layouts/Navigation';
import Button from '@/ui/Button';


function Herosection() {
  return (
    <div className={`full-width ${styles.herocontainer}`}>
      <Navigation/>
      <Hero
      background={
      <Image src={imageone} alt="image of child"/>
      }
      content={<>
      <div className={`flex flex-col ${styles.herocontent}`}>
        <h1>Content management system overall</h1>
        <p>Be a beacon of hope</p>
        <div className={`flex center gap-sm ${styles.herobuttons}`}>
          <Button>Donate now</Button>
          <Button>Be a Partner</Button>
         </div>
         <div className={`flex center gap-sm flex-col ${styles.scrollbutton}`}>
          <p>Scroll down for more</p>
          <Image src={arrow} alt='arrow_down'/>
        </div>
         </div>
      </>}
      />
    </div>
  )
}

export default Herosection