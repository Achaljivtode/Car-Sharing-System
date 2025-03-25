import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AddTable from "../Components/AddTable/AddTable";
import { addcarType } from "../api";

function AddCartype() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    car_type: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addcarType(formData);

    if (response) {
      setMessage("Car Type added successfully!");
      setFormData({ car_type: "", description: "" }); // Reset form
    } else {
      setMessage("Error adding car type. Please try again.");
      alert("Error submitting Car Type");
    }
  };
  const labelPlacholder = [
    { label: "Car Type", placeholder: "Enter Car Type Name", for: "car-type" },
    {
      label: "Description of type",
      placeholder: "Enter Description of Car Type",
      for: "car-type",
    },
  ];
  return (
    <div>
      <Header />
      <AddTable
        label={labelPlacholder}
        heading="Add Car Type"
        button="ADD Car Type"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      {message && <p className="text-center text-green-500">{message}</p>}
      <Footer />
    </div>
  );
}

export default AddCartype;
