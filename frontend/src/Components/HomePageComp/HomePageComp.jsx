import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import HeroServices from '../Hero-services/HeroServices'
import HeroAboutUs from '../Hero-services/heroAboutUs'
import Footer from '../Footer/Footer'
import Enquiry from '../ContactUs/Enquiry'

function HomePageComp() {
  return (
    <div>
          
          <HeroSection />
          <HeroServices />
          <HeroAboutUs />
          <Enquiry /> 
          <Footer />
          
        </div>
  )
}

export default HomePageComp