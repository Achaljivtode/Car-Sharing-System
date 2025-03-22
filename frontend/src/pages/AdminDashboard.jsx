import React from 'react'
import Header from '../Components/Header/Header'

function AdminDashboard() {
  return (
    <div >
      <Header />
      <div className='border p-10 w-full h-screen flex flex-col'>
        <div className='flex flex-row justify-between mb-20'>
          <h1 className='text-2xl font-semibold'>Details</h1>
          <input type="date" className='border p-2 w-1/6' />
        </div>
        <table className='border'>
          <tr>
            <th className='border p-3 bg-gray-300'>Sr.No</th>
            <th className='border p-3 bg-gray-300'>Customer Name</th>
            <th className='border p-3 bg-gray-300'>Car Name</th>
            <th className='border p-3 bg-gray-300'>Car-Type</th>
            <th className='border p-3 bg-gray-300'>Status</th>
          </tr>
          <tr>
            <th className='border p-3 font-normal'>1</th>
            <th className='border p-3 font-normal'>Rahul</th>
            <th className='border p-3 font-normal'>BMW 3 series</th>
            <th className='border p-3 font-normal'>4 wheeler</th>
            <th className='border p-3 font-normal'>Activate</th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard