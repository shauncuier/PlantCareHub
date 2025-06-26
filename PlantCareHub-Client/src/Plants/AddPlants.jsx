/**
 * AddPlants page component.
 * Provides a detailed form for users to add new plants to the collection.
 * Handles form state, validation, and submission to the backend.
 * Implements best practices for React state, effects, and UI structure.
 */
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import Swal from 'sweetalert2';
import {
    FaLeaf,
    FaImage,
    FaTag,
    FaFileAlt,
    FaThermometerHalf,
    FaTint,
    FaCalendarAlt,
    FaHeartbeat,
    FaPlus,
    FaSpinner
} from 'react-icons/fa';

const AddPlants = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        image: '',
        name: '',
        category: '',
        description: '',
        careLevel: '',
        wateringFrequency: '',
        lastWatered: '',
        nextWatering: '',
        healthStatus: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        if (!user) {
            Swal.fire('Unauthorized', 'You must be logged in to add a plant.', 'error');
            return;
        }

        setSubmitting(true);
        try {
            const currentDateTime = new Date().toISOString();

            const payload = {
                ...formData,
                userId: user.uid,
                userName: user.displayName || user.email,
                userEmail: user.email,
                createdAt: currentDateTime,
                addedDate: currentDateTime // Add addedDate for NewPlants component
            };

            const res = await axios.post(`${import.meta.env.VITE_API_URL}/plants`, payload);

            if (res.data.insertedId || res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Plant added successfully!',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                navigate('/');
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to add plant. Please try again.', 'error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-green-500 p-3 rounded-full">
                            <FaLeaf className="text-white text-2xl" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Add New Plant
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Share your beautiful plant with our community
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600">
                        <h2 className="text-xl font-semibold text-white flex items-center">
                            <FaPlus className="mr-2" />
                            Plant Information
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                <FaImage className="mr-2 text-green-500" />
                                Plant Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                placeholder="https://example.com/plant-image.jpg"
                                required
                            />
                        </div>

                        {/* Plant Name */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                <FaLeaf className="mr-2 text-green-500" />
                                Plant Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                placeholder="e.g., Monstera Deliciosa"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                <FaTag className="mr-2 text-green-500" />
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                                <option value="tropical">Tropical</option>
                                <option value="herbs">Herbs</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="cactus">Cactus</option>
                                <option value="bonsai">Bonsai</option>
                                <option value="orchids">Orchids</option>
                                <option value="climbers">Climbers</option>
                                <option value="shrubs">Shrubs</option>
                                <option value="aquatic">Aquatic</option>
                                <option value="grass">Grass</option>
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="air">Air Plant</option>
                                <option value="medicinal">Medicinal</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                <FaFileAlt className="mr-2 text-green-500" />
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200 resize-none"
                                rows="4"
                                placeholder="Tell us about your plant..."
                            />
                        </div>

                        {/* Care Level and Watering Frequency */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FaThermometerHalf className="mr-2 text-green-500" />
                                    Care Level
                                </label>
                                <select
                                    name="careLevel"
                                    value={formData.careLevel}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    required
                                >
                                    <option value="">Select care level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                    <option value="beginner-friendly">Beginner-Friendly</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="expert">Expert</option>
                                    <option value="low-maintenance">Low Maintenance</option>
                                    <option value="high-maintenance">High Maintenance</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FaTint className="mr-2 text-green-500" />
                                    Watering Frequency
                                </label>
                                <input
                                    type="text"
                                    name="wateringFrequency"
                                    value={formData.wateringFrequency}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    placeholder="e.g., Weekly, Every 3 days"
                                    required
                                />
                            </div>
                        </div>

                        {/* Watering Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FaCalendarAlt className="mr-2 text-green-500" />
                                    Last Watered Date
                                </label>
                                <input
                                    type="date"
                                    name="lastWatered"
                                    value={formData.lastWatered}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FaCalendarAlt className="mr-2 text-green-500" />
                                    Next Watering Date
                                </label>
                                <input
                                    type="date"
                                    name="nextWatering"
                                    value={formData.nextWatering}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Health Status */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                <FaHeartbeat className="mr-2 text-green-500" />
                                Health Status
                            </label>
                            <select
                                name="healthStatus"
                                value={formData.healthStatus}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                                required
                            >
                                <option value="">Select health status</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Needs Attention">Needs Attention</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <div className="flex items-center justify-center">
                                        <FaSpinner className="animate-spin mr-2" />
                                        Adding Plant...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <FaPlus className="mr-2" />
                                        Add Plant to Collection
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        By adding a plant, you're contributing to our growing community of plant enthusiasts
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AddPlants;
