import React from 'react'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import HeroServices from '../Components/Hero-services/HeroServices'
import HeroAboutUs from '../Components/Hero-services/heroAboutUs'
import Footer from '../Components/Footer/Footer'
import Enquiry from '../Components/ContactUs/Enquiry'

function HomePage() {
  return (
    <div className=''>
        <Header />
        <HeroSection />
        <HeroServices />
        <HeroAboutUs />
        <Enquiry /> 
        <Footer />
    </div>
  )
}

export default HomePage