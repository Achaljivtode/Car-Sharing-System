import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'lucide-react';

const SearchFiltersPropType = PropTypes.shape({
  location: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
});

SearchBar.propTypes = {
  filters: SearchFiltersPropType.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default function SearchBar({ filters, onFilterChange }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter location"
              className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.location}
              onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            />
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.transmission}
            onChange={(e) => onFilterChange({ ...filters, transmission: e.target.value })}
          >
            <option value="">Any</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.fuelType}
            onChange={(e) => onFilterChange({ ...filters, fuelType: e.target.value })}
          >
            <option value="">Any</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  );
}