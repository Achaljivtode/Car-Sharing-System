import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function EditCarPage
() {
    return (
        <div>
            <Header />
            <div className='border-t-4 pt-10 border-t-amber-600 p-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] max-w-7xl mx-auto my-10' >

                <h1 className='text-orange-400 my-1 text-2xl font-semibold '>Edit Car Page</h1>
                <hr />
                
                <form action="#" className=' w-full p-5 mt-5'>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Car Number</label>
                        <input type="text" className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='Car Number' />
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Car Name</label>
                        <input type="text" className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='Car Name' />
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>To Location</label>
                        <input type="text" className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='To Location' />
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Car Type</label>
                        <select name="" id="" className='border p-3 rounded-md w-5/6 outline-none pr-2'>
                            <option value="">Select Car Type</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Company Name</label>
                        <select name="" id="" className='border p-3 rounded-md w-5/6 outline-none pr-2'>
                            <option value="">Select Company Name</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Price Per Day</label>
                        <input type="text" className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='Price Per Day' />
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Car Image</label>
                        <input type='file' className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='Car Image' />
                    </div>

                    <div className='flex justify-between my-3'>
                        <label htmlFor="" className='text-lg p-2 font-semibold'>Description</label>
                        <input type="text" className='border p-3 rounded-md w-5/6 outline-none pr-2' placeholder='Description' />
                    </div>

                    <div className='mt-10'>
                        <input type="submit" value='Submit' className='w-full font-bold bg-blue-400 p-3 rounded-md text-white hover:cursor-pointer hover:bg-blue-500' />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default EditCarPage
