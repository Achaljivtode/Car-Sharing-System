import React from 'react';
import { Car, CircleDollarSign, Hash, Binary } from 'lucide-react';

const CarDetails = () => {
  return (
    <div className="w-full lg:w-[500px] bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1536"
          alt="Tesla Model 3"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4 grid grid-cols-2">
        <div className="flex items-center gap-3 text-gray-700">
          <Car className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Car Model</p>
            <p className="font-semibold">Tesla Model 3</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Hash className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Car Number</p>
            <p className="font-semibold">XYZ-1234</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Binary className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Model Number</p>
            <p className="font-semibold">TM3-2024-LR</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <CircleDollarSign className="h-5 w-5" />
          <div>
            <p className="text-sm text-gray-500">Price per Hour</p>
            <p className="font-semibold text-blue-600">$35.00</p>
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
