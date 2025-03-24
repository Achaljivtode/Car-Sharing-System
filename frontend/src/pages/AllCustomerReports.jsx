import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";
import { fetchCustomers } from "../api";

function AllCustomerReports() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    async function getCustomers() {
      const customerData = await fetchCustomers();
      console.log("fetch all customers :", customerData);
      if (customerData) {
        setCustomer(customerData);
      }
    }
    getCustomers();
  }, []);
  const userHeading = [
    "Sr.No",
    "Image",
    "Name",
    "Mobile",
    "Email",
    "Date Of Birth",
    "Action",
  ];
  const userData = customer.map((user) => [
    user.id,
    <img src={user.user_image_url} alt={user.username} className="image" />, // customer image
    user.full_name,
    user.phone_number,
    user.email,
    user.dob,
    <button className="deleteButton">Delete</button>,
  ]);

  return (
    <div>
      <Header />
      <Table
        tableHeading={userHeading}
        tableData={userData}
        heading="All Customer"
      />
      <Footer />
    </div>
  );
}

export default AllCustomerReports;
