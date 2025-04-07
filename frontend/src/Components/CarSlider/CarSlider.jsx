import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cars } from '../../data';



export default function CarSlider() {
  return (
    <div className=" py-24 bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of premium vehicles available for your next journey.
          </p>
        </div>

        <div className=" relative">
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
            {cars.map((car) => (
              <div
                key={car.id}
                className="min-w-[300px] bg-white rounded-xl shadow-md overflow-hidden snap-start"
              >
                <div className="h-48">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {car.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {car.make} {car.model}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{car.year}</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${car.price}/day
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}