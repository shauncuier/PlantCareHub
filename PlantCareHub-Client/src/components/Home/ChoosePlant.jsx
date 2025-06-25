import React from 'react';
import { Link } from 'react-router';
import { FaLeaf, FaSun, FaWater, FaHome, FaHeart, FaShieldAlt } from 'react-icons/fa';

const ChoosePlant = () => {
    const plantCategories = [
        {
            id: 1,
            title: 'Beginner-Friendly Plants',
            description: 'Perfect for new plant parents who want to start their journey with easy-to-care-for plants.',
            icon: FaLeaf,
            color: 'bg-green-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            plants: [
                { name: 'Snake Plant', care: 'Low water, low light' },
                { name: 'Pothos', care: 'Moderate water, indirect light' },
                { name: 'ZZ Plant', care: 'Low water, any light' },
                { name: 'Spider Plant', care: 'Regular water, bright light' }
            ]
        },
        {
            id: 2,
            title: 'Low Light Champions',
            description: 'Thriving plants for darker corners and rooms with limited natural light.',
            icon: FaSun,
            color: 'bg-yellow-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            plants: [
                { name: 'Chinese Evergreen', care: 'Moderate water' },
                { name: 'Cast Iron Plant', care: 'Low water' },
                { name: 'Peace Lily', care: 'Regular water' },
                { name: 'Philodendron', care: 'Moderate water' }
            ]
        },
        {
            id: 3,
            title: 'Air Purifying Heroes',
            description: 'Natural air filters that help clean your indoor environment while looking beautiful.',
            icon: FaShieldAlt,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            plants: [
                { name: 'Rubber Plant', care: 'Low water, bright light' },
                { name: 'Boston Fern', care: 'High humidity, indirect light' },
                { name: 'Aloe Vera', care: 'Low water, bright light' },
                { name: 'Bamboo Palm', care: 'Regular water, indirect light' }
            ]
        },
        {
            id: 4,
            title: 'Pet-Safe Options',
            description: 'Beautiful plants that are safe for homes with curious cats and dogs.',
            icon: FaHeart,
            color: 'bg-pink-500',
            bgColor: 'bg-pink-50 dark:bg-pink-900/20',
            plants: [
                { name: 'Boston Fern', care: 'High humidity' },
                { name: 'Parlor Palm', care: 'Moderate water' },
                { name: 'Prayer Plant', care: 'Regular water' },
                { name: 'Ponytail Palm', care: 'Low water' }
            ]
        },
        {
            id: 5,
            title: 'Bathroom Plants',
            description: 'Humidity-loving plants perfect for steamy bathroom environments.',
            icon: FaWater,
            color: 'bg-teal-500',
            bgColor: 'bg-teal-50 dark:bg-teal-900/20',
            plants: [
                { name: 'Orchid', care: 'High humidity, indirect light' },
                { name: 'Bird of Paradise', care: 'High humidity, bright light' },
                { name: 'Ferns', care: 'High humidity, low light' },
                { name: 'Air Plants', care: 'Misting, bright light' }
            ]
        },
        {
            id: 6,
            title: 'Apartment Living',
            description: 'Compact plants perfect for small spaces and urban living.',
            icon: FaHome,
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            plants: [
                { name: 'Succulents', care: 'Low water, bright light' },
                { name: 'Herbs', care: 'Regular water, bright light' },
                { name: 'Mini Monstera', care: 'Moderate water, indirect light' },
                { name: 'Fiddle Leaf Fig', care: 'Moderate water, bright light' }
            ]
        }
    ];

    const benefits = [
        {
            icon: FaLeaf,
            title: 'Improved Air Quality',
            description: 'Plants naturally filter indoor air pollutants'
        },
        {
            icon: FaHeart,
            title: 'Mental Wellness',
            description: 'Caring for plants reduces stress and anxiety'
        },
        {
            icon: FaHome,
            title: 'Beautiful Decoration',
            description: 'Living decor that enhances any space'
        },
        {
            icon: FaShieldAlt,
            title: 'Natural Humidity',
            description: 'Plants increase moisture in dry indoor air'
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Choose the Perfect Plant for Your Space
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Whether you're a beginner or seasoned plant parent, find the ideal green companion 
                        that matches your lifestyle, space, and experience level.
                    </p>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Icon className="text-green-600 dark:text-green-400 text-2xl" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Plant Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {plantCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div key={category.id} className={`${category.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}>
                                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white text-xl" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {category.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {category.description}
                                </p>
                                
                                <div className="space-y-2 mb-4">
                                    {category.plants.map((plant, plantIndex) => (
                                        <div key={plantIndex} className="flex items-center justify-between text-sm">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                                {plant.name}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                                                {plant.care}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                <Link
                                    to="/plants"
                                    className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                                >
                                    Browse these plants →
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Plant Care Quiz CTA */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
                    <FaLeaf className="text-4xl mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">
                        Not Sure Which Plant is Right for You?
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Take our quick plant personality quiz to discover the perfect green companion 
                        based on your lifestyle, experience, and space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/plants"
                            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                        >
                            Browse All Plants
                        </Link>
                        <Link
                            to="/add-plant"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
                        >
                            Share Your Plant
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChoosePlant;
