import React from 'react'

function Table({ tableHeading, tableData, heading }) {
    return (
        <div className='border-y-3 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10'>
            <h1 className='text-orange-400 text-2xl mb-2 font-semibold'>{heading}</h1>
            <hr />
            <table className='w-full my-10'>
                <thead>
                    <tr>
                        {
                            tableHeading.map((heading, index) => (
                                <th key={index} className='border border-orange-600 text-orange-800 p-2 bg-orange-400 '>{heading}</th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((data, colIndex) => (
                                <td key={colIndex} className='border border-gray-300 text-center p-3'>
                                    {data}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table