'use client';

import React from 'react'

import Image from 'next/image';
import arrow from '../../../public/assests/images/downarrow.svg'

import styles from './homepage.module.css';
import Navigation from '@/layouts/Navigation';
import Button from '@/ui/Button';
import Container from '@/ui/Container';


function Herosection() {
  return (
    <div className={`full-width ${styles.herocontainer}`}>
      <Navigation/>
      <Container className={`flex flex-col gap-md align-x ${styles.herocontent}`}>
        <div>
        <h1>Content management system overall</h1>
        <p>BE A BEACON OF HOPE</p>
        </div>
        <div className={`full-width flex gap-md ${styles.herobuttons}`}>
          <div className={`flex gap-sm ${styles.buttons}`}>
          <Button>Donate now</Button>
          <Button>Be a Partner</Button>
          </div>
          <div className={`flex center gap-sm flex-col ${styles.scrollbutton}`}>
          <p>Scroll down for more</p>
          <Image src={arrow} alt='arrow_down'/>
        </div>
         </div>
        
        </Container>
    </div>
  )
}

export default Herosection