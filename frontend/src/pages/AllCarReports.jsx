import React from 'react'
import '../styles.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table from '../Components/Table/Table'

function AllCarReports() {
    const userHeading = ['ID','Image', 'Owner Name', 'Contact','Car Name', 'Type', 'Company', 'Stock', 'Price', 'Action']
    const userData = [
        // data values only
        [
            '1',            // id
            <img src="/Resources/Cars/bmw 3 series.png" alt="image" className='image' />,
            'Aman Kumar',       // owner name
            '1234567890',       // Contact
            'AUdi 3 Series',    // Car Name
            'sedan',            // Type
            'audi',             // Company
            '10',               // Stock
            '1500',             // Price
            [
                <button className='viewButton'>View</button>,
                <button className='deleteButton'>Delete</button>

            ]
        ]
    ];
    return (
        <div>
            <Header />
            <Table tableHeading={userHeading} tableData={userData} heading='All Cars' />
            <Footer />
        </div>
    )
}

export default AllCarReports