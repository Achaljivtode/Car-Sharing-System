import React from 'react'
import HeroServiceCard from './HeroServiceCard'

function HeroServices() {
  return (
    <div>
        <h1 className='text-center  text-3xl font-semibold my-20'>Services</h1>
        <div className='max-w-7xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <HeroServiceCard />
            <HeroServiceCard />
            <HeroServiceCard />

        </div>
    </div>
  )
}

export default HeroServices