import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AddTable from '../Components/AddTable/AddTable'

function AddCartype() {
    const labelPlacholder = [
        { label: "Car Type", placeholder: "Enter Car Type Name", for:'car-type' },
        { label: "Description of type", placeholder: "Enter Description of Car Type", for:'car-type' },
    ]
  return (
    <div>
        <Header />
        <AddTable label={labelPlacholder} heading='Add Car Type' button='ADD Car Type' />
        <Footer />
    </div>
  )
}

export default AddCartype