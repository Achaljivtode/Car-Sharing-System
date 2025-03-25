import React, { useEffect } from 'react'
import HeroSection from '../HeroSection/HeroSection'
import HeroServices from '../Hero-services/HeroServices'
import HeroAboutUs from '../Hero-services/heroAboutUs'
import Footer from '../Footer/Footer'
import Enquiry from '../ContactUs/Enquiry'
import { useLocation } from 'react-router-dom'

function HomePageComp() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/home") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        setTimeout(() => {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay for better effect
      }
    }
  }, [location]);

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