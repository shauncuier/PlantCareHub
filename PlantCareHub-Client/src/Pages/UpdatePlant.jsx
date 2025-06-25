import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { 
    FaLeaf, 
    FaImage, 
    FaSeedling, 
    FaFileAlt, 
    FaHeart, 
    FaWater, 
    FaCalendarAlt, 
    FaArrowLeft,
    FaSpinner,
    FaEdit,
    FaSave,
    FaTimes
} from 'react-icons/fa';

const UpdatePlant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/plants/${id}`);
                setFormData(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plant details:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch plant data. Please try again.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    background: '#fef2f2',
                    iconColor: '#ef4444'
                });
                setLoading(false);
            }
        };

        fetchPlant();
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        
        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/plants/${id}`, formData);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Plant Updated!',
                    text: 'Your plant information has been successfully updated.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#f0fdf4',
                    iconColor: '#22c55e'
                });
                navigate('/my-plants');
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'No Changes',
                    text: 'No updates were made to the plant.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    background: '#fffbeb',
                    iconColor: '#f59e0b'
                });
            }
        } catch (error) {
            console.error('Error updating plant:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: error.response?.data?.message || 'Failed to update plant. Please try again.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                background: '#fef2f2',
                iconColor: '#ef4444'
            });
        } finally {
            setSubmitting(false);
        }
    };

    if (loading || !formData) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading plant details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        to="/my-plants"
                        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 mb-4"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to My Plants
                    </Link>
                    
                    <div className="flex items-center space-x-3">
                        <div className="bg-green-500 p-3 rounded-full shadow-lg">
                            <FaEdit className="text-white text-xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Update Plant
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Modify your plant's information and care details
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Plant Image */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <FaImage className="mr-2 text-green-500" />
                                    Plant Image URL
                                </label>
                                <div className="relative">
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                        placeholder="https://example.com/plant-image.jpg"
                                        required
                                    />
                                    <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                                {formData.image && (
                                    <div className="mt-3">
                                        <img
                                            src={formData.image}
                                            alt="Plant preview"
                                            className="w-32 h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Plant Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <FaLeaf className="mr-2 text-green-500" />
                                    Plant Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                        placeholder="Enter plant name"
                                        required
                                    />
                                    <FaLeaf className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Category and Care Level */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        <FaSeedling className="mr-2 text-green-500" />
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={formData.category || ''}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12 appearance-none"
                                            required
                                        >
                                            <option value="">-- Select Category --</option>
                                            <option value="succulent">Succulent</option>
                                            <option value="fern">Fern</option>
                                            <option value="flowering">Flowering</option>
                                            <option value="tropical">Tropical</option>
                                            <option value="herb">Herb</option>
                                            <option value="cactus">Cactus</option>
                                            <option value="vine">Vine</option>
                                            <option value="tree">Tree</option>
                                        </select>
                                        <FaSeedling className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        <FaHeart className="mr-2 text-green-500" />
                                        Care Level
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="careLevel"
                                            value={formData.careLevel || ''}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12 appearance-none"
                                            required
                                        >
                                            <option value="">-- Select Level --</option>
                                            <option value="easy">Easy</option>
                                            <option value="moderate">Moderate</option>
                                            <option value="difficult">Difficult</option>
                                        </select>
                                        <FaHeart className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <FaFileAlt className="mr-2 text-green-500" />
                                    Description
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="description"
                                        value={formData.description || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                                        rows="4"
                                        placeholder="Describe your plant and any special characteristics..."
                                    />
                                </div>
                            </div>

                            {/* Watering Information */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        <FaWater className="mr-2 text-green-500" />
                                        Watering Frequency
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="wateringFrequency"
                                            value={formData.wateringFrequency || ''}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                            placeholder="e.g., every 3 days"
                                            required
                                        />
                                        <FaWater className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-green-500" />
                                        Last Watered
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="lastWatered"
                                            value={formData.lastWatered?.split('T')[0] || ''}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                            required
                                        />
                                        <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        <FaCalendarAlt className="mr-2 text-green-500" />
                                        Next Watering
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="nextWatering"
                                            value={formData.nextWatering?.split('T')[0] || ''}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                            required
                                        />
                                        <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Health Status */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    <FaHeart className="mr-2 text-green-500" />
                                    Health Status
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="healthStatus"
                                        value={formData.healthStatus || ''}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                        placeholder="e.g., Healthy, Needs attention, Recovering"
                                        required
                                    />
                                    <FaHeart className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                                >
                                    {submitting ? (
                                        <>
                                            <FaSpinner className="animate-spin mr-2" />
                                            Updating Plant...
                                        </>
                                    ) : (
                                        <>
                                            <FaSave className="mr-2" />
                                            Update Plant
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/my-plants')}
                                    disabled={submitting}
                                    className="flex-1 sm:flex-none bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    <FaTimes className="mr-2" />
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePlant;
