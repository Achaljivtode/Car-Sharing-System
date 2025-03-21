// name , image,dob, number,address, role(drop-down),email,password,username

import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Registration() {
    return (
        <div>
            <Header />
            <div className=' my-20 p-5 max-w-7xl mx-auto grid grid-cols-2'>
                <div className=' flex flex-col justify-center '>
                    <img src="/Resources/Images/hero-bg.jpg" className='w-full h-[550px]' alt="" />
                </div>
                <div className=' my-5'>
                    <form action="" className=''>
                        <div className=' mx-auto grid grid-cols-2 w-full'>
                            <input type="text" className='border m-2 p-3 rounded-md border-gray-400' placeholder='Full Name' />
                            <input type="text" className='border m-2 p-3 rounded-md border-gray-400' placeholder='User Name' />
                        </div>
                        <div className='m-2'>
                            <select name="role" id="role" className='border block w-full p-3 mb-3 rounded-md border-gray-400' >
                                <option value="">Select Role</option>
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                            <input type="email" className='border block w-full p-3 mb-3 rounded-md border-gray-400' placeholder='Email' />
                            <input type="number" className='border block w-full p-3 mb-3 rounded-md border-gray-400' placeholder='Mobile Number' />
                            <input type="password" className='border block w-full p-3 mb-3 rounded-md border-gray-400' placeholder='Password' />
                            <input type="password" className='border block w-full p-3 mb-3 rounded-md border-gray-400' placeholder='Conf. Password' />
                            <input type="text" className='border block w-full p-3 mb-3 rounded-md border-gray-400' placeholder='Address' />
                            <input type="file" className='border block w-full p-3 mb-3 rounded-md border-gray-400' />
                            <input type="submit" value={'REGISTER'} className='border bg-blue-400 text-white hover:bg-blue-500 hover:cursor-pointer block w-full p-3 mb-3 rounded-md border-gray-400' />
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Registration