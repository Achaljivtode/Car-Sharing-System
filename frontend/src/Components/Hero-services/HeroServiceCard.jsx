import React from 'react'

function HeroServiceCard() {
  return (
    <div className='mb-10 overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer'>
        <img 
            src="/Resources/Images/hero-bg.jpg"  
            alt="" 
            className='w-3/4 mx-auto rounded-lg'
        />
        <h2 className='text-center my-2 text-xl font-semibold'>Hero Service Card</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, pariatur.</p>
    </div>
  )
}

export default HeroServiceCard