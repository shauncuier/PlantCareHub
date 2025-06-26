/**
 * DashboardOverview page component.
 * Shows summary statistics for the dashboard: total items, user items, and user info.
 * Fetches data from the backend and displays in a responsive grid.
 * Implements best practices for React state, effects, and UI structure.
 */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext.js";
import axios from "axios";
import { FaList, FaUser, FaSeedling } from "react-icons/fa";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    // Fetch total items
    axios.get(`${import.meta.env.VITE_API_URL}/plants`)
      .then(res => setTotalItems(res.data.length))
      .catch(() => setTotalItems(0));
    // Fetch my items
    if (user?.uid) {
      axios.get(`${import.meta.env.VITE_API_URL}/plants?userId=${user.uid}`)
        .then(res => setMyItems(res.data.length))
        .catch(() => setMyItems(0));
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-extrabold mb-8 text-green-700 tracking-tight">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div className="bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-700 dark:to-emerald-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white">
          <FaList className="text-4xl mb-3" />
          <div className="text-lg font-semibold mb-1">Total Items</div>
          <div className="text-3xl font-extrabold mb-1">{totalItems}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white">
          <FaUser className="text-4xl mb-3" />
          <div className="text-lg font-semibold mb-1">My Items</div>
          <div className="text-3xl font-extrabold mb-1">{myItems}</div>
        </div>
        <div className="bg-gradient-to-br from-emerald-400 to-green-600 dark:from-emerald-700 dark:to-green-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white">
          <FaSeedling className="text-4xl mb-3" />
          <div className="text-lg font-semibold mb-1">User</div>
          <div className="text-2xl font-bold mb-1">{user?.displayName || "N/A"}</div>
          <div className="text-sm text-white/80">{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
