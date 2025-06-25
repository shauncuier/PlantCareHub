import React from 'react';
import { FaWater, FaSun, FaThermometerHalf, FaLeaf, FaExclamationTriangle, FaBug, FaSeedling } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";

const CareTips = () => {
    const careTips = [
        {
            icon: FaWater,
            title: 'Proper Watering Techniques',
            description: 'Water deeply but less frequently. Check soil moisture by sticking your finger 1-2 inches into the soil.',
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            tips: [
                'Morning watering is best',
                'Use lukewarm water',
                'Water at soil level, not leaves',
                'Ensure proper drainage'
            ]
        },
        {
            icon: FaSun,
            title: 'Light Requirements',
            description: 'Most houseplants need bright, indirect light. Direct sunlight can scorch leaves of many indoor plants.',
            color: 'bg-yellow-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            tips: [
                'Rotate plants weekly',
                'Use sheer curtains for filtering',
                'Consider grow lights in winter',
                'Watch for light stress signs'
            ]
        },
        {
            icon: FaThermometerHalf,
            title: 'Temperature Control',
            description: 'Keep plants away from heating vents, air conditioners, and drafty windows for optimal growth.',
            color: 'bg-red-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            tips: [
                'Ideal range: 65-75°F (18-24°C)',
                'Avoid sudden temperature changes',
                'Increase humidity in winter',
                'Group plants for better microclimate'
            ]
        },
        {
            icon: FaLeaf,
            title: 'Soil and Nutrition',
            description: 'Use well-draining potting mix and fertilize during growing season (spring and summer).',
            color: 'bg-green-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            tips: [
                'Use quality potting soil',
                'Feed monthly in growing season',
                'Less fertilizer in winter',
                'Watch for nutrient deficiencies'
            ]
        },
        {
            icon: FaBug,
            title: 'Pest Prevention',
            description: 'Regularly inspect plants for pests. Early detection is key to preventing infestations.',
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            tips: [
                'Quarantine new plants',
                'Clean leaves regularly',
                'Use neem oil preventively',
                'Check undersides of leaves'
            ]
        },
        {
            icon: FaScissors,
            title: 'Pruning and Maintenance',
            description: 'Regular pruning promotes healthy growth and removes dead or diseased plant material.',
            color: 'bg-indigo-500',
            bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
            tips: [
                'Use clean, sharp tools',
                'Prune in growing season',
                'Remove dead/yellowing leaves',
                'Pinch growing tips for bushiness'
            ]
        }
    ];

    const commonMistakes = [
        {
            icon: FaExclamationTriangle,
            title: 'Overwatering',
            description: 'More plants die from overwatering than underwatering. Let soil dry between waterings.'
        },
        {
            icon: FaExclamationTriangle,
            title: 'Wrong Light Placement',
            description: 'Placing sun-loving plants in dark corners or shade plants in direct sun.'
        },
        {
            icon: FaExclamationTriangle,
            title: 'Ignoring Humidity',
            description: 'Many tropical houseplants need higher humidity than typical home environments.'
        },
        {
            icon: FaExclamationTriangle,
            title: 'Overfertilizing',
            description: 'Too much fertilizer can burn roots and cause more harm than good.'
        }
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaSeedling className="text-green-500 text-3xl mr-3" />
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Essential Plant Care Tips
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Master the fundamentals of plant care with our expert-curated tips and avoid common mistakes that kill houseplants.
                    </p>
                </div>

                {/* Care Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {careTips.map((tip, index) => {
                        const Icon = tip.icon;
                        return (
                            <div key={index} className={`${tip.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}>
                                <div className={`w-12 h-12 ${tip.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="text-white text-xl" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {tip.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {tip.description}
                                </p>
                                
                                <div className="space-y-2">
                                    {tip.tips.map((tipItem, tipIndex) => (
                                        <div key={tipIndex} className="flex items-center text-sm">
                                            <div className={`w-2 h-2 ${tip.color} rounded-full mr-3 flex-shrink-0`}></div>
                                            <span className="text-gray-700 dark:text-gray-300">{tipItem}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Common Mistakes Section */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Top Plant Care Mistakes to Avoid
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Learn from common mistakes that even experienced plant parents make.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {commonMistakes.map((mistake, index) => {
                            const Icon = mistake.icon;
                            return (
                                <div key={index} className="flex items-start p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-500">
                                    <Icon className="text-red-500 text-xl mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            {mistake.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {mistake.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pro Tips */}
                <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
                    <FaLeaf className="text-4xl mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Pro Tip</h3>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        Keep a plant care journal! Track watering dates, fertilizing schedules, and note changes in your plants' appearance. 
                        This helps you understand your plants' needs and catch problems early.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CareTips;
