import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";


function AboutPage() {
  return (
      <>
        <div style={{maxHeight:"60vh"}} className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />

        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        </>
  )
}

export default AboutPage