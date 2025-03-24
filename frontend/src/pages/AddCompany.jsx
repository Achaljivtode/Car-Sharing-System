import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AddTable from '../Components/AddTable/AddTable'

function AddCompany() {
    const labelPlacholder = [
        { label: "Company Name", placeholder: "Enter Company Name", for:'company-name' },
        { label: "Description of Company", placeholder: "Enter Company Description", for:'company-description' },
    ]
  return (
    <div>
        <Header />
        <AddTable label={labelPlacholder} heading='Add New Company' button='ADD COMPANY' />
        <Footer />
    </div>
  )
}

export default AddCompany