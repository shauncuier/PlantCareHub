import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import {
    FaLeaf,
    FaSearch,
    FaFilter,
    FaSort,
    FaEye,
    FaWater,
    FaSun,
    FaCalendarAlt,
    FaUser,
    FaSpinner,
    FaSortUp,
    FaSortDown,
    FaTag
} from 'react-icons/fa';

const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCareLevel, setSelectedCareLevel] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    const categories = ['succulent', 'fern', 'flowering', 'tropical', 'herbs', 'indoor', 'outdoor'];
    const careLevels = ['easy', 'moderate', 'difficult'];

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

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
        setCurrentPage(1);
    };

    // Filter and sort plants
    const filteredPlants = plants
        .filter(plant => {
            const normalizedSearch = (searchTerm ?? '').toLowerCase();
            const matchesSearch =
                (plant.name ?? '').toLowerCase().includes(normalizedSearch) ||
                (plant.description ?? '').toLowerCase().includes(normalizedSearch);
            const matchesCategory = !selectedCategory || plant.category === selectedCategory;
            const matchesCareLevel = !selectedCareLevel || plant.careLevel === selectedCareLevel;
            return matchesSearch && matchesCategory && matchesCareLevel;
        })
        .sort((a, b) => {
            let comparison = 0;
            
            switch (sortBy) {
                case 'name':
                    comparison = (a.name ?? '').localeCompare(b.name ?? '');
                    break;
                case 'category':
                    comparison = (a.category ?? '').localeCompare(b.category ?? '');
                    break;
                case 'wateringFrequency':
                    comparison = (a.wateringFrequency ?? '').localeCompare(b.wateringFrequency ?? '');
                    break;
                case 'careLevel': {
                    const levels = { easy: 1, moderate: 2, difficult: 3 };
                    const levelA = levels[a.careLevel?.toLowerCase()] ?? 0;
                    const levelB = levels[b.careLevel?.toLowerCase()] ?? 0;
                    comparison = levelA - levelB;
                    break;
                }
                case 'nextWatering': {
                    const dateA = a.nextWatering ? new Date(a.nextWatering).getTime() : 0;
                    const dateB = b.nextWatering ? new Date(b.nextWatering).getTime() : 0;
                    comparison = dateA - dateB;
                    break;
                }
                case 'addedDate': {
                    const addedA = a.addedDate ? new Date(a.addedDate).getTime() : 0;
                    const addedB = b.addedDate ? new Date(b.addedDate).getTime() : 0;
                    comparison = addedB - addedA; // Newest first by default
                    break;
                }
                default:
                    comparison = 0;
            }
            
            return sortOrder === 'asc' ? comparison : -comparison;
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
        setSortBy('name');
        setSortOrder('asc');
        setCurrentPage(1);
    };

    const SortIcon = ({ field }) => {
        if (sortBy !== field) return <FaSort className="text-gray-400" />;
        return sortOrder === 'asc' ? 
            <FaSortUp className="text-green-500" /> : 
            <FaSortDown className="text-green-500" />;
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

                {/* Plants Table */}
                {paginatedPlants.length > 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Plant
                                        </th>
                                        <th 
                                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                            onClick={() => handleSort('name')}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>Plant Name</span>
                                                <SortIcon field="name" />
                                            </div>
                                        </th>
                                        <th 
                                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                            onClick={() => handleSort('category')}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>Category</span>
                                                <SortIcon field="category" />
                                            </div>
                                        </th>
                                        <th 
                                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                            onClick={() => handleSort('wateringFrequency')}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>Watering Frequency</span>
                                                <SortIcon field="wateringFrequency" />
                                            </div>
                                        </th>
                                        <th 
                                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                            onClick={() => handleSort('careLevel')}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>Care Level</span>
                                                <SortIcon field="careLevel" />
                                            </div>
                                        </th>
                                        <th 
                                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                            onClick={() => handleSort('nextWatering')}
                                        >
                                            <div className="flex items-center space-x-1">
                                                <span>Next Watering</span>
                                                <SortIcon field="nextWatering" />
                                            </div>
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Added By
                                        </th>
                                        <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {paginatedPlants.map((plant) => {
                                        const careLevel = getCareLevel(plant.careLevel);
                                        
                                        return (
                                            <tr key={plant._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={plant.image}
                                                            alt={plant.name}
                                                            className="w-12 h-12 rounded-lg object-cover"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {plant.name || 'Unnamed Plant'}
                                                    </div>
                                                    {plant.description && (
                                                        <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                                                            {plant.description}
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                                        <FaTag className="mr-1" />
                                                        {plant.category || 'Uncategorized'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                                        <FaWater className="mr-2 text-blue-500" />
                                                        {plant.wateringFrequency || 'Not specified'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${careLevel.bg} ${careLevel.color}`}>
                                                        <FaSun className="mr-1" />
                                                        {plant.careLevel ? plant.careLevel.charAt(0).toUpperCase() + plant.careLevel.slice(1) : 'Easy'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                                        <FaCalendarAlt className="mr-2 text-orange-500" />
                                                        {formatDate(plant.nextWatering)}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                        <FaUser className="mr-2" />
                                                        {plant.userName || 'Plant Lover'}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <Link
                                                        to={`/plants/${plant._id}`}
                                                        className="inline-flex items-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200"
                                                    >
                                                        <FaEye className="mr-1" />
                                                        View Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
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
