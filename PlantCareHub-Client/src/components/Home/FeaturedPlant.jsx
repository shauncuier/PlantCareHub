import React from 'react';
import { Link } from 'react-router';
import { FaLeaf, FaWater, FaSun, FaThermometerHalf, FaEye } from 'react-icons/fa';

const FeaturedPlant = ({ plant }) => {
    if (!plant) {
        return (
            <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <FaLeaf className="text-6xl text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No Featured Plant Yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Check back soon for our featured plant of the month!
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Plant of the Month
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover our carefully selected featured plant with detailed care instructions and growing tips.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Plant Image */}
                        <div className="relative">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-80 lg:h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                ⭐ Featured
                            </div>
                        </div>

                        {/* Plant Details */}
                        <div className="p-8">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {plant.name}
                                </h3>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                                    {plant.category}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {plant.description || 'A beautiful and unique plant that makes a perfect addition to any home or garden. Known for its distinctive characteristics and relatively easy care requirements.'}
                            </p>

                            {/* Care Information */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                                        <FaWater className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Watering</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.wateringFrequency || 'Weekly'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg mr-4">
                                        <FaSun className="text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Care Level</div>
                                        <div className="font-semibold text-gray-900 dark:text-white capitalize">
                                            {plant.careLevel || 'Easy'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4">
                                        <FaThermometerHalf className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Health Status</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.healthStatus || 'Excellent'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                                        <FaLeaf className="text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Last Watered</div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {plant.lastWatered ? new Date(plant.lastWatered).toLocaleDateString() : 'Not recorded'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link
                                to={`/plants/${plant._id}`}
                                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <FaEye className="mr-2" />
                                View Full Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPlant;
