import React from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "../components";


function AboutPage() {
  return (
      <>
        <div className='max-h-[32rem] md:max-h-[28rem] bg-banner-sm lg:bg-banner-lg bg-cover bg-no-repeat bg-center'>
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