import React, { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { bookCar, getLoggedInUser } from "../../api";
("react-router-dom");
// import { useParams } from "react-router-dom";

const BookCarForm = ({ carId }) => {
  // const { carId } = useParams();
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    pickup_location: "",
    drop_location: "",
    pickup_date: "",
    drop_date: "",
    user: null,
    car: carId,
  });

  // console.log("user_id", formData.user_id);

  // Logged In user
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getLoggedInUser();
      setUser(userData);
      setFormData((prev) => ({ ...prev, user: userData.id }));
    };
    fetchData();
  }, []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Handle form submission logic here
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("form submitted", formData);

    if (!user) {
      alert("user is not logged in !");
      return;
    }

    if (!carId) {
      alert("Car ID is missing!");
      return;
    }

    // if (
    //   !formData.pickup_location ||
    //   !formData.drop_location ||
    //   !formData.pickup_date ||
    //   !formData.drop_date
    // ) {
    //   alert("All fields are required!");
    //   return;
    // }

    console.log("form submitted", formData);

    const bookCarData = {
      user: user?.id,
      car: carId,
      pickup_location: formData.pickup_location,
      drop_location: formData.drop_location,
      pickup_date: formData.pickup_date,
      drop_date: formData.drop_date,
    };
    console.log("📤 Sending Booking Data-----------------:", bookCarData);

    // console.log("car ----> ", car);

    try {
      const response = await bookCar(bookCarData);
      console.log("✅ Booking Response:", response.data);

      if (response) {
        alert("Car booked successfully!");

        setFormData({
          pickup_location: "",
          drop_location: "",
          pickup_date: "",
          drop_date: "",
          user: user?.id,
          car: carId,
        });
      } else {
        alert("failed to book the car . please try again");
        console.log("booking failed ", response);
      }
    } catch (error) {
      console.error(
        "❌ Error booking car:",
        error.response?.data || error.message
      );

      console.log("user.id ----> ", user.id);
      console.log("carId ----> ", carId);
      console.log("user ----> ", user);
      alert(
        `Error: ${error.response?.data?.message || "Something went wrong"}`
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Book a Car
      </h2>

      <div className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="pickup_location"
            value={formData.pickup_location}
            onChange={handleChange}
            placeholder="pickup_location "
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            name="drop_location"
            value={formData.drop_location}
            onChange={handleChange}
            placeholder="drop_location"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            name="pickup_date"
            value={formData.pickup_date}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            name="drop_date"
            value={formData.drop_date}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookCarForm;
