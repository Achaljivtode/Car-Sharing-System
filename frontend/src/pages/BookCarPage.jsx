import React from 'react'
import BookCarForm from '../Components/BookCarForm/BookCarForm'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function BookCarPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

        <BookCarForm />
      </div>
      <Footer />
    </div>
  )
}

export default BookCarPage


// import React, { useState, useEffect } from "react";
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";
// import { useParams, useNavigate } from "react-router-dom";

// function BookCarPage() {
//   const [customerName, setCustomerName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [dropDate, setDropDate] = useState("");
//   const [pickupAddress, setPickupAddress] = useState("");
//   const [dropAddress, setDropAddress] = useState("");
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");

//   const { id } = useParams(); // Extract car ID from URL
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);

//   // Fetch car details from API
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/cars/${id}/`);
//         if (!response.ok) throw new Error("Failed to fetch car details");
//         const carData = await response.json();
//         setCar(carData);
//         setPickupAddress(carData.pickup_addr || "");
//         setDropAddress(carData.drop_addr || "");
//       } catch (error) {
//         console.error("Error fetching car details:", error);
//       }
//     };
//     fetchCarDetails();
//   }, [id]);

//   // Auto-fill logged-in user details
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) {
//       setCustomerName(userData.full_name || "");
//       setContactNumber(userData.phone_number || "");
//       setEmail(userData.email || "");
//     }
//   }, []);

//   // Validate form fields
//   const validateInputFields = () => {
//     const errors = {};
//     if (!customerName) errors.customerName = "Customer name is required";
//     if (!contactNumber) errors.contactNumber = "Contact number is required";
//     if (!email) errors.email = "Email is required";
//     if (!pickupDate) errors.pickupDate = "Pickup date is required";
//     if (!dropDate) errors.dropDate = "Drop date is required";
//     if (!pickupAddress) errors.pickupAddress = "Pickup address is required";
//     if (!dropAddress) errors.dropAddress = "Drop address is required";

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // Handle booking form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateInputFields()) return;

//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (!userData) {
//       alert("You need to be logged in to book a car.");
//       return;
//     }

//     const bookingData = {
//       car: id,
//       user: userData.id, // Logged-in user ID
//       pickup_date: pickupDate,
//       drop_date: dropDate,
//       pickup_addr: pickupAddress,
//       drop_addr: dropAddress,
//     };

//     try {
//       const response = await fetch("http://localhost:8000/api/bookings/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error("Booking failed. Please try again.");
//       setMessage("Booking Successful! Redirecting...");
//       setTimeout(() => navigate("/booking-reports"), 2000);
//     } catch (error) {
//       console.error(error);
//       setMessage(error.message);
//     }
//   };

//   if (!car) return <p>Loading car details...</p>;

//   return (
//     <div>
//       <Header />
//       <div className="border-y-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-y-amber-600 max-w-7xl mx-auto my-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] p-10">
//         <div className="md:w-full">
//           <h1 className="text-2xl font-semibold my-2 text-orange-400">
//             Booking Details
//           </h1>
//           <hr className="mb-5" />
//           {message && <p className="text-green-600">{message}</p>}

//           <form onSubmit={handleSubmit}>
//             <div className="flex-col p-2">
//               <input
//                 type="text"
//                 className="border border-gray-300 px-5 w-full p-2 outline-none"
//                 placeholder="Customer Name"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//               />
//               {errors.customerName && <p className="text-red-500">{errors.customerName}</p>}
//             </div>

//             <div className="flex-col p-2">
//               <input
//                 type="number"
//                 className="border border-gray-300 px-5 w-full p-2 outline-none"
//                 placeholder="Contact Number"
//                 value={contactNumber}
//                 onChange={(e) => setContactNumber(e.target.value)}
//               />
//               {errors.contactNumber && <p className="text-red-500">{errors.contactNumber}</p>}
//             </div>

//             <div className="flex-col p-2">
//               <input
//                 type="email"
//                 className="border border-gray-300 px-5 w-full p-2 outline-none"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <p className="text-red-500">{errors.email}</p>}
//             </div>

//             <div className="flex-col p-2">
//               <input
//                 type="date"
//                 className="border border-gray-300 px-5 w-full p-2 outline-none"
//                 placeholder="Pickup Date"
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)}
//               />
//               {errors.pickupDate && <p className="text-red-500">{errors.pickupDate}</p>}
//             </div>

//             <div className="flex-col p-2">
//               <input
//                 type="date"
//                 className="border border-gray-300 px-5 w-full p-2 outline-none"
//                 placeholder="Drop Date"
//                 value={dropDate}
//                 onChange={(e) => setDropDate(e.target.value)}
//               />
//               {errors.dropDate && <p className="text-red-500">{errors.dropDate}</p>}
//             </div>

//             <div className="flex-col p-2">
//               <input
//                 type="submit"
//                 value="Book"
//                 className="border bg-blue-500 hover:bg-blue-600 text-white text-xl px-5 w-full p-2 outline-none"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default BookCarPage;


