import React from 'react'

function AddTable({ label, heading, button }) {
    return (
        <div className='border-y-3 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
            <h1 className='text-orange-400 text-2xl mb-2 font-semibold'>{heading}</h1>
            <hr />

            <div className='w-full my-10'>
                {
                    label.map((item, index) => (
                        <div key={index} className=' flex justify-between gap-2 my-5'>
                            <label htmlFor={item.for} className='text-lg font-semibold'>{item.label}</label>
                            {index % 2 === 0 ? (
                                <input type="text" name={item.for} id={item.for} placeholder={item.placeholder} className='border-2 border-gray-300 rounded-md p-3 w-3/4' />
                            ) : (
                                <textarea name={item.for} id={item.for} placeholder={item.placeholder} cols={119} rows={4} className='border-2 border-gray-300 rounded-md p-3'></textarea>
                            )}
                        </div>
                    ))
                }
            </div>
            <div>
                <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold p-3 w-full rounded hover:cursor-pointer'>{button}</button>
            </div>
        </div>
    )
}

export default AddTable