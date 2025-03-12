'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNavbar from './MobileNavbar'

const Responsive = () => {
  
  const [showNav, setShowNav] = useState(false)
  const showNavHandler =()=> setShowNav(true)
  const closeNavHandler =()=> setShowNav(false)
  return (
    <div>
        <Nav openNav={showNavHandler}/>  
        <MobileNavbar showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default Responsive