import React from 'react'
import Navbar from './component/Navbar'
import Link from 'next/link'
import Hero from './component/Hero'
import Footer from './component/Footer'



const HomePage = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomePage