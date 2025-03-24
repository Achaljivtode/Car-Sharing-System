import React from 'react'
import '../styles.css'; 
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table from '../Components/Table/Table'

function AllCarTypeReports() {
    const userHeading = ['Sr.No','Type Name', 'Type Description', 'Action']
    const userData = [
        // data values only
        [
          '1',
          'BMW',
          'hello',
          [
            <button className="viewButton">View</button>,
            <button className="deleteButton">Delete</button>
          ]
        ],
    ];
  return (
    <div>
        <Header />
        <Table tableHeading={userHeading} tableData={userData} heading='All Car Type' />
        <Footer />
    </div>
  )
}

export default AllCarTypeReports