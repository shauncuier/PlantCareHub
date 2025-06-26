/**
 * DashboardAllItems page component.
 * Displays all plant items in an admin view for the dashboard.
 * Fetches all plant data and renders in a responsive card grid.
 * Implements best practices for React state, effects, and UI structure.
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye, FaTag, FaUser, FaWater, FaSun, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const DashboardAllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/plants`)
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-8 text-green-700 tracking-tight">All Items (Admin View)</h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map(item => (
            <div key={item._id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{item.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    <FaTag className="mr-1" />
                    {item.category || 'Uncategorized'}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                    <FaSun className="mr-1" />
                    {item.careLevel ? item.careLevel.charAt(0).toUpperCase() + item.careLevel.slice(1) : 'Easy'}
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 mb-2">
                  <FaWater className="mr-1 text-blue-500" />
                  {item.wateringFrequency || 'Not specified'}
                </div>
                <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 mb-2">
                  <FaCalendarAlt className="mr-1 text-orange-500" />
                  {item.addedDate ? new Date(item.addedDate).toLocaleDateString() : 'N/A'}
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <FaUser className="mr-1" />
                  {item.userName || 'Plant Lover'}
                </div>
              </div>
              <Link
                to={`/plants/${item._id}`}
                className="mt-3 inline-flex items-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 justify-center"
              >
                <FaEye className="mr-1" />
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardAllItems;
