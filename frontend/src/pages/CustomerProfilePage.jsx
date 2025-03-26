import React, { useState } from 'react';
import {
  Car,
  Clock,
  User,
  Calendar,
  MapPin,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import ProfilePage from '../Components/ProfilePage/ProfilePage';
// import ProfilePage from './components/ProfilePage';

// type Vehicle = {
//   id: string;
//   name: string;
//   type: string;
//   location: string;
//   price: number;
//   image: string;
//   available: boolean;
// };

// import PropTypes from 'prop-types';

// const BookingPropTypes = {
//   id: PropTypes.string.isRequired,
//   vehicle: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   status: PropTypes.oneOf(['active', 'completed', 'cancelled']).isRequired,
//   price: PropTypes.number.isRequired,
// };

function CustomerProfilePage() {
//   const [activeTab, setActiveTab] = useState<'available' | 'bookings' | 'profile'>('available');
const [activeTab, setActiveTab] = useState('available');
  
  const vehicles = [
    {
      id: '1',
      name: 'Tesla Model 3',
      type: 'Electric',
      location: 'Downtown',
      price: 35,
      image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800',
      available: true
    },
    {
      id: '2',
      name: 'BMW i4',
      type: 'Electric',
      location: 'Westside',
      price: 45,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800',
      available: true
    },
    {
      id: '3',
      name: 'Audi e-tron',
      type: 'Electric',
      location: 'Eastside',
      price: 50,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800',
      available: true
    }
  ];

  const bookings = [
    {
      id: '1',
      vehicle: 'Tesla Model S',
      date: '2024-03-15',
      status: 'active',
      price: 45
    },
    {
      id: '2',
      vehicle: 'BMW i3',
      date: '2024-03-10',
      status: 'completed',
      price: 35
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">CarShare</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500 cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {/* <button
            onClick={() => setActiveTab('available')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'available'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            <Car className="h-5 w-5 mr-2" />
            Available Cars
          </button> */}
          {/* <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'bookings'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            <Clock className="h-5 w-5 mr-2" />
            My Bookings
          </button> */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'profile'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </button>
        </div>

        {/* Search and Filter */}
        {activeTab === 'available' && (
          <div className="flex space-x-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for cars..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200">
              <Filter className="h-5 w-5 mr-2 text-gray-600" />
              Filters
            </button>
          </div>
        )}

        {/* Available Cars */}
        {activeTab === 'available' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                  <div className="flex items-center mt-2 text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{vehicle.location}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${vehicle.price}
                      <span className="text-sm text-gray-500">/hour</span>
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bookings */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 border-b last:border-b-0 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold">{booking.vehicle}</h3>
                  <div className="flex items-center mt-1 text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{booking.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'completed'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                  <span className="font-semibold">${booking.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Profile */}
        {activeTab === 'profile' && <ProfilePage />}
      </div>
    </div>
  );
}

export default CustomerProfilePage;