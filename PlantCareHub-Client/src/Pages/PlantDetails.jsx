import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { 
    FaLeaf, 
    FaWater, 
    FaSun, 
    FaThermometerHalf, 
    FaCalendarAlt, 
    FaUser, 
    FaHeart, 
    FaShare, 
    FaArrowLeft,
    FaClock,
    FaInfoCircle,
    FaCheckCircle,
    FaExclamationTriangle,
    FaLightbulb
} from 'react-icons/fa';

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/plants/${id}`);
                setPlant(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plant:', error);
                setLoading(false);
            }
        };
        fetchPlant();
    }, [id]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCareLevel = (level) => {
        const levels = {
            easy: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30', icon: FaCheckCircle },
            moderate: { color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30', icon: FaExclamationTriangle },
            difficult: { color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30', icon: FaInfoCircle }
        };
        return levels[level?.toLowerCase()] || levels.easy;
    };

    const getHealthStatus = (status) => {
        const statusMap = {
            healthy: { color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
            'needs attention': { color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
            'poor': { color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/30' }
        };
        return statusMap[status?.toLowerCase()] || statusMap.healthy;
    };

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        // Add API call to save favorite status
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: plant.name,
                text: `Check out this ${plant.name} plant!`,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading plant details...</p>
                </div>
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="flex justify-center items-center h-screen dark:bg-gray-900">
                <div className="text-center">
                    <FaLeaf className="text-6xl text-gray-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Plant Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">The plant you're looking for doesn't exist.</p>
                    <Link
                        to="/plants"
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                        Browse All Plants
                    </Link>
                </div>
            </div>
        );
    }

    const careLevel = getCareLevel(plant.careLevel);
    const healthStatus = getHealthStatus(plant.healthStatus);
    const CareLevelIcon = careLevel.icon;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-6">
                    <Link
                        to="/plants"
                        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Plants
                    </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="lg:grid lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-96 lg:h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <button
                                    onClick={handleFavorite}
                                    className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
                                        isFavorited 
                                            ? 'bg-red-500 text-white' 
                                            : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
                                    }`}
                                >
                                    <FaHeart />
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="p-3 bg-white/90 text-gray-700 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-all duration-200"
                                >
                                    <FaShare />
                                </button>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 lg:p-12">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                                        {plant.category}
                                    </span>
                                    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${healthStatus.bg} ${healthStatus.color}`}>
                                        <div className="w-2 h-2 bg-current rounded-full mr-2"></div>
                                        {plant.healthStatus || 'Healthy'}
                                    </div>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {plant.name}
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    {plant.description || 'A beautiful addition to any plant collection with unique characteristics and care requirements.'}
                                </p>
                            </div>

                            {/* Care Information Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className={`p-4 rounded-xl ${careLevel.bg}`}>
                                    <div className="flex items-center mb-2">
                                        <CareLevelIcon className={`${careLevel.color} mr-2`} />
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Care Level</span>
                                    </div>
                                    <div className={`text-lg font-bold ${careLevel.color} capitalize`}>
                                        {plant.careLevel || 'Easy'}
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                    <div className="flex items-center mb-2">
                                        <FaWater className="text-blue-600 mr-2" />
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Watering</span>
                                    </div>
                                    <div className="text-lg font-bold text-blue-600">
                                        {plant.wateringFrequency || 'Weekly'}
                                    </div>
                                </div>
                            </div>

                            {/* Watering Schedule */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                    <FaCalendarAlt className="mr-2 text-green-500" />
                                    Watering Schedule
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Last Watered</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.lastWatered ? formatDate(plant.lastWatered) : 'Not recorded'}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Next Watering</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.nextWatering ? formatDate(plant.nextWatering) : 'Not scheduled'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Plant Owner Info */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                                            <FaUser className="text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">Added by</div>
                                            <div className="font-semibold text-gray-900 dark:text-white">
                                                {plant.userName || 'Plant Enthusiast'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Added on</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.addedDate ? formatDate(plant.addedDate) : 'Unknown'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Care Tips Section */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <FaLightbulb className="mr-3 text-yellow-500" />
                        Care Tips for {plant.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                            <FaWater className="text-blue-500 text-2xl mb-3" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Watering</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Water when the top inch of soil feels dry. Ensure good drainage to prevent root rot.
                            </p>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                            <FaSun className="text-yellow-500 text-2xl mb-3" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lighting</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Provide bright, indirect light. Avoid direct sunlight which can scorch the leaves.
                            </p>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
                            <FaThermometerHalf className="text-red-500 text-2xl mb-3" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Temperature</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Maintain temperatures between 65-75°F (18-24°C) for optimal growth.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/plants"
                        className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 text-center"
                    >
                        Browse More Plants
                    </Link>
                    <Link
                        to="/add-plant"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 text-center"
                    >
                        Add Your Plant
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantDetails;
