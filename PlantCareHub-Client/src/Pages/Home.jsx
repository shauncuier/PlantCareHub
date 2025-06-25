import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { 
    FaLeaf, 
    FaHeart, 
    FaEye, 
    FaArrowRight, 
    FaStar, 
    FaQuoteLeft, 
    FaLightbulb, 
    FaWater, 
    FaSun, 
    FaThermometerHalf,
    FaUsers,
    FaSeedling,
    FaAward
} from 'react-icons/fa';

import Slider from '../components/Home/PlantSlider';
import NewPlants from '../components/Home/NewPlants';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/plants?sort=-addedDate`);
                setPlants(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plants:', error);
                setLoading(false);
            }
        };
        fetchPlants();
    }, []);

    // Stats data
    const stats = [
        { icon: FaSeedling, number: '10,000+', label: 'Plants Tracked', color: 'text-green-600' },
        { icon: FaUsers, number: '5,000+', label: 'Plant Parents', color: 'text-blue-600' },
        { icon: FaHeart, number: '50,000+', label: 'Care Sessions', color: 'text-red-500' },
        { icon: FaAward, number: '4.9', label: 'User Rating', color: 'text-yellow-500' }
    ];

    // Quick tips data
    const quickTips = [
        {
            icon: FaWater,
            title: 'Perfect Watering',
            description: 'Learn when and how much to water each type of plant',
            color: 'bg-blue-500'
        },
        {
            icon: FaSun,
            title: 'Light Requirements',
            description: 'Understand lighting needs for optimal plant growth',
            color: 'bg-yellow-500'
        },
        {
            icon: FaThermometerHalf,
            title: 'Temperature Care',
            description: 'Maintain ideal temperature ranges for healthy plants',
            color: 'bg-red-500'
        },
        {
            icon: FaLightbulb,
            title: 'Expert Tips',
            description: 'Get professional advice from plant care specialists',
            color: 'bg-purple-500'
        }
    ];

    // Featured testimonials
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Plant Enthusiast',
            content: 'PlantCare Hub transformed my gardening journey. The care reminders are perfect!',
            rating: 5
        },
        {
            name: 'Mike Chen',
            role: 'Urban Gardener',
            content: 'Amazing platform! My plants have never been healthier thanks to the expert tips.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Beginner Gardener',
            content: 'Perfect for beginners like me. The community is so helpful and supportive!',
            rating: 5
        }
    ];

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading your plant paradise...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            {/* Hero Slider Section */}
            <Slider />

            {/* Stats Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Trusted by Plant Lovers Worldwide
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Join our growing community of passionate plant enthusiasts
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                                        <Icon className={`text-4xl ${stat.color} mx-auto mb-3`} />
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quick Care Tips */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Essential Plant Care Tips
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Master the fundamentals with our expert-curated care guides
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickTips.map((tip, index) => {
                            const Icon = tip.icon;
                            return (
                                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                                    <div className={`w-16 h-16 ${tip.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {tip.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {tip.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Recently Added Plants Section */}
            <NewPlants plants={plants} />

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            What Our Community Says
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Real experiences from plant parents who love our platform
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md relative">
                                <FaQuoteLeft className="text-3xl text-green-500 opacity-20 absolute top-4 left-4" />
                                <div className="relative z-10">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <FaLeaf className="text-6xl text-white mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Plant Journey?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of plant enthusiasts and transform your space into a thriving green paradise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/plants"
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center group"
                        >
                            Explore Plants
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <Link
                            to="/add-plant"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
                        >
                            Add Your First Plant
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
