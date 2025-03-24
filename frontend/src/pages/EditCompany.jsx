import React from 'react'
import Header from '../Components/Header/Header';
import AddTable from '../Components/AddTable/AddTable';
import Footer from '../Components/Footer/Footer';

function EditCompany() {
    const labelPlacholder = [
        { label: "Company Name", placeholder: "Enter Company Name", for:'company-name' },
        { label: "Description of Company", placeholder: "Enter Company Description", for:'company-description' },
    ]
  return (
    <div>
        <Header />
        <AddTable label={labelPlacholder} heading='Edit Company' button='EDIT COMPANY' />
        <Footer />
    </div>
  );
}

export default EditCompany