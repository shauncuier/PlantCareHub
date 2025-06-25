import React from 'react';
import { Link } from 'react-router';
import { FaLeaf, FaHome, FaSearch } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 text-center px-4">
            <div className="max-w-2xl mx-auto">
                {/* Animated Plant Icon */}
                <div className="mb-8">
                    <div className="relative">
                        <FaLeaf className="text-9xl text-green-500 mx-auto animate-bounce" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">!</span>
                        </div>
                    </div>
                </div>

                {/* 404 Title */}
                <div className="mb-6">
                    <h1 className="text-8xl font-bold text-green-600 dark:text-green-400 mb-2 animate-pulse">
                        4<FaLeaf className="inline text-6xl mx-2" />4
                    </h1>
                    <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                        Oops! This plant doesn't exist
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                        Looks like you've wandered into an empty garden! 🌱
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                        The page you're looking for might have been moved, deleted, or never existed. 
                        Let's get you back to growing your plant collection!
                    </p>
                </div>

                {/* Suggestions Box */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        What would you like to do?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="text-center">
                            <FaHome className="text-3xl text-blue-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Go to Homepage</p>
                        </div>
                        <div className="text-center">
                            <FaSearch className="text-3xl text-purple-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Browse All Plants</p>
                        </div>
                        <div className="text-center">
                            <FaLeaf className="text-3xl text-green-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400">Add New Plant</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <FaHome className="mr-2" />
                        Back to Home
                    </Link>
                    <Link
                        to="/plants"
                        className="inline-flex items-center bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-2 border-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                        <FaSearch className="mr-2" />
                        Browse Plants
                    </Link>
                </div>

                {/* Fun Plant Facts */}
                <div className="mt-12 bg-green-50 dark:bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-3">
                        🌿 Did you know?
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                        There are over 390,000 known plant species in the world, and scientists discover 
                        new ones every year! While you're here, why not add a new plant to your collection?
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 text-green-200 dark:text-green-800 opacity-50">
                    <FaLeaf className="text-4xl transform rotate-45" />
                </div>
                <div className="absolute bottom-10 right-10 text-green-200 dark:text-green-800 opacity-50">
                    <FaLeaf className="text-6xl transform -rotate-12" />
                </div>
                <div className="absolute top-1/4 right-20 text-green-200 dark:text-green-800 opacity-30">
                    <FaLeaf className="text-3xl transform rotate-90" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
