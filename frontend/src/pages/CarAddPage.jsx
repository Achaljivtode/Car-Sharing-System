// import React, { useState, useEffect } from "react";
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";
// import { addCar, fetchAgents } from "../api";
// import { useNavigate } from "react-router-dom";

// function CarAddPage() {
//   const navigate = useNavigate();
//   const [agents, setAgents] = useState([]);
//   const [formData, setFormData] = useState({
//     agent: "",
//     car_model: "",
//     from_location: "",
//     to_location: "",
//     price_per_day: "",
//     description: "",
//     car_image: null,
//   });

//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const loadAgents = async () => {
//       const agentData = await fetchAgents();
//       setAgents(agentData);
//     };
//     loadAgents();
//   }, []);

//   //  handle input changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // handle file input seperately
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, car_image: e.target.files[0] });
//   };

//   // handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // validate fields
//     if (
//       !formData.agent ||
//       !formData.from_location ||
//       !formData.to_location ||
//       !formData.price_per_day ||
//       !formData.description ||
//       !formData.car_image
//     ) {
//       setMessage("All fields are required.");
//       return;
//     }

//     // call api to add car

//     const response = await addCar(formData);

//     if (response) {
//       setMessage("Car  added Successfully!");
//       setTimeout(() => navigate("/home"), 2000);
//     } else {
//       setMessage("Failed to add Car. please try again.");
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="border-t-4 pt-10 border-t-amber-600 p-10 shadow-[1px_10px_50px_rgba(0,0,0,0.15)] max-w-7xl mx-auto my-10">
//         <h1 className="text-orange-400 my-1 text-2xl font-semibold ">
//           ADD YOUR CAR
//         </h1>
//         <hr />
//         {message && <p className="text-red-500 text-center my-2">{message}</p>}
//         <form onSubmit={handleSubmit} action="#" className=" w-full p-5 mt-5">
//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               Agent
//             </label>
//             <select
//               name="agent"
//               className="border p-3 rounded-md w-5/6 outline-none"
//               value={formData.agent}
//               onChange={handleChange}
//             >
//               <option value="">Select Agent</option>
//               {agents.map((agent) => (
//                 <option key={agent.id} value={agent.id}>
//                   {agent.owner_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               Car
//             </label>
//             <select
//               name="car_model"
//               className="border p-3 rounded-md w-5/6 outline-none"
//               value={formData.agent}
//               onChange={handleChange}
//             >
//               <option value="">Select Car</option>
//               {agents.map((agent) => (
//                 <option key={agent.id} value={agent.id}>
//                   {agent.car_model}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               From Location
//             </label>
//             <input
//               type="text"
//               name="from_location"
//               className="border p-3 rounded-md w-5/6 outline-none pr-2"
//               placeholder="Car Name"
//               value={formData.from_location}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               To Location
//             </label>
//             <input
//               type="text"
//               name="to_location"
//               className="border p-3 rounded-md w-5/6 outline-none pr-2"
//               placeholder="To Location"
//               value={formData.to_location}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               Price Per Day
//             </label>
//             <input
//               type="number"
//               name="price_per_day"
//               className="border p-3 rounded-md w-5/6 outline-none"
//               placeholder="Enter Price Per Day"
//               value={formData.price_per_day}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               Car Image
//             </label>
//             <input
//               type="file"
//               name="car_image"
//               className="border p-3 rounded-md w-5/6 outline-none pr-2"
//               placeholder="Car Image"
//               onChange={handleFileChange}
//             />
//           </div>

//           <div className="flex justify-between my-3">
//             <label htmlFor="" className="text-lg p-2 font-semibold">
//               Description
//             </label>
//             <input
//               type="text"
//               name="description"
//               className="border p-3 rounded-md w-5/6 outline-none pr-2"
//               placeholder="Description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mt-10">
//             <input
//               type="submit"
//               value="ADD YOUR CAR"
//               className="w-full font-bold bg-blue-400 p-3 rounded-md text-white hover:cursor-pointer hover:bg-blue-500"
//             />
//           </div>
//         </form>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default CarAddPage;

// // ----------------------------------------------------------------------------------------------------
// // ==============================================================================================

// // import React, { useState, useEffect } from "react";
// // import Header from "../Components/Header/Header";
// // import Footer from "../Components/Footer/Footer";
// // import { addCar, fetchAgents, fetchCars } from "../api";
// // import { useNavigate } from "react-router-dom";

// // function CarAddPage() {
// //   const navigate = useNavigate();
// //   const [agents, setAgents] = useState([]);
// //   const [cars, setCars] = useState([]); // Stores cars of the selected agent
// //   const [filteredCars, setFilteredCars] = useState([]);
// //   const [selectedAgent, setSelectedAgent] = useState("");
// //   const [selectedCar, setSelectedCar] = useState("");
// //   const [formData, setFormData] = useState({
// //     agent: "",
// //     car_model: "",
// //     car_number: "",
// //     from_location: "",
// //     to_location: "",
// //     price_per_day: "",
// //     description: "",
// //     car_image: null,
// //   });

// //   const [message, setMessage] = useState("");

// //   // Fetch all agents on page load
// //   useEffect(() => {
// //     const loadAgents = async () => {
// //       const agentData = await fetchAgents();
// //       console.log("Fetched Agents :", agentData);

// //       setAgents(agentData || []); // Ensure it's an array
// //     };
// //     loadAgents();
// //   }, []);

// //   useEffect(() => {
// //     const loadCars = async () => {
// //       const carData = await fetchCars();
// //       setCars(carData || []);
// //     };
// //     loadCars();
// //   }, []);

// //   // Handle agent selection
// //   const handleAgentChange = (e) => {
// //     const agentId = e.target.value;
// //     setSelectedAgent(agentId);
// //     setSelectedCar("");
// //     setFormData((prev) => ({
// //       ...prev,
// //       agent: agentId,
// //       car_model: "",
// //       car_number: "",
// //     }));

// //     // filter cars based on the seleceted agents
// //     const filtered = cars.filter((car) => car.id == agentId);
// //     setFilteredCars(filtered);

// //     // Find selected agent and get their cars
// //     const selectedAgentData = agents.find((agent) => agent.id == agentId);
// //     console.log("Selected Agent Data:", selectedAgentData);

// //     const carList =
// //       selectedAgentData && selectedAgentData.cars ? selectedAgentData.cars : [];
// //     console.log("cars for selected agents:", carList);

// //     setCars(carList);
// //   };

// //   // Handle car selection and auto-fill car number
// //   const handleCarChange = (e) => {
// //     const carId = e.target.value;
// //     setSelectedCar(carId);

// //     // Find selected car and get its car number
// //     const selectedCarData = filteredCars.find((car) => car.id == carId);
// //     setFormData((prev) => ({
// //       ...prev,
// //       car_model: carId,
// //       car_number: selectedCarData ? selectedCarData.car_number : "",
// //     }));
// //   };

// //   // Handle other input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Handle file upload
// //   const handleFileChange = (e) => {
// //     setFormData((prev) => ({ ...prev, car_image: e.target.files[0] }));
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (
// //       !formData.agent ||
// //       !formData.car_model ||
// //       !formData.from_location ||
// //       !formData.to_location ||
// //       !formData.price_per_day ||
// //       !formData.description ||
// //       !formData.car_image
// //     ) {
// //       setMessage("All fields are required.");
// //       return;
// //     }

// //     // Add Authentication Token
// //     // const token = localStorage.getItem("token");
// //     // const response = await addCar(formData, token);

// //     const response = await addCar(formData);
// //     if (response) {
// //       setMessage("Car added successfully!");
// //       setTimeout(() => navigate("/home"), 2000);
// //     } else {
// //       setMessage("Failed to add car. Please try again.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <div className="border-t-4 pt-10 border-t-amber-600 p-10 shadow-lg max-w-7xl mx-auto my-10">
// //         <h1 className="text-orange-400 my-1 text-2xl font-semibold">
// //           ADD A CAR
// //         </h1>
// //         <hr />
// //         {message && <p className="text-red-500 text-center my-2">{message}</p>}
// //         <form onSubmit={handleSubmit} className="w-full p-5 mt-5">
// //           {/* Agent Selection */}
// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Select Agent</label>
// //             <select
// //               name="agent"
// //               className="border p-3 rounded-md w-5/6"
// //               value={selectedAgent}
// //               onChange={handleAgentChange}
// //             >
// //               <option value="">Choose an agent</option>
// //               {agents.length > 0 ? (
// //                 agents.map((agent) => (
// //                   <option key={agent.id} value={agent.id}>
// //                     {agent.owner_name}
// //                   </option>
// //                 ))
// //               ) : (
// //                 <option disabled>Loading agents...</option>
// //               )}
// //             </select>
// //           </div>

// //           {/* Car Selection */}
// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Select Car</label>
// //             <select
// //               name="car_model"
// //               className="border p-3 rounded-md w-5/6"
// //               value={selectedCar}
// //               onChange={handleCarChange}
// //               disabled={!selectedAgent}
// //             >
// //               <option value="">Choose a car</option>
// //               {filteredCars.length > 0 ? (
// //                 filteredCars.map((car) => (
// //                   <option key={car.id} value={car.id}>
// //                     {car.car_model}
// //                   </option>
// //                 ))
// //               ) : (
// //                 <option disabled>No cars available</option>
// //               )}
// //             </select>
// //           </div>

// //           {/* Auto-filled Car Number */}
// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Car Number</label>
// //             <input
// //               type="text"
// //               name="car_number"
// //               className="border p-3 rounded-md w-5/6 bg-gray-100"
// //               placeholder="Car Number"
// //               value={formData.car_number}
// //               readOnly
// //             />
// //           </div>

// //           {/* Other Form Fields */}
// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">From Location</label>
// //             <input
// //               type="text"
// //               name="from_location"
// //               className="border p-3 rounded-md w-5/6"
// //               placeholder="Enter From Location"
// //               value={formData.from_location}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">To Location</label>
// //             <input
// //               type="text"
// //               name="to_location"
// //               className="border p-3 rounded-md w-5/6"
// //               placeholder="Enter To Location"
// //               value={formData.to_location}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Price Per Day</label>
// //             <input
// //               type="number"
// //               name="price_per_day"
// //               className="border p-3 rounded-md w-5/6"
// //               placeholder="Enter Price"
// //               value={formData.price_per_day}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Description</label>
// //             <input
// //               type="text"
// //               name="description"
// //               className="border p-3 rounded-md w-5/6"
// //               placeholder="Enter Description"
// //               value={formData.description}
// //               onChange={handleChange}
// //             />
// //           </div>

// //           <div className="flex justify-between my-3">
// //             <label className="text-lg p-2 font-semibold">Car Image</label>
// //             <input
// //               type="file"
// //               name="car_image"
// //               className="border p-3 rounded-md w-5/6"
// //               onChange={handleFileChange}
// //             />
// //           </div>

// //           {/* Submit Button */}
// //           <div className="mt-10">
// //             <input
// //               type="submit"
// //               value="ADD CAR"
// //               className="w-full font-bold bg-blue-400 p-3 rounded-md text-white hover:cursor-pointer hover:bg-blue-500"
// //             />
// //           </div>
// //         </form>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default CarAddPage;
