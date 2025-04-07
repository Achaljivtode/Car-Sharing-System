import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { registerUser } from "../../api";

function Registration() {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    role: "customer",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    address: "",
    dob: "",
    user_image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, user_image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    const userData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "confirm_password") {
        userData.append(key, value);
      }
    });

    try {
      const response = await registerUser(userData);
      if (response) {
        alert("Registration Successful!");
      } else {
        alert("Registration Failed!");
      }
    } catch (error) {
      console.error("Error registering user:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="my-10 p-5 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-center items-center text-center lg:text-left px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Join CarShare Today!</h2>
          <p className="text-lg text-gray-700 mb-6">Sign up now and enjoy hassle-free car rentals with a seamless booking experience.</p>
          <img
            src="/Resources/Images/hero-bg.jpg"
            className="w-full max-h-96 rounded-2xl shadow-lg object-cover"
            alt="Registration"
          />
        </div>
        <div className= "bg-white p-7 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="full_name" className={inputStyle} placeholder="Full Name" onChange={handleChange} required />
            <input type="text" name="username" className={inputStyle} placeholder="User Name" onChange={handleChange} required />
            <select name="role" id="role" value={formData.role} onChange={handleChange} className={inputStyle} required>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
            <input type="email" name="email" className={inputStyle} placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone_number" className={inputStyle} placeholder="Mobile Number" onChange={handleChange} required />
            <input type="date" name="dob" className={inputStyle} onChange={handleChange} required />
            <input type="password" name="password" className={inputStyle} placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirm_password" className={inputStyle} placeholder="Confirm Password" onChange={handleChange} required />
            <input type="text" name="address" className={inputStyle} placeholder="Address" onChange={handleChange} required />
            <input type="file" name="user_image" accept="image/*" className={inputStyle} onChange={handleChange} required />
            <input type="submit" value="REGISTER" className="bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 cursor-pointer md:col-span-2" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;

// Additional Styles
const inputStyle = "border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-full";
const fileUploadStyle = "border border-dashed border-gray-400 p-3 rounded-md text-gray-500 hover:bg-gray-50 cursor-pointer w-full text-center";
