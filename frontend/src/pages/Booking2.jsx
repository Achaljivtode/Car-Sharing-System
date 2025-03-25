import React, { useState } from 'react';
import {
    //   Car, 
    //   Users, 
    Calendar,
    //   Settings, 
    //   CreditCard, 
    //   Menu,
    //   X,
    Bell,
    Search,
    Filter,
    MoreVertical,
    Clock,
    MapPin,
    //   CircleDollarSign,
    //   CalendarCheck,
    CalendarX,
    CalendarClock
} from 'lucide-react';
import SideBar from '../Components/SideBar/SideBar';

function Booking2() {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const bookings = [
        {
            id: 'BK-2024-001',
            user: {
                name: 'Sarah Wilson',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            },
            car: {
                name: 'Tesla Model 3',
                image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            },
            //   startDate: '2024-03-20 09:00',
            //   endDate: '2024-03-20 17:00',
            fromLocation: 'pune',
            toLocation: 'Mumbai',
            status: 'Completed',
        },
        {
            id: 'BK-2024-002',
            user: {
                name: 'Michael Brown',
                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            },
            car: {
                name: 'BMW i3',
                image: 'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            },
            fromLocation: 'pune',
            toLocation: 'HYD',
            status: 'Pending',

        },
        {
            id: 'BK-2024-003',
            user: {
                name: 'Emma Davis',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            },
            car: {
                name: 'Audi e-tron',
                image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            },
            fromLocation: 'HYD',
            toLocation: 'Mumbai',
            status: 'Completed',

        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Pending':
                return <CalendarClock className="w-4 h-4 text-yellow-500" />;
            case 'Completed':
                return <CalendarX className="w-4 h-4 text-gray-500" />;
            default:
                return <Calendar className="w-4 h-4" />;
        }
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'Completed':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Bookings</h2>
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

                {/* Bookings Content */}
                <main className="p-6">
                    {/* Search and Filters */}
                    <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search bookings..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <select
                                    value={selectedFilter}
                                    onChange={(e) => setSelectedFilter(e.target.value)}
                                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Bookings</option>
                                    {/* <option value="active">Active</option> */}
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <Filter className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                New Booking
                            </button>
                        </div>
                    </div>

                    {/* Bookings Table */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TO Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th> */}
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {booking.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img className="h-8 w-8 rounded-full" src={booking.user.image} alt="" />
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">{booking.user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img className="h-8 w-12 rounded object-cover" src={booking.car.image} alt="" />
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">{booking.car.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3">
                                                <div className="mr-1 text-gray-700">{booking.fromLocation}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="ml-3">
                                                <div className="mr-1 text-gray-700">{booking.toLocation}</div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {getStatusIcon(booking.status)}
                                                <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                        </td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <CircleDollarSign size={14} className="mr-1 text-gray-400" />
                        <span className="text-sm text-gray-900">${booking.payment.amount}</span>
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.payment.status === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.payment.status}
                        </span>
                      </div>
                    </td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {/* <button className="text-gray-400 hover:text-gray-600">
                                                <MoreVertical size={20} />
                                            </button> */}
                                            <button className="text-gray-400 hover:text-gray-600">
                                                {
                                                    booking.status === 'Pending' ? (
                                                        <button
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                        >
                                                            Confirm Booking
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                        >
                                                            Cancel Booking
                                                        </button>
                                                    )
                                                }
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="flex-1 flex justify-between sm:hidden">
                                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        Previous
                                    </button>
                                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
                                            <span className="font-medium">3</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Previous</span>
                                                Previous
                                            </button>
                                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                                1
                                            </button>
                                            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Next</span>
                                                Next
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Booking2;