import React from 'react';
import { FaStar, FaQuoteLeft, FaLeaf, FaHeart } from 'react-icons/fa';

const UserTestimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Plant Enthusiast',
            location: 'New York, NY',
            content: 'PlantCare Hub completely transformed my approach to plant care. The personalized care guides helped me save my dying monstera, and now my home is a green paradise! The community support is incredible.',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 25,
            joinedDate: '2023'
        },
        {
            id: 2,
            name: 'Mike Chen',
            role: 'Urban Gardener',
            location: 'San Francisco, CA',
            content: 'As a beginner, I was intimidated by plant care. This platform made it so easy! The watering reminders and expert tips helped me successfully grow 15 plants in my small apartment. Highly recommend!',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 15,
            joinedDate: '2023'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Botanical Student',
            location: 'Austin, TX',
            content: 'The plant identification feature is amazing! I\'ve learned so much about different species and their care requirements. The community knowledge base is incredibly valuable for my studies.',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 40,
            joinedDate: '2022'
        },
        {
            id: 4,
            name: 'David Thompson',
            role: 'Home Office Worker',
            location: 'Portland, OR',
            content: 'Working from home got so much better with plants around me. PlantCare Hub helped me choose the perfect office plants that thrive in low light. My productivity and mood have improved significantly!',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 8,
            joinedDate: '2023'
        },
        {
            id: 5,
            name: 'Lisa Park',
            role: 'Interior Designer',
            location: 'Los Angeles, CA',
            content: 'I use PlantCare Hub for all my client projects. The plant recommendations for different lighting conditions and spaces are spot-on. It\'s become an essential tool in my design process.',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 60,
            joinedDate: '2022'
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Retiree',
            location: 'Phoenix, AZ',
            content: 'At 68, I thought I was too old to start gardening. PlantCare Hub proved me wrong! The step-by-step guides and supportive community helped me discover my passion for succulent gardening.',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
            rating: 5,
            plantsOwned: 30,
            joinedDate: '2023'
        }
    ];

    const stats = [
        { number: '50K+', label: 'Happy Plant Parents' },
        { number: '4.9/5', label: 'Average Rating' },
        { number: '500K+', label: 'Plants Saved' },
        { number: '95%', label: 'Success Rate' }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <FaHeart className="text-red-500 text-3xl mr-3" />
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Loved by Plant Parents Worldwide
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Join thousands of successful plant parents who have transformed their homes into thriving green spaces with our guidance.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                            {/* Quote Icon */}
                            <FaQuoteLeft className="text-3xl text-green-500 opacity-20 absolute top-4 right-4" />
                            
                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                                ))}
                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                    ({testimonial.rating}.0)
                                </span>
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-500">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>

                            {/* Plant Stats */}
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <span className="flex items-center">
                                    <FaLeaf className="mr-1" />
                                    {testimonial.plantsOwned} plants
                                </span>
                                <span>Member since {testimonial.joinedDate}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Success Story */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <FaStar className="text-yellow-400 text-2xl mr-2" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Featured Success Story
                                </h3>
                            </div>
                            <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                                "I went from killing every plant I touched to maintaining a thriving collection of 50+ plants. 
                                PlantCare Hub taught me that plant care isn't about having a 'green thumb' – it's about understanding 
                                what each plant needs. The community support and expert guidance made all the difference."
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                                    alt="Maria Santos"
                                    className="w-16 h-16 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Maria Santos
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400">
                                        Plant Care Success Coach
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-500">
                                        Chicago, IL • 50+ plants • Member since 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300&h=300&fit=crop"
                                alt="Plant collection"
                                className="rounded-lg object-cover h-32"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop"
                                alt="Plant collection"
                                className="rounded-lg object-cover h-32"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop"
                                alt="Plant collection"
                                className="rounded-lg object-cover h-32"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1444027922499-e0a4fb64e883?w=300&h=300&fit=crop"
                                alt="Plant collection"
                                className="rounded-lg object-cover h-32"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Start Your Success Story?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Join our community and get the support you need to become a confident plant parent.
                    </p>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Join Our Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UserTestimonials;
