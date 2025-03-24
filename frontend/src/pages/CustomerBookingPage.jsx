import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table from '../Components/Table/Table'
import { useNavigate } from 'react-router-dom'

function CustomerBookingPage() {
    const navigate = useNavigate()

    const userHeading = ['Booking ID', 'Car Name', 'Car Number', 'Car Type' , 'Booking Date', 'From' , 'To' , 'Action']
    const userData = [
        [ 
            1,
            'Toyota',
            'KA-01-GA-1234',
            'Sedan',
            '2022-01-01',
            'Delhi',
            'Mumbai',
            <button className='editButton' onClick={()=> navigate('/booking-details/:id')} >View</button>
        ],
    ]
  return (
    <div>
        <Header />
        <Table tableHeading={userHeading} tableData={userData} heading='My Booking' />
        <Footer />
    </div>
  )
}

export default CustomerBookingPage