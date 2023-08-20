"use client";

import Image from "next/image";

import Gridtemplate from "@/ui/Gridtemplate";
import Imageone from "../../../public/assests/images/monetary.svg";
import Imagetwo from "../../../public/assests/images/fundraising2.svg";
import Imagethree from "../../../public/assests/images/partnership.svg";
import Imagefour from "../../../public/assests/icons/pray.svg";
import Imagefive from "../../../public/assests/images/inkindonation.svg";
import Container from "@/ui/Container";
import React from "react";
import styles from "./donate.module.css";
import Card from "@/ui/Card";
import Button from '@/ui/Button';

function DonateContent() {
  return (
    <Container className={styles.donatecontainer}>
      <Gridtemplate className={styles.donategrid}>
        <Card
          className={styles.cardone}
          image={<Image src={Imageone} alt="" />}
          text="PRAY WITH US"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam"
        />
        <Card
          className={styles.cardtwo}
          image={<Image src={Imagetwo} alt="" />}
          text="FUND RAISING"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
        />
        <Card
          className={styles.cardthree}
          image={<Image src={Imagethree} alt="" />}
          text="DONATION"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
        />
        <Card
          className={styles.cardfour}
          image={<Image src={Imagefour} alt="" />}
          text="SPONSOR A CHILD"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
        />
        <Card
          className={styles.cardfive}
          image={<Image src={Imagefive} alt="" />}
          text="SPONSOR A CHILD"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
        />
      </Gridtemplate>
    </Container>
  );
}

export default DonateContent;
