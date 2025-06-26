/**
 * AllPlants page component.
 * Displays a searchable, filterable, and paginated list of all plants.
 * Implements category, care level, owner, watering, and year filters.
 * Uses best practices for React state, effects, and UI structure.
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import {
    FaLeaf,
    FaSearch,
    FaFilter,
    FaEye,
    FaWater,
    FaSun,
    FaCalendarAlt,
    FaUser,
    FaSpinner,
    FaTag
} from 'react-icons/fa';

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCareLevel, setSelectedCareLevel] = useState('');
    const [selectedOwner, setSelectedOwner] = useState('');
    const [selectedWatering, setSelectedWatering] = useState('');
    const [selectedAddedYear, setSelectedAddedYear] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const categories = ['succulent', 'fern', 'flowering', 'tropical', 'herbs', 'indoor', 'outdoor'];
    const careLevels = ['easy', 'moderate', 'difficult'];

    // For filter dropdowns
    const owners = Array.from(new Set(plants.map(p => p.userName).filter(Boolean)));
    const wateringFrequencies = Array.from(new Set(plants.map(p => p.wateringFrequency).filter(Boolean)));
    const addedYears = Array.from(new Set(plants.map(p => p.addedDate ? new Date(p.addedDate).getFullYear() : null).filter(Boolean)));

    useEffect(() => {
        fetchPlants();
    }, []);

    const fetchPlants = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/plants`);
            setPlants(res.data);
        } catch (error) {
            console.error('Error fetching plants:', error);
        } finally {
            setLoading(false);
        }
    };

    // Filter plants
    const filteredPlants = plants
        .filter(plant => {
            const normalizedSearch = (searchTerm ?? '').toLowerCase();
            const matchesSearch =
                (plant.name ?? '').toLowerCase().includes(normalizedSearch) ||
                (plant.description ?? '').toLowerCase().includes(normalizedSearch);
            const matchesCategory = !selectedCategory || plant.category === selectedCategory;
            const matchesCareLevel = !selectedCareLevel || plant.careLevel === selectedCareLevel;
            const matchesOwner = !selectedOwner || plant.userName === selectedOwner;
            const matchesWatering = !selectedWatering || plant.wateringFrequency === selectedWatering;
            const matchesAddedYear = !selectedAddedYear || (plant.addedDate && new Date(plant.addedDate).getFullYear().toString() === selectedAddedYear);
            return matchesSearch && matchesCategory && matchesCareLevel && matchesOwner && matchesWatering && matchesAddedYear;
        });

    // Pagination
    const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPlants = filteredPlants.slice(startIndex, startIndex + itemsPerPage);

    const formatDate = (dateString) => {
        if (!dateString) return 'Not set';
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getCareLevel = (level) => {
        const levels = {
            easy: { color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
            moderate: { color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
            difficult: { color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/30' }
        };
        return levels[level?.toLowerCase()] || levels.easy;
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setSelectedCareLevel('');
        setSelectedOwner('');
        setSelectedWatering('');
        setSelectedAddedYear('');
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Loading plants collection...</p>
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
                        All Plants Collection
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our comprehensive collection of plants from around the world. Find the perfect green companion for your space.
                    </p>
                </div>

                {/* Filters and Controls */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {/* Search */}
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search plants..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Care Level Filter */}
                        <div className="relative">
                            <FaSun className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                value={selectedCareLevel}
                                onChange={(e) => setSelectedCareLevel(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                            >
                                <option value="">All Care Levels</option>
                                {careLevels.map(level => (
                                    <option key={level} value={level}>
                                        {level.charAt(0).toUpperCase() + level.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Owner Filter */}
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select
                                value={selectedOwner}
                                onChange={(e) => setSelectedOwner(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                            >
                                <option value="">All Owners</option>
                                {owners.map(owner => (
                                    <option key={owner} value={owner}>
                                        {owner}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Watering Frequency Filter */}
                        <div className="relative">
                            <FaWater className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                            <select
                                value={selectedWatering}
                                onChange={(e) => setSelectedWatering(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                            >
                                <option value="">All Watering</option>
                                {wateringFrequencies.map(wf => (
                                    <option key={wf} value={wf}>
                                        {wf}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Added Year Filter */}
                        <div className="relative">
                            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                            <select
                                value={selectedAddedYear}
                                onChange={(e) => setSelectedAddedYear(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                            >
                                <option value="">All Years</option>
                                {addedYears.map(year => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <button
                                onClick={clearFilters}
                                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                Clear Filters
                            </button>
                            <span className="text-gray-600 dark:text-gray-300">
                                {filteredPlants.length} plants found
                            </span>
                        </div>
                    </div>
                </div>

                {/* Card Grid */}
                {paginatedPlants.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {paginatedPlants.map((plant) => {
                            const careLevel = getCareLevel(plant.careLevel);
                            return (
                                <div key={plant._id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col">
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <div className="flex-1">
                                        <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">{plant.name || 'Unnamed Plant'}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{plant.description}</div>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                                <FaTag className="mr-1" />
                                                {plant.category || 'Uncategorized'}
                                            </span>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${careLevel.bg} ${careLevel.color}`}>
                                                <FaSun className="mr-1" />
                                                {plant.careLevel ? plant.careLevel.charAt(0).toUpperCase() + plant.careLevel.slice(1) : 'Easy'}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 mb-2">
                                            <FaWater className="mr-1 text-blue-500" />
                                            {plant.wateringFrequency || 'Not specified'}
                                        </div>
                                        <div className="flex items-center text-xs text-gray-700 dark:text-gray-300 mb-2">
                                            <FaCalendarAlt className="mr-1 text-orange-500" />
                                            {formatDate(plant.nextWatering)}
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                                            <FaUser className="mr-1" />
                                            {plant.userName || 'Plant Lover'}
                                        </div>
                                    </div>
                                    <Link
                                        to={`/plants/${plant._id}`}
                                        className="mt-3 inline-flex items-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 justify-center"
                                    >
                                        <FaEye className="mr-1" />
                                        View Details
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-16 text-center">
                        <FaLeaf className="text-6xl text-gray-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            No Plants Found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                            Try adjusting your search criteria or clear the filters to see all plants.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Previous
                        </button>

                        {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                            let pageNumber;
                            if (totalPages <= 5) {
                                pageNumber = index + 1;
                            } else if (currentPage <= 3) {
                                pageNumber = index + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNumber = totalPages - 4 + index;
                            } else {
                                pageNumber = currentPage - 2 + index;
                            }

                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                        currentPage === pageNumber
                                            ? 'bg-green-500 text-white'
                                            : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPlants;
