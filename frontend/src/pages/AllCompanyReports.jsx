import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Table from "../Components/Table/Table";
import { useNavigate } from "react-router-dom";
import { getCompanyReport } from "../api";

function AllCompanyReports() {
  const [company, setComapny] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCompanies() {
      const companyData = await getCompanyReport();
      console.log("fetch all company report :", companyData);
      if (companyData) {
        setComapny(companyData);
      }
    }
    getCompanies();
  }, []);

  const userHeading = [
    "Sr.No",
    "Company Name",
    "Company Description",
    "Action",
  ];
  const userdata = company.map((company) => [
    company.id, // Sr.No
    company.company_name, // Company Name
    company.description, // Company Description
    [
      <button
        className="editButton"
        onClick={() => navigate("/company-report/edit/:id")}
      >
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
        tableData={userdata}
        heading="All Company"
      />
      <Footer />
    </div>
  );
}

export default AllCompanyReports;
