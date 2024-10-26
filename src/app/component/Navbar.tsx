import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'






const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>SoleStyle</h1>

      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/ShopPage">Shop Now</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>

    </div>
  );
};


export default Navbar