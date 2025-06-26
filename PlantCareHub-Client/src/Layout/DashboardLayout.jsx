import React from "react";
import { Outlet, NavLink } from "react-router";
import { FaTachometerAlt, FaList, FaPlus, FaUser } from "react-icons/fa";

const DashboardLayout = () => {
  // Optionally, you can use AuthContext to show user info in the sidebar
  // import { AuthContext } from "../auth/AuthProvider";
  // const { user } = useContext(AuthContext);

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      {/* Topbar for mobile, sidebar for md+ */}
      <nav className="md:hidden flex items-center justify-between bg-gradient-to-r from-green-600 to-emerald-700 text-white px-2 py-3 shadow-lg sticky top-0 z-40">
        <span className="text-xl font-bold tracking-wide flex items-center">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </span>
        <button
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Open dashboard navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Drawer for mobile nav */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-gradient-to-b from-green-600 to-emerald-700 text-white flex flex-col py-10 px-6 shadow-xl">
            <div className="flex items-center mb-10">
              <div className="p-2 bg-white/20 rounded-lg mr-2">
                <FaTachometerAlt className="text-2xl text-white" />
              </div>
              <span className="text-2xl font-bold tracking-wide">Dashboard</span>
            </div>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/dashboard" end className={({ isActive }) =>
                `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                  isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
                }`
              } onClick={() => setSidebarOpen(false)}>
                <FaTachometerAlt className="mr-3" /> Overview
              </NavLink>
              <NavLink to="/dashboard/all-items" className={({ isActive }) =>
                `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                  isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
                }`
              } onClick={() => setSidebarOpen(false)}>
                <FaList className="mr-3" /> All Items
              </NavLink>
              <NavLink to="/dashboard/add-item" className={({ isActive }) =>
                `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                  isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
                }`
              } onClick={() => setSidebarOpen(false)}>
                <FaPlus className="mr-3" /> Add Item
              </NavLink>
              <NavLink to="/dashboard/my-items" className={({ isActive }) =>
                `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                  isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
                }`
              } onClick={() => setSidebarOpen(false)}>
                <FaUser className="mr-3" /> My Items
              </NavLink>
            </nav>
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close dashboard navigation"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col md:flex-row bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
        {/* Sidebar for md+ */}
        <aside className="hidden md:flex flex-col w-72 bg-gradient-to-b from-green-600 to-emerald-700 text-white py-10 px-6 shadow-xl rounded-tr-3xl rounded-br-3xl">
          <div className="flex items-center mb-10">
            <div className="p-2 bg-white/20 rounded-lg mr-2">
              <FaTachometerAlt className="text-2xl text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wide">Dashboard</span>
          </div>
          <nav className="flex flex-col space-y-2">
            <NavLink to="/dashboard" end className={({ isActive }) =>
              `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
              }`
            }>
              <FaTachometerAlt className="mr-3" /> Overview
            </NavLink>
            <NavLink to="/dashboard/all-items" className={({ isActive }) =>
              `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
              }`
            }>
              <FaList className="mr-3" /> All Items
            </NavLink>
            <NavLink to="/dashboard/add-item" className={({ isActive }) =>
              `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
              }`
            }>
              <FaPlus className="mr-3" /> Add Item
            </NavLink>
            <NavLink to="/dashboard/my-items" className={({ isActive }) =>
              `flex items-center px-5 py-3 rounded-xl transition font-medium text-lg ${
                isActive ? "bg-white/20 shadow font-bold" : "hover:bg-white/10"
              }`
            }>
              <FaUser className="mr-3" /> My Items
            </NavLink>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 md:ml-0 mt-4 md:mt-0">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-4 sm:p-8 min-h-[80vh]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
