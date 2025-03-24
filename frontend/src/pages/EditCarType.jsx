import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AddTable from '../Components/AddTable/AddTable'

function EditCarType() {
    const labelPlacholder = [
        { label: "Car Type", placeholder: "Enter Car Type Name", for:'car-type' },
        { label: "Description of type", placeholder: "Enter Description of Car Type", for:'car-type' },
    ]
  return (
    <div>
        <Header />
        <AddTable label={labelPlacholder} heading='Edit Car Type' button='Edit Car Type' />
        <Footer />
    </div>
  )
}

export default EditCarType