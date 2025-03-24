import React, { useState } from "react";
import { enquiry } from "../../api";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await enquiry(formData);

    if (response) {
      alert("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", contact: "", message: "" }); // Reset form
    } else {
      alert("Error submitting enquiry.");
    }
  };
  return (
    <div className="rounded-3xl shadow-[0px_10px_20px_rgba(0,0,0,0.5)] max-w-xl py-10 mx-auto  my-10">
      <h1 className="text-3xl text-center py-5 font-semibold">Contact US</h1>
      <form onSubmit={handleSubmit} action="">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            className="border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md "
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            className="border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md "
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            className="border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md "
            placeholder="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            className="border border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md "
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value={"SUBMIT"}
            className="border bg-blue-500 text-white border-gray-300 w-3/4 mx-auto m-5 p-2 pl-5 rounded-md "
            placeholder="Message"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
