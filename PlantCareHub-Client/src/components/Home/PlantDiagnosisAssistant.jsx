import React, { useState } from 'react';
import { FaCamera, FaSearch, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaLeaf, FaBug } from 'react-icons/fa';
import { FaDroplet } from "react-icons/fa6";

const PlantDiagnosisAssistant = () => {
    const [selectedIssue, setSelectedIssue] = useState(null);

    const commonIssues = [
        {
            id: 1,
            title: 'Yellow Leaves',
            icon: FaDroplet,
            color: 'bg-yellow-500',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            symptoms: ['Leaves turning yellow', 'Starting from bottom', 'Soft, mushy texture'],
            causes: ['Overwatering', 'Poor drainage', 'Natural aging'],
            solutions: [
                'Reduce watering frequency',
                'Check drainage holes',
                'Remove yellow leaves',
                'Improve air circulation'
            ],
            urgency: 'medium'
        },
        {
            id: 2,
            title: 'Brown Leaf Tips',
            icon: FaLeaf,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
            symptoms: ['Crispy brown edges', 'Dry appearance', 'Starts at leaf tips'],
            causes: ['Low humidity', 'Overfertilizing', 'Tap water minerals'],
            solutions: [
                'Increase humidity',
                'Use filtered water',
                'Reduce fertilizer',
                'Trim brown edges'
            ],
            urgency: 'low'
        },
        {
            id: 3,
            title: 'Pest Infestation',
            icon: FaBug,
            color: 'bg-red-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20',
            symptoms: ['Small insects on leaves', 'Sticky honeydew', 'Yellowing spots'],
            causes: ['Spider mites', 'Aphids', 'Scale insects'],
            solutions: [
                'Isolate the plant',
                'Use insecticidal soap',
                'Increase humidity',
                'Check other plants'
            ],
            urgency: 'high'
        },
        {
            id: 4,
            title: 'Drooping Leaves',
            icon: FaDroplet,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            symptoms: ['Wilted appearance', 'Leaves hanging down', 'Soft stems'],
            causes: ['Underwatering', 'Root bound', 'Shock from moving'],
            solutions: [
                'Check soil moisture',
                'Water thoroughly',
                'Consider repotting',
                'Avoid moving plant'
            ],
            urgency: 'medium'
        }
    ];

    const diagnosticSteps = [
        {
            step: 1,
            title: 'Observe Your Plant',
            description: 'Look for changes in leaves, stems, and overall appearance',
            icon: FaSearch
        },
        {
            step: 2,
            title: 'Take Photos',
            description: 'Capture clear images of the affected areas',
            icon: FaCamera
        },
        {
            step: 3,
            title: 'Check Environment',
            description: 'Assess light, water, humidity, and temperature conditions',
            icon: FaInfoCircle
        },
        {
            step: 4,
            title: 'Get Diagnosis',
            description: 'Use our AI tool or consult with plant experts',
            icon: FaCheckCircle
        }
    ];

    const getUrgencyColor = (urgency) => {
        switch (urgency) {
            case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
            case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
            case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
        }
    };

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaExclamationTriangle className="text-orange-500 text-3xl mr-3" />
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Plant Health Diagnosis Assistant
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Quickly identify and solve common plant problems with our intelligent diagnosis system. 
                        Get expert guidance to keep your plants healthy and thriving.
                    </p>
                </div>

                {/* Diagnostic Steps */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        How Plant Diagnosis Works
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {diagnosticSteps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.step} className="text-center">
                                    <div className="relative mb-6">
                                        <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
                                            <Icon className="text-green-600 dark:text-green-400 text-2xl" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                            {step.step}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Common Issues */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        Common Plant Problems & Solutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commonIssues.map((issue) => {
                            const Icon = issue.icon;
                            return (
                                <div 
                                    key={issue.id} 
                                    className={`${issue.bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 ${
                                        selectedIssue === issue.id ? 'ring-2 ring-green-500' : ''
                                    }`}
                                    onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                                >
                                    <div className={`w-12 h-12 ${issue.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className="text-white text-xl" />
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                            {issue.title}
                                        </h4>
                                        <span className={`text-xs px-2 py-1 rounded-full ${getUrgencyColor(issue.urgency)}`}>
                                            {issue.urgency}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Symptoms:</h5>
                                            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                                                {issue.symptoms.slice(0, 2).map((symptom, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <div className={`w-1.5 h-1.5 ${issue.color} rounded-full mr-2`}></div>
                                                        {symptom}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {selectedIssue === issue.id && (
                                            <div className="space-y-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                                <div>
                                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Possible Causes:</h5>
                                                    <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                                                        {issue.causes.map((cause, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                                                {cause}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Solutions:</h5>
                                                    <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                                                        {issue.solutions.map((solution, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                                                {solution}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* AI Diagnosis Tool */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-16">
                    <div className="text-center mb-8">
                        <FaCamera className="text-4xl text-green-600 dark:text-green-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            AI-Powered Plant Diagnosis
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Upload a photo of your plant and get instant AI-powered diagnosis with personalized treatment recommendations.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                            <FaCamera className="text-2xl text-green-600 dark:text-green-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Upload Photo</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Clear image of affected area</p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <FaSearch className="text-2xl text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Analysis</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Instant problem identification</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                            <FaCheckCircle className="text-2xl text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Get Solution</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Personalized treatment plan</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl mr-4">
                            Start AI Diagnosis
                        </button>
                        <button className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Expert Help CTA */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white">
                    <FaLeaf className="text-4xl mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">
                        Need Expert Help?
                    </h3>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Sometimes plants need professional attention. Connect with our certified plant specialists 
                        for personalized diagnosis and treatment plans.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Consult Expert
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                            Emergency Care
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantDiagnosisAssistant;
