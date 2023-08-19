'use client';

import React from 'react'

import Container from '@/ui/Container';
import Gridtemplate from '@/ui/Gridtemplate';
import Button from '@/ui/Button';
import styles from './layout.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footercontainer}>
        <h5 className='flex center'>
          Join us in making a difference</h5>
        <Gridtemplate className={` ${styles.mainfootgrid}`}>
        <div className='flex flex-col gap-lg align-x'>
        <div className={`grid grid-1 ${styles.footergrid}`}>
          <ul className='flex flex-col gap-md'>
            <h6>Get involved with us</h6>
           <li>The Need</li>
           <li>Our Work</li>
           <li>Our Work</li>
           <li>Our Work</li>
          </ul>
          <ul className='flex flex-col gap-md'>
          <h6>Get involved with us</h6>
           <li>The Need</li>
           <li>Our Work</li>
           <li>Our Work</li>
           <li>Our Work</li>
          </ul>    
        </div>
        <div className='flex flex-col gap-sm'>
        <h6>Get involved with us</h6>
        <ul className='flex gap-sm'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
          </ul>
        </div>
        <p>© Orphan 2023. All rights reserved.</p>
        </div>
        <div className={`${styles.formcontainer}`}>
         <h6>Contact us</h6>
         <form className={`flex flex-col gap-sm ${styles.form}`}>
          <label>First Name</label>
          <input/>
          <label>Last Name</label>
          <input/>
          <label>Email Address</label>
          <input/>
          <label>
            Message
          </label>
          <textarea/>
          <Button className='flex align-x'>Submit</Button>
         </form>
        </div>
        </Gridtemplate>
       
      </Container>
    </div>
  )
}

export default Footer;