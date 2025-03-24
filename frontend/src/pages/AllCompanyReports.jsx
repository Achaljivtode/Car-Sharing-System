import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table from '../Components/Table/Table'

function AllCompanyReports() {
    const userHeading = ['Sr.No', 'Company Name', 'Company Description','Action']
    const userdata = [
      [
        1,                                          // Sr.No
        'Company 1',                                // Company Name
        'This is the description of company 1.',    // Company Description
        [
          <button className='viewButton'>View</button>, 
          <button className='deleteButton'>Delete</button> 
        ]

      ]
    ]
  return (
    <div>
        <Header />
        <Table tableHeading={userHeading} tableData={userdata} heading='All Company' />
        <Footer />
    </div>
  )
}

export default AllCompanyReports