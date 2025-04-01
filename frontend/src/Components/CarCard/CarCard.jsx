import React from 'react';
import PropTypes from 'prop-types';
import { Fuel, Gauge, Tag } from 'lucide-react';

CarCard.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    fuelType: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onBook: PropTypes.func.isRequired,
};

export default function CarCard({ car, onBook }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          ${car.price}/day
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{car.make} {car.model}</h3>
        <p className="text-gray-600 mb-4">{car.location}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="h-4 w-4 text-gray-500" />
            <span className="text-sm">{car.year}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        <button
          onClick={() => onBook(car)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}