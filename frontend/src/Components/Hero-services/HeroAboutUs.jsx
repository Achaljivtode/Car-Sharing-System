import React from 'react'

function HeroAboutUs() {
  return (
    <div id='about'>
        <h1 className='text-center text-3xl mt-30 font-semibold'>About Us</h1>
        <div className='max-w-7xl p-10 mx-auto my-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <img src="/Resources/Images/hero-bg.jpg" alt="" />
            <div className='h-full flex flex-col justify-center'>
                <p className=' p-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolore molestiae minima? Optio odit esse deleniti minus! Sed, modi quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis veniam soluta provident velit. Qui praesentium earum modi voluptate labore!</p>
            </div>
        </div>
    </div>
  )
}

export default HeroAboutUs