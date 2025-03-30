import React from "react";
import { useNavigate } from "react-router-dom";

function HeroServiceCard({ car }) {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/login/`); //  Pass car details
  };

  return (
    <div className="mb-10 mx-4 overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer bg-white rounded-xl shadow-lg">
      <div className="aspect-w-16 aspect-h-9 p-4">
        <img
          src={car.car_image_url || "/Resources/Images/hero-bg.jpg"}
          alt={car.car_model}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="px-6 pb-6">
        <h2 className="text-center my-2 text-xl font-semibold">
          {car.car_model}
        </h2>
        <p className="text-center">Owned by: {car.car_owner}</p>
        <p className="text-center text-green-600 font-semibold">
          Price per day: ₹{car.price_per_hour}
        </p>

        {/*  Book Now Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => handleBookNow()}
            className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroServiceCard;
