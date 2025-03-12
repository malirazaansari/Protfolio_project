'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Customer from './Customer/CustomerReview'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import Responsive from './Navbar/Responsive'
import Head from 'next/head'
const Home = () => {

useEffect(()=>{
  const initAOS = async ()=>{
    await import ("aos");
    AOS.init({
      duration:800,
      easing:"ease",
      once: true,
      anchorPlacement: 'top-bottom',
    })
  }
  initAOS();
},[])


  return (

    
    <div className="overflow-hidden">
      <Head>
        <title>Ali Raza</title>
        <meta name="description" content="Ali Raza Portfolio" />
        <meta name="keywords" content="Ali Raza, Software Engineer, MERN Developer, Full Stack Developer" />
        <meta name="author" content="Ali Raza" />
      </Head>
      <Responsive />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="customer">
        <Customer />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Home