/**
 * MyPlants page component.
 * Displays and manages the user's personal plant collection.
 * Supports viewing, deleting, and updating plants.
 * Implements best practices for React state, effects, and UI structure.
 */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { 
    FaLeaf, 
    FaEdit, 
    FaTrash, 
    FaEye, 
    FaPlus, 
    FaSpinner,
    FaTint,
    FaThermometerHalf,
    FaCalendarAlt,
    FaHeartbeat,
    FaTag
} from 'react-icons/fa';

const MyPlants = () => {
    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMyPlants = async () => {
            if (!user?.uid) return;

            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/plants?userId=${user.uid}`
                );
                setPlants(res.data);
            } catch (error) {
                console.error('Error fetching my plants:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMyPlants();
    }, [user?.uid]);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!',
            background: '#fff',
            customClass: {
                popup: 'rounded-2xl'
            }
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/plants/${id}`);
                setPlants(plants.filter(plant => plant._id !== id));

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your plant has been deleted.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            } catch (error) {
                console.error('Error deleting plant:', error);
                Swal.fire('Error', 'Failed to delete plant. Please try again.', 'error');
            }
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not set';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Loading your plants...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-green-500 p-3 rounded-full">
                            <FaLeaf className="text-white text-2xl" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        My Plant Collection
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Manage and track all your beautiful plants in one place
                    </p>
                </div>

                {plants.length === 0 ? (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 max-w-md mx-auto">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                <FaLeaf className="text-4xl text-gray-400 dark:text-gray-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                No Plants Yet
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Start building your plant collection by adding your first plant!
                            </p>
                            <Link
                                to="/add-plant"
                                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <FaPlus className="mr-2" />
                                Add Your First Plant
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Stats Bar */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                            {plants.length}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Total Plants</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                            {new Set(plants.map(p => p.category)).size}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Categories</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                            {plants.filter(p => p.healthStatus === 'Excellent' || p.healthStatus === 'Good').length}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Healthy Plants</div>
                                    </div>
                                </div>
                                <Link
                                    to="/add-plant"
                                    className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <FaPlus className="mr-2" />
                                    Add New Plant
                                </Link>
                            </div>
                        </div>

                        {/* Plants Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {plants.map(plant => (
                                <div
                                    key={plant._id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Plant Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Quick Actions Overlay */}
                                        <div className="absolute bottom-4 left-4 right-4 flex space-x-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <Link
                                                to={`/plants/${plant._id}`}
                                                className="flex-1 bg-white/90 text-gray-900 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-white transition-colors duration-200"
                                            >
                                                <FaEye className="mr-1" />
                                                View
                                            </Link>
                                            <Link
                                                to={`/update/${plant._id}`}
                                                className="flex-1 bg-blue-500/90 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                            >
                                                <FaEdit className="mr-1" />
                                                Edit
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Plant Info */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                                                {plant.name}
                                            </h3>
                                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                                <FaTag className="mr-1" />
                                                {plant.category}
                                            </span>
                                        </div>
                                        
                                        {plant.description && (
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                                                {plant.description}
                                            </p>
                                        )}
                                        
                                        {/* Plant Stats Grid */}
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-blue-600 dark:text-blue-400">
                                                    <FaThermometerHalf className="mr-2" />
                                                    <span>Care Level</span>
                                                </div>
                                                <span className="font-medium text-gray-900 dark:text-white capitalize">
                                                    {plant.careLevel || 'Not set'}
                                                </span>
                                            </div>
                                            
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-teal-600 dark:text-teal-400">
                                                    <FaTint className="mr-2" />
                                                    <span>Watering</span>
                                                </div>
                                                <span className="font-medium text-gray-900 dark:text-white">
                                                    {plant.wateringFrequency || 'Not set'}
                                                </span>
                                            </div>
                                            
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-purple-600 dark:text-purple-400">
                                                    <FaHeartbeat className="mr-2" />
                                                    <span>Health</span>
                                                </div>
                                                <span className={`font-medium ${
                                                    plant.healthStatus === 'Excellent' || plant.healthStatus === 'Good' 
                                                        ? 'text-green-600 dark:text-green-400'
                                                        : plant.healthStatus === 'Fair'
                                                        ? 'text-yellow-600 dark:text-yellow-400'
                                                        : 'text-red-600 dark:text-red-400'
                                                }`}>
                                                    {plant.healthStatus || 'Not set'}
                                                </span>
                                            </div>
                                            
                                            {plant.nextWatering && (
                                                <div className="flex items-center justify-between text-sm">
                                                    <div className="flex items-center text-orange-600 dark:text-orange-400">
                                                        <FaCalendarAlt className="mr-2" />
                                                        <span>Next Watering</span>
                                                    </div>
                                                    <span className="font-medium text-gray-900 dark:text-white">
                                                        {formatDate(plant.nextWatering)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Action Buttons */}
                                        <div className="flex space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <Link
                                                to={`/update/${plant._id}`}
                                                className="flex-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                                            >
                                                <FaEdit className="mr-1" />
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(plant._id)}
                                                className="flex-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200"
                                            >
                                                <FaTrash className="mr-1" />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MyPlants;
