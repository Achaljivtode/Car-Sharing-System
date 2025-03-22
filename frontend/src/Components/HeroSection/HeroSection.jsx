import React from 'react'

function HeroSection() {
    
    return (
            <div className='relative mt-10 h-[600px]'>
                <div className='absolute inset-0 border w-[1400px]  mx-auto h-[600px] bg-[url("/Resources/Images/hero-bg.jpg")] bg-cover  bg-center bg-no-repeat flex items-center justify-center  '>
                </div>
                <div className='relative max-w-7xl mx-auto text-white pt-70 pl-10 p-5'>
                    <h1 className='text-4xl'>Heading</h1>
                    <button className='border bg-slate-800 hover:bg-slate-950 rounded-lg mt-5 p-3'>Explore More</button>
                </div>
                
            </div>
    )
}

export default HeroSection