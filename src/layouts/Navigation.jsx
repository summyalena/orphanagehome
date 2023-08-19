'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';

import styles from './layout.module.css';
import Button from '@/ui/Button';
import imageone from '../../public/assests/images/herosectionimage.svg';


function Navigation() {
const route = Router;
const [mobilemenu, setMobileMenu] = useState(false);

const navigateButton = () => {
  route('/');
}

const handleMenu = () => {
  setMobileMenu(!mobilemenu);
  console.log(mobilemenu);
}

  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'About',
      link: '/about'
    },
    {
      id: 3,
      name: 'Partnership',
      link: '/partnership'
    }
  ]
  return (
    <header className={`full-width ${styles.navigation}`}>
      <nav className={`full-width flex align-y ${styles.navlinks}`}>
        <Link href='/'>
        LOGO
        </Link>
        <ul className={`flex gap-lg center ${styles.navlist} ${ mobilemenu ? styles.mobile : ''}`}>
        {links.map((link)=> (
          <li key={link.id}>
            <Link href={link.link}>{link.name}</Link></li>
        ))}
        </ul>

        <Button className={styles.donatebtn} onClick={navigateButton} type="button">
          <Link href='/donate'>
          Donate now
          </Link>
        </Button>
        <button onClick={handleMenu} type="button" className={`flex-col center ${styles.hamburger}`}>
        <span className={styles.line}/>
        <span className={styles.line}/>
        <span className={styles.line}/>
      </button>
       </nav> 
    </header>
  )
}

export default Navigation