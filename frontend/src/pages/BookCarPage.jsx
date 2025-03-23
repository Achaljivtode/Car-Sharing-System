import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { isRouteErrorResponse } from 'react-router-dom';

function BookCarPage() {
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropDate, setDropDate] = useState('');
    const [pickupAddress, setPickupAddress] = useState('');
    const [dropAddress, setDropAddress] = useState('');
    const [errors, setErrors] = useState('');

    // useEffect(() => {
    //     validateInputFields();
    // }, [customerName, contactNumber, email, pickupDate, dropDate, pickupAddress, dropAddress,]);

    const validateInputFields = () => {
        const errors = {};
        if (!customerName) {
            errors.customerName = 'Customer name is required';
        }
        if (!contactNumber) {
            errors.contactNumber = 'Contact number is required';
        } else if (!/^[0-9]+$/.test(contactNumber)) {
            errors.contactNumber = 'Invalid contact number';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errors.email = 'Invalid email';
        }
        if (!pickupDate) {
            errors.pickupDate = 'Pickup date is required';
        }
        if (!dropDate) {
            errors.dropDate = 'Drop date is required';
        }
        if (!pickupAddress) {
            errors.pickupAddress = 'Pickup address is required';
        }
        if (!dropAddress) {
            errors.dropAddress = 'Drop address is required';
        }
        setErrors(errors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateInputFields();
        if (Object.keys(errors).length === 0) {
          console.log('Form submitted successfully!');
        }
      };



    return (
        <div>
            <Header />

            <div className='border-y-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
                <div className=' md:w-full '>
                    <h1 className='text-2xl font-semibold my-2 text-orange-400'>Booking Details</h1>
                    <hr className='mb-5' />

                    <form >
                        <div className='flex-col p-2 '>
                            <input type="text"
                                className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='Customer Name'
                                value={customerName}
                                onChange={(event) => setCustomerName(event.target.value)}
                            />
                            {errors.customerName && <p className='mt-1 mb-2 text-red-500'>{errors.customerName}</p>}
                        </div>

                        <div className='flex-col p-2'>
                            <input type="number"
                                className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='Contact Number'
                                value={contactNumber}
                                onChange={(event) => setContactNumber(event.target.value)}
                            />
                            {errors.contactNumber && <p className='mt-1 mb-2 text-red-500'>{errors.contactNumber}</p>}
                        </div>

                        <div className='flex-col p-2 '>
                            <input type="email"
                                className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='Email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            {errors.email && <p className='mt-1 mb-2 text-red-500'>{errors.email}</p>}
                        </div>

                        <div className='flex-col p-2'>
                            <input type="text"
                                className='border mt-2 border-gray-300 px-5 w-full p-2 outline-none' placeholder='Pickup Date'
                                value={pickupDate}
                                onChange={(event) => setPickupDate(event.target.value)}
                            />
                            {errors.pickupDate && <p className='mt-1 mb-2 text-red-500'>{errors.pickupDate}</p>}

                        </div>

                        <div className='flex-col p-2 '>
                            <input type="text"
                                className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='Drop date'
                                value={dropDate}
                                onChange={(event) => setDropDate(event.target.value)}
                            />
                            {errors.dropDate && <p className='mt-1 mb-2 text-red-500'>{errors.dropDate}</p>}
                        </div>

                        <div className='flex-col p-2'>
                            <input type="text" className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='pickup Address'
                                value={pickupAddress}
                                onChange={(event) => setPickupAddress(event.target.value)}
                            />
                            {errors.pickupAddress && <p className='mt-1 mb-2 text-red-500'>{errors.pickupAddress}</p>}
                        </div>

                        <div className='flex-col p-2 '>
                            <input type="text" className='border border-gray-300 px-5 w-full p-2 outline-none' placeholder='Drop Address'
                                value={dropAddress}
                                onChange={(event) => setDropAddress(event.target.value)}
                            />
                            {errors.dropAddress && <p className='mt-1 mb-2 text-red-500'>{errors.dropAddress}</p>}
                        </div>

                        <div className='flex-col p-2 '>
                            <input type="submit" value={'Book'} onClick={handleSubmit} className='border border-gray-300 bg-blue-500 hover:bg-blue-600 text-white text-xl px-5 w-full p-2 outline-none' placeholder='Drop Address' required />
                        </div>
                        
                    </form>

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

export default BookCarPage