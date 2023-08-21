"use client";

import React, { useState } from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";

import Imageone from "../../public/assests/images/monetary.svg";
import Button from "./Button";
import styles from "./ui.module.css";
import Image from "next/image";
import badsign from "../../public/assests/icons/badsign.svg";

function InKindModal({ setInkindModal }) {
  const [values, setValues] = useState({
    FullName: '',
    phonenumber: '',
    email: '',
    donate: ''
   });

const handleSubmit = () => {
 setInkindModal(false);
 setValues(values);
}

const closeInkindModal = () => {
 setInkindModal(false);
}

  return (
    <div className={styles.modalcontainer}>
      <div className="flex flex-col center gap-sm">
        <div className={`flex full-width ${styles.inkindheading}`}>
          <Image onClick={closeInkindModal} src={badsign} alt="badsign" />
        </div>
        <Card
          image={<Image src={Imageone} alt="" />}
          text="IN-KIND DONATION"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam"
          className={styles.modalcard}
        />
        <p>What would you like to give us</p>
        <form
          className={`full-width flex flex-col align-x gap-md ${styles.form}`}
        >
          <label>Full Name</label>
          <input
          name='FullName'
            onChange={(e)=> setValues((prev)=> ({...prev, [e.target.name]: e.target.value}))}
            value={values.FullName}
            type="text"
          />
           <label>Email</label>
          <input
          name='Email'
            onChange={(e) => setValues((prev)=> ({
              ...prev, [e.target.name]: e.target.value
            }))}
            value={values.email}
            type="email"
          />
          <label>Phone Number</label>
          <input
          name='Phone Number'
            onChange={(e) => setValues((prev)=> ({
              ...prev, [e.target.name]: e.target.value
            }))}
            value={values.phonenumber}
            type="number"
          />
          <label>What would you like to give us?</label>
          <input
          name='Donate'
          onChange={(e) => setValues((prev)=> ({
            ...prev, [e.target.name]: e.target.value
          }))}
            value={values.donate}
            type="text"
          />
          <Button onClick={handleSubmit} type="button">
            Contact us
          </Button>
        </form>
      </div>
    </div>
  );
}

export default InKindModal;
