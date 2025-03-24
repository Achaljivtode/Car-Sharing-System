import React from "react";
import { useNavigate } from "react-router-dom";

function HeroServiceCard({ car }) {
  const navigate = useNavigate(); //  Initialize navigation

  //  Handle redirection to the booking form
  const handleBookNow = (carId) => {
    navigate(`/book-car/${carId}`, { state: { car } }); //  Pass car details
  };

  return (
    <div className="mb-10 overflow-hidden transform transition duration-300 hover:scale-105 hover:cursor-pointer">
      <img
        src={car.car_image_url || "/Resources/Images/hero-bg.jpg"}
        alt={car.car_model}
        className="w-3/4 mx-auto rounded-lg"
      />
      <h2 className="text-center my-2 text-xl font-semibold">
        {car.car_model}
      </h2>
      <p className="text-center">Owned by: {car.car_owner}</p>
      <p className="text-center text-green-600 font-semibold">
        Price per day: ₹{car.price_per_day}
      </p>
      <p className="text-center text-gray-500">{car.description}</p>

      {/*  Book Now Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => handleBookNow(car.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default HeroServiceCard;
