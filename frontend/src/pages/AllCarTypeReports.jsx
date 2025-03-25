import React, { useEffect, useState } from "react";
import "../styles.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { getCarTypeReport, getCarTypeById } from "../api";

function AllCarTypeReports() {
  const [carType, setCarType] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCarType() {
      const carTypeData = await getCarTypeReport();
      console.log("fetched all Car Reports :", carTypeData);
      if (carTypeData) {
        setCarType(carTypeData);
      }
    }
    getCarType();
  }, []);

  // Delete function
  const handleDelete = async (carTypeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car type?"
    );
    if (confirmDelete) {
      const success = await getCarTypeById(carTypeId);
      if (success) {
        setCarType(carType.filter((car) => car.id !== carTypeId)); // Remove from state
      }
    }
  };

  const userHeading = ["ID", "Type Name", "Type Description", "Action"];
  const userData = carType.map((car) => [
    car.id,
    car.car_type,
    car.description,

    [
      <button className="deleteButton" onClick={() => handleDelete(car.id)}>
        Delete
      </button>,
    ],
  ]);

  // data values only

  return (
    <div>
      <Header />
      <Table
        tableHeading={userHeading}
        tableData={userData}
        heading="All Car Type"
      />
      <Footer />
    </div>
  );
}

export default AllCarTypeReports;
