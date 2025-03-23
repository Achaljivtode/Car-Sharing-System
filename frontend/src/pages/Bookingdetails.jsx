import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function Bookingdetails() {
    return (
        <div>
            <Header />
            <div className='border-y-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
                <div className=' md:w-full '>
                    <h1 className='text-2xl font-semibold my-2 text-orange-400'>Booking Details</h1>
                    <hr className='mb-5' />
                    <div className='flex p-2 bg-gray-100'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Booking Reference Number</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Booking Date</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2 bg-gray-100'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Customer Name</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Contact Number</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2 bg-gray-100'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Email</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Pickup Date</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2 bg-gray-100'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Drop Date</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Pickup Address</h1>
                        <p className='p-2'>helo</p>
                    </div>
                    <div className='flex p-2 bg-gray-100'>
                        <h1 className='p-2 w-[55%] text-xl font-semibold'>Drop Address</h1>
                        <p className='p-2'>helo</p>
                    </div>
                </div>
                <div className='lg:ml-5 md:w-full '>
                    <h1 className='text-2xl font-semibold my-2 text-orange-400'>Car Details</h1>
                    <hr className='mb-5' />

                    <div className='flex p-2 flex-col md:flex-row lg:flex-row bg-gray-100'>
                        <img src="/Resources/Cars/audi q7.png" alt="" 
                            className='lg:w-[50%] m-5  md:w-[50%] w-full  object-cover' 
                        />
                        <div className=' lg:w-[50%] md:w-[50%] w-full p-2'>
                            <div className='flex text-center md:text-start lg:text-start'>
                                <h1 className='font-semibold p-2 w-[50%] text-lg'>Name</h1>
                                <p className=' p-2 w-[50%] '>helo</p>
                            </div>
                            <div className='flex text-center md:text-start lg:text-start'>
                                <h1 className='font-semibold p-2 w-[50%] text-lg'>Type</h1>
                                <p className=' p-2 w-[50%] '>Suv</p>
                            </div>
                            <div className='flex text-center md:text-start lg:text-start'>
                                <h1 className='font-semibold p-2 w-[50%] text-lg'>Company</h1>
                                <p className=' p-2 w-[50%] '>Suzuki</p>
                            </div>
                            <div className='flex text-center md:text-start lg:text-start'>
                                <h1 className='font-semibold p-2 w-[50%] text-lg'>Price Per Day</h1>
                                <p className=' p-2 w-[50%] '>1100 /-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bookingdetails