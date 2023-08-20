'use client';

import React from 'react'

import Image from 'next/image';

import Navigation from '@/layouts/Navigation';
import styles from './about.module.css';
import Container from '@/ui/Container';
import arrow from '../../../public/assests/images/downarrow.svg'

function HeroAbout() {
  return (
    <div className={`full-width ${styles.herocontainer}`}>
      <Navigation/>
      <Container
        className={`flex flex-col gap-md align-x ${styles.herocontent}`}
      >
        <div>
          <h1>Name of orphanage</h1>
        </div>
        <div className={`full-width flex gap-md ${styles.herobuttons}`}>
         <p>Some to Adopt, Some to Care, Some to Give</p>
          <div className={`flex center gap-sm flex-col ${styles.scrollbutton}`}>
            <p>Scroll down for more</p>
            <Image src={arrow} alt="arrow_down" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroAbout