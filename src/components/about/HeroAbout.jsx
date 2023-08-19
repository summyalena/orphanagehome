'use client';

import Hero from '@/ui/Hero'
import React from 'react'

import Image from 'next/image';

import imagetwo from '../../../public/assests/images/Rectangle 6(2).svg';
import Navigation from '@/layouts/Navigation';
import styles from './about.module.css';

function HeroAbout() {
  return (
    <>
      <Navigation/>
      <Hero
       background={<Image src={imagetwo} alt=""/>}
       content={
       <>
        <h1>About Us</h1>
        <p>Hello</p>
       </>}
       className={styles.heroabout}
      />
    </>
  )
}

export default HeroAbout