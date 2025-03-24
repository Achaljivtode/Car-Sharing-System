import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Table2 from '../Components/Table2/Table2'

function Account() {
    const [formData, setFormData] = useState({});
    
    const label = [
        { name: 'username',label: 'UserName', placeholder: 'Enter Name' },
        { name: 'email' ,label: 'Email', placeholder: 'Enter Email' },
        { name: 'mobile' ,label: 'Mobile', placeholder: 'Enter Mobile Number' },
        { name: 'dob' ,label: 'Date Of Birth', placeholder: 'Enter DOB' },
        { name: 'gender' ,label: 'Gender', placeholder: 'Enter Gender' },
        { name: 'address' ,label: 'Address', placeholder: 'Enter Address' },
        { name: 'country' ,label: 'Country', placeholder: 'Enter Country' },
        { name: 'state' ,label: 'State', placeholder: 'Enter State' },
        { name: 'city' ,label: 'City', placeholder: 'Enter City' },
        { name: 'image' ,label: 'Image', placeholder: 'Enter Image' },

    ];

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleBtn = () => {
        console.log('Form Data:', formData);
    };
  return (
    <div>
        <Header />
        <Table2 label={label} heading='My Account' button='Submit' handleBtn={handleBtn} handleChange={handleChange} formData={formData} />
        <Footer />
    </div>
  )
}

export default Account