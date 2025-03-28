import React from 'react'
import BookCarForm from '../Components/BookCarForm/BookCarForm'
import CarDetails from '../Components/CarDetails/CarDeatils'
import Footer from '../Components/Footer/Footer'
import SideBar from '../Components/SideBar/SideBar'

function BookYourRide() {
    return (
        <div className="min-h-screen flex bg-gray-100 ">
            <SideBar />

            <div className="max-w-7xl mx-auto my-20 flex flex-col lg:flex-row gap-8 items-start justify-center">
                <BookCarForm />
                <CarDetails />
            </div>
        </div>
    )
}

export default BookYourRide