import React from 'react'

function ContactUs() {
  return (
    <div className='rounded-3xl shadow-[0px_10px_20px_rgba(0,0,0,0.5)] max-w-xl py-10 mx-auto  my-10'>
        <h1 className='text-3xl text-center py-5 font-semibold'>Contact US</h1>
        <form action="" >
            <div className='flex flex-col'>
                <input type="text" className='border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md ' placeholder="Full Name" required />
                <input type="text" className='border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md ' placeholder="Email" required />
                <input type="text" className='border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md ' placeholder="Mobile" required />
                <input type="text" className='border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md ' placeholder="Message" required />
                <input type="submit" value={'SUBMIT'} className='border bg-blue-500 text-white border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md ' placeholder="Message" />
            </div>
        </form>
    </div>
  )
}

export default ContactUs