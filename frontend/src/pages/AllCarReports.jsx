import React from "react";
import "../styles.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { getAllCarReports } from "../api";
import { useEffect, useState } from "react";

function AllCarReports() {
  const [report, setReport] = useState([]);
  const navigate = useNavigate();
  const redirectCardeatils = () => {
    navigate("/car-details:id");
  };

  useEffect(() => {
    async function getCarReports() {
      const reportData = await getAllCarReports();
      console.log("fetched all Car Reports :", reportData);
      if (reportData) {
        setReport(reportData);
      }
    }
    getCarReports();
  }, []);

  const userHeading = [
    "ID",
    "Image",
    "Owner Name",
    "Contact",
    "Car Name",
    "Type",
    "Company",
    "Stock",
    "Price",
    "Action",
  ];
  const userData = report.map((car) => [
    // data values only
    car.id, // id
    <img src={car.car_image_url} alt="car" className="image" />,
    car.car_owner, // owner name
    car.user_contact, // Contact
    car.car_name, // Car Name
    car.car_type, // Type
    car.car_company, // Company
    car.stock, // Stock
    car.price, // Price
    [
      <button onClick={() => redirectCardeatils(car.id)} className="editButton">
        Edit
      </button>,
      <button className="deleteButton">Delete</button>,
    ],
  ]);
  return (
    <div>
      <Header />
      <Table
        tableHeading={userHeading}
        tableData={userData}
        heading="All Cars"
      />
      <Footer />
    </div>
  );
}

export default AllCarReports;
