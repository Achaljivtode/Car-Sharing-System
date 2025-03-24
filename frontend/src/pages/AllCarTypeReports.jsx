import React, { useEffect, useState } from "react";
import "../styles.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { getCarTypeReport } from "../api";

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
  const userHeading = ["Sr.No", "Type Name", "Type Description", "Action"];
  const userData = carType.map((car) => [
    car.id,
    car.car_type,
    car.description,

    [
      <button
        className="editButton"
        onClick={() => navigate("/car-type/edit/:id")}
      >
        Edit
      </button>,
      <button className="deleteButton">Delete</button>,
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
