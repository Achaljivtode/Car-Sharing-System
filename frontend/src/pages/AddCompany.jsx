import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AddTable from "../Components/AddTable/AddTable";
// import { addCompany } from "../api";

function AddCompany() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await addCompany(formData);

  //   if (response) {
  //     setMessage("Car Type added successfully!");
  //     setFormData({ company_name: "", description: "" }); // Reset form
  //   } else {
  //     setMessage("Error adding car type. Please try again.");
  //     alert("Error submitting Car Type");
  //   }
  // };

  const labelPlacholder = [
    {
      label: "Company Name",
      placeholder: "Enter Company Name",
      for: "company_name",
    },
    {
      label: "Description of Company",
      placeholder: "Enter Company Description",
      for: "description",
    },
  ];
  return (
    <div>
      <Header />
      <AddTable
        label={labelPlacholder}
        heading="Add New Company"
        button="ADD COMPANY"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      {message && <p className="text-center text-green-500">{message}</p>}
      <Footer />
    </div>
  );
}

export default AddCompany;
