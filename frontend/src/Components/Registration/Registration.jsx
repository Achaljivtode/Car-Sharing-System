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
    user_image: null, // File input
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, user_image: files[0] }); //  Fix file upload
    } else if (name === "dob") {
      const formattedDate = value; //  Ensure correct date format
      setFormData({ ...formData, dob: formattedDate });
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

    // Create FormData object for file upload
    const userData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "confirm_password") {
        //  Remove confirm_password
        userData.append(key, value);
      }
    });

    console.log(
      " Data Sent to Backend:",
      Object.fromEntries(userData.entries())
    ); //  Debugging

    try {
      const response = await registerUser(userData);
      if (response) {
        alert(" Registration Successful!");
      } else {
        alert(" Registration Failed!");
      }
    } catch (error) {
      console.error(
        " Error registering user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="my-20 p-5 max-w-7xl mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <img
            src="/Resources/Images/hero-bg.jpg"
            className="w-full h-[550px]"
            alt="Registration"
          />
        </div>
        <div className="my-5">
          <form className="" onSubmit={handleSubmit}>
            <div className="mx-auto grid grid-cols-2 w-full">
              <input
                type="text"
                name="full_name"
                className="border m-2 p-3 rounded-md border-gray-400"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                className="border m-2 p-3 rounded-md border-gray-400"
                placeholder="User Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-2">
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                required
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
              <input
                type="email"
                name="email"
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone_number"
                onChange={handleChange}
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                placeholder="Mobile Number"
                required
              />
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                required
              />
              <input
                type="password"
                name="password"
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirm_password"
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                placeholder="Address"
                onChange={handleChange}
                required
              />
              <input
                type="file"
                name="user_image"
                accept="image/*"
                onChange={handleChange}
                className="border block w-full p-3 mb-3 rounded-md border-gray-400"
                required
              />
              <input
                type="submit"
                value="REGISTER"
                className="border bg-blue-400 text-white hover:bg-blue-500 hover:cursor-pointer block w-full p-3 mb-3 rounded-md border-gray-400"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
