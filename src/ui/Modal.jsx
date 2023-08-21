'use client'

import React, {useState} from 'react'
import Card from './Card';
import { useRouter } from 'next/navigation';


import Imageone from "../../public/assests/images/monetary.svg";
import Button from './Button';
import styles from './ui.module.css';
import Image from 'next/image';
import badsign from '../../public/assests/icons/badsign.svg'

function Modal({ setOpenModal, setOpenAcctDetails}) {
  const [values, setValues] = useState('');

  const handleSubmit = () => {
    setOpenModal(false);
    setOpenAcctDetails(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div className={styles.modalcontainer}>
      <div className='flex flex-col center gap-sm'>
       <div className={`flex full-width ${styles.heading}`}>        
        <Image onClick={closeModal} src={badsign} alt="badsign"/>
       </div>
      <Card
      image={<Image src={Imageone} alt="" />}
      text="MONETARY"
      message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam"
      className={styles.modalcard}
      />
      <div>
        <Button>Give money</Button>
      </div>
    <form className={`full-width flex flex-col align-x gap-md ${styles.form}` } >
      <input placeholder="Enter the amount in naira" type='number' onChange={(e)=> setValues(e.target.value)}
      value={values}/>
      <label>Full Name</label>
      <input onChange={(e)=> setValues(e.target.value)}
      value={values} type='text'/>
      <label>Phone Number</label>
      <input onChange={(e)=> setValues(e.target.value)}
      value={values} type="number" />
      <Button onClick={handleSubmit} type='button'>Donate now</Button>
    </form>
    </div>
    </div>
  )
}

export default Modal;