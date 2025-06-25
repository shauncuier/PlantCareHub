import React from 'react';
import { Link } from 'react-router';
import { 
    FaTools, 
    FaBook, 
    FaVideo, 
    FaUsers, 
    FaCalendar, 
    FaSearch, 
    FaDownload, 
    FaMobile,
    FaLeaf,
    FaArrowRight,
    FaPlay,
    FaFileAlt
} from 'react-icons/fa';

const PlantCareToolsResources = () => {
    const tools = [
        {
            id: 1,
            title: 'Plant Care Calendar',
            description: 'Never miss a watering or fertilizing schedule with our smart calendar system.',
            icon: FaCalendar,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            features: ['Automated reminders', 'Custom schedules', 'Weather integration', 'Multi-plant tracking'],
            link: '/tools/calendar'
        },
        {
            id: 2,
            title: 'Plant Identifier',
            description: 'Identify any plant instantly using AI-powered image recognition technology.',
            icon: FaSearch,
            color: 'bg-green-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            features: ['Photo identification', 'Species database', 'Care recommendations', 'Disease detection'],
            link: '/tools/identifier'
        },
        {
            id: 3,
            title: 'Care Reminder App',
            description: 'Download our mobile app for on-the-go plant care management.',
            icon: FaMobile,
            color: 'bg-purple-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            features: ['Push notifications', 'Offline access', 'Photo journals', 'Progress tracking'],
            link: '/tools/mobile-app'
        },
        {
            id: 4,
            title: 'Community Forum',
            description: 'Connect with fellow plant enthusiasts and share your growing experience.',
            icon: FaUsers,
            color: 'bg-pink-500',
            bgColor: 'bg-pink-50 dark:bg-pink-900/20',
            features: ['Expert advice', 'Photo sharing', 'Q&A sessions', 'Local groups'],
            link: '/community'
        }
    ];

    const resources = [
        {
            id: 1,
            title: 'Beginner\'s Guide to Houseplants',
            type: 'eBook',
            description: 'Complete guide covering everything from soil selection to troubleshooting common problems.',
            icon: FaBook,
            downloadSize: '2.5 MB',
            pages: 45,
            downloads: '15K+',
            color: 'text-blue-600'
        },
        {
            id: 2,
            title: 'Plant Care Video Series',
            type: 'Video Course',
            description: 'Step-by-step video tutorials covering advanced plant care techniques.',
            icon: FaVideo,
            duration: '3.5 hours',
            lessons: 12,
            views: '50K+',
            color: 'text-red-600'
        },
        {
            id: 3,
            title: 'Plant Disease Diagnosis Guide',
            type: 'PDF Guide',
            description: 'Visual guide to identifying and treating common plant diseases and pests.',
            icon: FaFileAlt,
            downloadSize: '8.2 MB',
            pages: 78,
            downloads: '8K+',
            color: 'text-green-600'
        },
        {
            id: 4,
            title: 'Seasonal Care Checklist',
            type: 'Checklist',
            description: 'Monthly plant care tasks to keep your plants healthy year-round.',
            icon: FaCalendar,
            downloadSize: '1.2 MB',
            pages: 12,
            downloads: '25K+',
            color: 'text-purple-600'
        }
    ];

    const quickLinks = [
        { title: 'Plant Care Calculator', icon: FaTools, link: '/tools/calculator' },
        { title: 'Fertilizer Guide', icon: FaLeaf, link: '/resources/fertilizer' },
        { title: 'Watering Schedule', icon: FaCalendar, link: '/tools/watering' },
        { title: 'Plant Troubleshooter', icon: FaSearch, link: '/tools/troubleshoot' }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaTools className="text-green-500 text-3xl mr-3" />
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Plant Care Tools & Resources
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Everything you need to become a successful plant parent. From smart tools to comprehensive guides, 
                        we've got your plant care journey covered.
                    </p>
                </div>

                {/* Tools Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Smart Plant Care Tools
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool) => {
                            const Icon = tool.icon;
                            return (
                                <div key={tool.id} className={`${tool.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}>
                                    <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                        {tool.title}
                                    </h4>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                        {tool.description}
                                    </p>
                                    
                                    <ul className="space-y-1 mb-4">
                                        {tool.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                                                <div className={`w-1.5 h-1.5 ${tool.color} rounded-full mr-2 flex-shrink-0`}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <Link
                                        to={tool.link}
                                        className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-sm"
                                    >
                                        Try it now <FaArrowRight className="ml-1 text-xs" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Resources Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Free Learning Resources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {resources.map((resource) => {
                            const Icon = resource.icon;
                            return (
                                <div key={resource.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start">
                                        <div className={`p-3 rounded-lg mr-4 flex-shrink-0 ${resource.color} bg-opacity-10`}>
                                            <Icon className={`text-2xl ${resource.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {resource.title}
                                                </h4>
                                                <span className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${resource.color}`}>
                                                    {resource.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                                {resource.description}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                                                <div className="flex items-center space-x-4">
                                                    {resource.downloadSize && (
                                                        <span>📁 {resource.downloadSize}</span>
                                                    )}
                                                    {resource.duration && (
                                                        <span>⏱️ {resource.duration}</span>
                                                    )}
                                                    {resource.pages && (
                                                        <span>📄 {resource.pages} pages</span>
                                                    )}
                                                    {resource.lessons && (
                                                        <span>🎥 {resource.lessons} lessons</span>
                                                    )}
                                                </div>
                                                <div>
                                                    {resource.downloads && `${resource.downloads} downloads`}
                                                    {resource.views && `${resource.views} views`}
                                                </div>
                                            </div>
                                            <button className={`inline-flex items-center ${resource.color} font-medium hover:opacity-80 transition-opacity duration-200 text-sm`}>
                                                <FaDownload className="mr-2" />
                                                {resource.type === 'Video Course' ? 'Watch Now' : 'Download Free'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Quick Access Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={index}
                                    to={link.link}
                                    className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 group"
                                >
                                    <Icon className="text-3xl text-green-600 dark:text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                                        {link.title}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
                    <FaLeaf className="text-4xl mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">
                        Need Personalized Plant Care Advice?
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Get expert consultation from our certified plant specialists. Book a one-on-one session 
                        to solve specific plant problems or plan your perfect plant collection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Book Consultation
                        </button>
                        <Link
                            to="/community"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
                        >
                            Join Community
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantCareToolsResources;
