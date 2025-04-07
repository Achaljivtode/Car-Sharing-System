import React from 'react';
import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

export default function Hero( { scrollToCars } ) {
  return (
    <div className="relative bg-gray-900 h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Journey Begins With Us
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the freedom of car sharing with our premium fleet. 
            Book your perfect ride today and enjoy the open road.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={scrollToCars} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Browse Cars <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}