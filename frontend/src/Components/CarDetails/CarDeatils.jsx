import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Car, CircleDollarSign, Hash, Binary } from "lucide-react";
import { fetchCarsById } from "../../api";

const CarDetails = ({ carId }) => {
  // const { carId } = useParams();
  const [car, setCar] = useState(null);

  console.log("Car ID:", carId);

  useEffect(() => {
    const getCar = async () => {
      if (!carId) {
        console.error("Car ID is undefined!");
        return;
      }
      try {
        const data = await fetchCarsById(carId);
        if (data) {
          setCar(data);
        } else {
          console.error("No car data found.");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    getCar();
  }, [carId]);

  if (!carId) {
    return (
      <p className="text-center text-gray-600">Error: No Car ID provided.</p>
    );
  }

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full lg:w-[500px] bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <img
          src={car.car_image_url}
          alt={car.car_model}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4 grid grid-cols-2">
        <div className="flex items-center gap-3 text-gray-700">
          <Car className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Car Model</p>
            <p className="font-semibold">{car.car_model}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Hash className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Car Number</p>
            <p className="font-semibold">{car.car_number}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Binary className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Model Number</p>
            <p className="font-semibold">{car.car_model}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <CircleDollarSign className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Price per Hour</p>
            <p className="font-semibold text-blue-600">${car.price_per_hour}</p>
          </div>
        </div>
      </div>

      {/* <div className="pt-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Features</h3>
          <ul className="text-sm text-blue-700 grid grid-cols-2 gap-2">
            <li>✓ Autopilot</li>
            <li>✓ 358mi Range</li>
            <li>✓ Heated Seats</li>
            <li>✓ Premium Audio</li>
            <li>✓ 5 Seats</li>
            <li>✓ Fast Charging</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default CarDetails;
