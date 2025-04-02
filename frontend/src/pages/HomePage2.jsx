import React, { useRef } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import CarSlider from '../Components/CarSlider/CarSlider'
import Testimonials from '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'

function HomePage2() {
    const carSliderRef = useRef(null);

    const scrollToCars = () => {
        if (carSliderRef.current) {
          carSliderRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
  return (
    <div>
        <Header />
        <main>
            <Hero scrollToCars={scrollToCars} />
            <Services />
            <div ref={carSliderRef}>
                <CarSlider />
            </div>
            <Testimonials />
            <Contact />
        </main>

        <Footer />
    </div>
  )
}

export default HomePage2