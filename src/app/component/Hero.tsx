import Link from 'next/link'
import React from 'react'
import styles from './Hero.module.css';



const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Welcome to SoleStyle - Shoes for Every Walk of Life!</h1>
      <button>Shop now and  free shipping on all orders!</button>
      <br /><br />
      <p>We’re thrilled to have you here. At SoleStyle, we believe that every step you take should be stylish, comfortable, and affordable. Whether you're looking for the perfect pair of shoes for a special occasion, everyday wear, or anything in between, we’ve got you covered. Explore our curated collection designed for all walks of life, and enjoy the added perk of free shipping on every order.</p>
      


    </div>
  );
};

export default Hero;
