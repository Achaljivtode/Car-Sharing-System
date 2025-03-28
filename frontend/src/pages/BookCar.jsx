import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { CiSearch } from "react-icons/ci";
// import cars from "../constant/cars";
import { useNavigate } from "react-router-dom";
import { fetchCars } from "../api";

function BookCar() {
  const [cars, setCars] = useState([]);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleBookNow = (carId) => {
    const role = localStorage.getItem("role");
    if (role) {
      navigate(`/book-car/${carId}`);
    } else {
      navigate("/login");
    }
  };
  //   const redirectFunc = () => {
  //     role ? navigate(`/book-car/:id`) : navigate("/login");
  //   };

  useEffect(() => {
    const loadCars = async () => {
      const carData = await fetchCars(); // Fetch data dynamically
      if (carData) {
        console.log("Fetched Cars:", carData);
        setCars(carData);
      }
    };

    loadCars();
  }, []);

  const [formData, setFormdata] = useState({
    Pick: "Nagpur", // from location
    Drop: "Pune", //to location
    From: "2025-01-03", //from date
    To: "2025-01-04", // to date
  });
  const [price, setprice] = useState({
    Min: "120",
    Max: "480",
  });
  const [search, SetSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    bmw: false,
    honda: false,
    audi: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedOptions({ ...selectedOptions, [name]: checked });
  };

  console.log(selectedOptions);

  return (
    <div className="border bg-gray-200">
      <Header />
      <div className=" max-w-7xl mx-auto my-10">
        {/* booking details */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="flex flex-col m-2  bg-gray-100 p-3 rounded-md">
            <label htmlFor="pickUp" className="text-sm text-gray-500">
              Pick-Up Location
            </label>
            <input
              type="text"
              id="PickUp"
              className="outline-none  p-1 rounded-md"
              value={formData.Pick}
              onChange={(e) =>
                setFormdata({ ...formData, Pick: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
            <label htmlFor="drop-off" className="text-sm text-gray-500">
              Drop-Off Location
            </label>
            <input
              type="text"
              id="drop-off"
              className="outline-none border-gray-300  p-1 rounded-md"
              value={formData.Drop}
              onChange={(e) =>
                setFormdata({ ...formData, Drop: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
            <label htmlFor="from-date" className="text-sm text-gray-500">
              Pick-Up Location
            </label>
            <input
              type="date"
              id="from-date"
              className="outline-none border-gray-300  p-1 rounded-md"
              value={formData.From}
              onChange={(e) =>
                setFormdata({ ...formData, From: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
            <label htmlFor="to-date" className="text-sm text-gray-500">
              Pick-Up Location
            </label>
            <input
              type="date"
              id="to-date"
              className="outline-none border-gray-300  p-1 rounded-md"
              value={formData.To}
              onChange={(e) => setFormdata({ ...formData, To: e.target.value })}
            />
          </div>
        </div>

        <div className="flex m-2 bg-gray-100">
          {/* filters  */}
          <div className=" w-1/4 p-5">
            {/* price - budget */}
            <div>
              <h1 className="ml-3 text-lg font-semibold mb-1">
                Price & Budget
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col m-2 border border-gray-300 p-3 rounded-md">
                  <label htmlFor="min-price" className="text-sm text-gray-500">
                    Min Price
                  </label>
                  <input
                    type="number"
                    id="min-price"
                    className="outline-none  p-1 rounded-md"
                    value={price.Min}
                    onChange={(e) =>
                      setprice({ ...price, Min: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col m-2 border border-gray-300 p-3 rounded-md">
                  <label htmlFor="max-price" className="text-sm text-gray-500">
                    Max Price
                  </label>
                  <input
                    type="number"
                    id="max-price"
                    className="outline-none  p-1 rounded-md"
                    value={price.Max}
                    onChange={(e) =>
                      setprice({ ...price, Max: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Models */}
            <div className="p-3">
              <h1 className="text-xl font-semibold">Brands</h1>
              <div className="mt-5">
                <div className="flex">
                  <input
                    type="checkbox"
                    className="w-4 hover:cursor-pointer"
                    name="bmw"
                    id="bmw"
                    checked={selectedOptions.bmw}
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">BMW</p>
                </div>
                <div className="flex mt-2">
                  <input
                    type="checkbox"
                    className="w-4 hover:cursor-pointer"
                    name="honda"
                    id="honda"
                    checked={selectedOptions.honda}
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Honda</p>
                </div>
                <div className="flex mt-2">
                  <input
                    type="checkbox"
                    className="w-4 hover:cursor-pointer"
                    name="audi"
                    id="audi"
                    checked={selectedOptions.audi}
                    onChange={handleCheckboxChange}
                  />
                  <p className="ml-2">Audi</p>
                </div>
              </div>
            </div>
          </div>

          {/* cars */}
          <div className="border-l border-gray-300 w-3/4 p-10">
            {/* search */}
            <div className="border  border-gray-300  rounded-lg flex">
              <CiSearch className=" text-2xl h-10 w-10 p-2" />
              <input
                type="text"
                className="outline-none w-full p-1"
                placeholder="Search With Brand"
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
              />
            </div>

            <h2 className="my-10">Results</h2>

            {/* car-card */}

            {cars.map((car, index) => (
              <div
                key={index}
                className="border mx-auto w-[90%] mt-5 border-gray-300 bg-gray-200 p-5 rounded-lg "
              >
                <div className=" flex">
                  <div className="w-[40%] ml-10 mt-10">
                    <h1 className="text-lg text-gray-500 ">{car.car_model}</h1>
                    <p className="text-4xl mt-1">{car.carType_name}</p>
                    <p className="text-lg text-gray-500">{car.Company_name}</p>
                  </div>
                  <div className="">
                    <img
                      src={car.car_image_url}
                      alt={car.car_type}
                      className="h-[200px] w-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4 px-9 p-1">
                  <div className="flex">
                    <p className=" rounded-2xl bg-green-600 text-white px-5 py-1">
                      {car.status ? car.status : "Available"}
                    </p>
                    <p className="border border-gray-400 rounded-2xl px-5 py-1 ml-3">
                      {car.seats} seats
                    </p>
                    <button
                      onClick={() => handleBookNow(car.id)}
                      className="border border-gray-400 bg-green-600 hover:cursor-pointer hover:bg-green-700 text-white rounded-2xl px-5 py-1 ml-3"
                    >
                      Book Now
                    </button>
                  </div>
                  <p>
                    <span className="text-3xl font-semibold">
                      {car.price_per_day}
                    </span>
                    /day
                  </p>
                </div>
                {/* <button className='border '>Book Now</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookCar;

// import React, { useEffect, useState } from "react";
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";
// import { useNavigate } from "react-router-dom";
// import { fetchCars } from "../api"; // Import API functions

// function BookCar() {
//   const role = localStorage.getItem("role");
//   const navigate = useNavigate();
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCar, setSelectedCar] = useState("");

//   const [formData, setFormData] = useState({
//     Pick: "",
//     Drop: "",
//     From: "",
//     To: "",
//   });

//   useEffect(() => {
//     const getCars = async () => {
//       const carData = await fetchCars();
//       if (carData) {
//         setCars(carData);
//         setLoading(false);
//       } else {
//         setError("Failed to fetch cars");
//         setLoading(false);
//       }
//     };
//     getCars();
//   }, []);

//   const handleBookCar = async () => {
//     if (!selectedCar) {
//       alert("Please select a car");
//       return;
//     }
//     const bookingData = {
//       car: selectedCar,
//       pickup_date: formData.From,
//       drop_date: formData.To,
//     };
//     const response = await bookCar(bookingData);
//     if (response) {
//       alert("Car booked successfully!");
//       navigate("/confirmation"); // Redirect to confirmation page
//     } else {
//       alert("Booking failed. Please try again.");
//     }
//   };

//   return (
//     <div className="border bg-gray-200">
//       <Header />
//       <div className="max-w-7xl mx-auto my-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
//           <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
//             <label className="text-sm text-gray-500">Pick-Up Location</label>
//             <input
//               type="text"
//               className="outline-none p-1 rounded-md"
//               value={formData.Pick}
//               onChange={(e) =>
//                 setFormData({ ...formData, Pick: e.target.value })
//               }
//             />
//           </div>

//           <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
//             <label className="text-sm text-gray-500">Drop-Off Location</label>
//             <input
//               type="text"
//               className="outline-none p-1 rounded-md"
//               value={formData.Drop}
//               onChange={(e) =>
//                 setFormData({ ...formData, Drop: e.target.value })
//               }
//             />
//           </div>

//           <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
//             <label className="text-sm text-gray-500">Pick-Up Date</label>
//             <input
//               type="date"
//               className="outline-none p-1 rounded-md"
//               value={formData.From}
//               onChange={(e) =>
//                 setFormData({ ...formData, From: e.target.value })
//               }
//             />
//           </div>

//           <div className="flex flex-col m-2 bg-gray-100 p-3 rounded-md">
//             <label className="text-sm text-gray-500">Drop-Off Date</label>
//             <input
//               type="date"
//               className="outline-none p-1 rounded-md"
//               value={formData.To}
//               onChange={(e) => setFormData({ ...formData, To: e.target.value })}
//             />
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold my-4">Available Cars</h2>
//         {loading ? (
//           <p>Loading cars...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {cars.map((car) => (
//               <div
//                 key={car.id}
//                 className={`p-4 border rounded-lg cursor-pointer ${
//                   selectedCar === car.id ? "bg-blue-200" : "bg-white"
//                 }`}
//                 onClick={() => setSelectedCar(car.id)}
//               >
//                 <h3 className="text-lg font-semibold">{car.car_name}</h3>
//                 <p>Type: {car.car_type}</p>
//                 <p>Company: {car.car_company}</p>
//                 <p>Price per day: ₹{car.price}</p>
//                 <img
//                   src={car.car_image_url}
//                   alt="Car"
//                   className="w-full h-32 object-cover mt-2 rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         <button
//           onClick={handleBookCar}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
//         >
//           Book Now
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default BookCar;
