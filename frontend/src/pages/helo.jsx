// import React, { useState } from 'react';
import { 
//   Car, 
//   Users, 
//   Calendar, 
//   Settings, 
//   CreditCard, 
//   Menu,
//   X,
  ChevronUp,
  MapPin,
  Bell
} from 'lucide-react';
import SideBar from '../Components/SideBar/SideBar';

function Helo() {
    
    return (
        <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
        <SideBar />
      

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Admin"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { label: 'Total Vehicles', value: '124', change: '+12%', up: true },
              { label: 'Active Users', value: '2,847', change: '+18%', up: true },
              { label: 'Today\'s Bookings', value: '48', change: '-5%', up: false },
              { label: 'Revenue', value: '$12,847', change: '+24%', up: true }
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                <div className="mt-2 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <span className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.up ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                    <ChevronUp className={`${!stat.up && 'rotate-180'} h-4 w-4`} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
              <div className="mt-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        user: 'Sarah Wilson',
                        vehicle: 'Tesla Model 3',
                        location: 'Downtown',
                        status: 'Active',
                        time: '2 min ago'
                      },
                      {
                        user: 'Michael Brown',
                        vehicle: 'BMW i3',
                        location: 'Airport',
                        status: 'Completed',
                        time: '15 min ago'
                      },
                      {
                        user: 'Emma Davis',
                        vehicle: 'Nissan Leaf',
                        location: 'Central Park',
                        status: 'Pending',
                        time: '1 hour ago'
                      }
                    ].map((activity, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{activity.user}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{activity.vehicle}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-900">
                            <MapPin size={16} className="mr-1" />
                            {activity.location}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            activity.status === 'Active' 
                              ? 'bg-green-100 text-green-800'
                              : activity.status === 'Completed'
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {activity.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Helo;