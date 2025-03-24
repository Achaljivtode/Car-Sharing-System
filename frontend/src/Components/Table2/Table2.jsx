import React from 'react'

function Table2({ label, heading, button, handleBtn, handleChange, formData }) {
    return (
        <div className='border-y-3 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
            <form action="">
                <h1 className='text-orange-400 text-2xl mb-2 font-semibold'>{heading}</h1>
                <hr />

                <div className=' grid grid-cols-2  w-full my-10'>
                    {
                        label.map((item, index) => (
                            <div key={index} className='m-5 flex justify-between gap-2 my-5'>
                                <label htmlFor={item.name} className='text-lg font-semibold'>{item.label} :</label>
                                {
                                    item.label === 'Image' ?
                                        <input type='file' alt="user Image" name={item.name} id={item.name} placeholder={item.placeholder} className='border-2 border-gray-300 rounded-md py-1 px-3 w-3/4' required />

                                        :
                                        <input
                                            type="text"
                                            name={item.name}
                                            id={item.name}
                                            placeholder={item.placeholder}
                                            className='border-2 border-gray-300 rounded-md py-1 px-3 w-3/4'
                                            value={formData[item.name] || ''} // Bind state value
                                            onChange={handleChange} // Update state on change
                                            required
                                        />
                                }
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button onClick={handleBtn} className='bg-orange-400 hover:bg-orange-500 text-white font-bold p-3 w-full rounded hover:cursor-pointer'>{button}</button>
                </div>
            </form>
        </div>
    )
}

export default Table2