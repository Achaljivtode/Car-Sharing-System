import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table from '../Components/Table/Table'

function AllCustomerReports() {
    const userHeading =['Sr.No','Image','Name','Mobile','Email','Date Of Birth','Action']
    const userData = [
      [
        1,
        <img src="/Resources/Cars/bmw 3 series.png" alt="" className='image' />,  // customer image
        'John Doe',
        '1234567890',
        'johndoe@example.com',
        '1990-01-01',
        [<button className='viewButton'>view</button>,
          <button className='deleteButton'>Delete</button>]
        
      ]
    ]
  return (
    <div>
        <Header />
        <Table tableHeading={userHeading} tableData={userData} heading='All Customer' />
        <Footer />
    </div>
  )
}

export default AllCustomerReports