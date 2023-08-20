import React from "react";

import Image from "next/image";
import styles from "./donate.module.css";
import Navigation from "@/layouts/Navigation";
import Container from '@/ui/Container';
import arrow from '../../../public/assests/images/downarrow.svg'

function DonateHero() {
  return (
    <div className={`full-width ${styles.herocontainer}`}>
      <Navigation />
      <Container
        className={`flex flex-col gap-md align-x ${styles.herocontent}`}
      >
        <div>
          <h1>Your Generosity, Their Brighter Future. </h1>
        </div>
        <div className={`full-width flex gap-md ${styles.herobuttons}`}>
         <p>Your support can brighten their future. Be a beacon of hope and make a lasting impact on the lives of these wonderful children. Donate now and help us create a world of love and possibilities together.</p>
          <div className={`flex center gap-sm flex-col ${styles.scrollbutton}`}>
            <p>Scroll down for more</p>
            <Image src={arrow} alt="arrow_down" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DonateHero;
