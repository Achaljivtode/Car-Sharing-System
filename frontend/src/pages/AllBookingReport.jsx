import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

function AllBookingReport() {
  const navigate = useNavigate()
  
  return (
    <div>
        <Header />
        <div className='border-y-3 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
            <h1 className='text-2xl font-semibold my-2 text-orange-400'>All Booking Reports</h1>
            <hr />

            <table className='w-full mt-15'>
              <tr>
                <th className='border p-2 bg-orange-500 text-white'>Booking Id</th>
                <th className='border p-2 bg-orange-500 text-white'>customer Name</th>
                <th className='border p-2 bg-orange-500 text-white'>customer Email</th>
                <th className='border p-2 bg-orange-500 text-white'>Customer contact</th>
                <th className='border p-2 bg-orange-500 text-white'>Booking date</th>
                <th className='border p-2 bg-orange-500 text-white'>Action</th>
              </tr>
              <tr>
                <td className='border border-orange-200 p-2 text-center '>1</td>
                <td className='border border-orange-200 p-2 text-center '>helo</td>
                <td className='border border-orange-200 p-2 text-center '>helo@123</td>
                <td className='border border-orange-200 p-2 text-center '>1234567890</td>
                <td className='border border-orange-200 p-2 text-center '>12/12/2021</td>
                <td className='border border-orange-200 p-2 text-center '>
                  <button onClick={()=> navigate(`/booking-details/:id`)} className='bg-green-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-green-600'>View details</button>
                </td>
              </tr>
            </table>
        </div>
        <Footer />
    </div>
  )
}

export default AllBookingReport