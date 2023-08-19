import Hero from '@/ui/Hero'
import React from 'react';

import imagetwo from '../../../public/assests/images/Rectangle 7.svg'
import Image from 'next/image';
import styles from './donate.module.css';
import Navigation from '@/layouts/Navigation';

function DonateHero() {
  return (
    <>
    <Navigation/>
      <Hero 
      background={<Image src={imagetwo} alt=""/>}
      content={<>
       <h1>You can donate here</h1>
       <p>NIll</p>
      </>}
      className={styles.herodonate}
      />
    </>
  )
}

export default DonateHero