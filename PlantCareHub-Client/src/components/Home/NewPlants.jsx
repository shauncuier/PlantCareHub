import React from 'react';
import { Link } from 'react-router';
import { 
    FaLeaf, 
    FaCalendarAlt, 
    FaEye, 
    FaArrowRight, 
    FaClock
} from 'react-icons/fa';

const NewPlants = ({ plants = [] }) => {
    // Sort plants by addedDate to show most recent first and limit to 6
    const recentPlants = plants
        .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
        .slice(0, 6);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return 'Today';
        if (diffDays === 2) return 'Yesterday';
        if (diffDays <= 7) return `${diffDays} days ago`;
        
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <FaLeaf className="text-green-500 text-2xl mr-2" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Recently Added Plants
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover the latest additions to our plant collection. Fresh arrivals from our community of plant enthusiasts.
                    </p>
                </div>

                {/* Plants Grid */}
                {recentPlants?.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {recentPlants.map((plant, index) => (
                                <div
                                    key={plant._id}
                                    className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Plant Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={plant.image}
                                            alt={plant.name}
                                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        
                                        {/* New Badge for most recent plant */}
                                        {index === 0 && (
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                                                🆕 Latest
                                            </div>
                                        )}
                                        
                                        {/* Date Badge */}
                                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center">
                                            <FaClock className="mr-1" />
                                            {formatDate(plant.addedDate)}
                                        </div>
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* View Details Button */}
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <Link
                                                to={`/plants/${plant._id}`}
                                                className="w-full bg-white/90 text-gray-900 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-white transition-colors duration-200"
                                            >
                                                <FaEye className="mr-2" />
                                                View Details
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Plant Info */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                                                {plant.name}
                                            </h3>
                                            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                                                {plant.category}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                                            {plant.description || 'A beautiful addition to any plant collection.'}
                                        </p>
                                        
                                        {/* Plant Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">Care Level</div>
                                                <div className="text-sm font-bold text-blue-700 dark:text-blue-300 capitalize">
                                                    {plant.careLevel || 'Easy'}
                                                </div>
                                            </div>
                                            <div className="text-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">Watering</div>
                                                <div className="text-sm font-bold text-purple-700 dark:text-purple-300">
                                                    {plant.wateringFrequency || 'Weekly'}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Added By */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                                <FaCalendarAlt className="mr-1" />
                                                Added by {plant.userName || 'Plant Lover'}
                                            </div>
                                            <Link
                                                to={`/plants/${plant._id}`}
                                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium flex items-center group"
                                            >
                                                Learn More
                                                <FaArrowRight className="ml-1 text-xs group-hover:translate-x-1 transition-transform duration-200" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className="text-center">
                            <Link
                                to="/plants"
                                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                View All Plants ({plants.length})
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                            <FaLeaf className="text-4xl text-gray-400 dark:text-gray-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            No Plants Yet
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                            Be the first to add a plant to our community collection and help other plant enthusiasts discover new varieties.
                        </p>
                        <Link
                            to="/add-plant"
                            className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                        >
                            <FaLeaf className="mr-2" />
                            Add First Plant
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewPlants;
