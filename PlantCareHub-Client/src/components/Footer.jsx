import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaLeaf, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/plants', label: 'All Plants' },
        { to: '/my-plants', label: 'My Plants' },
        { to: '/add-plant', label: 'Add Plant' }
    ];

    const supportLinks = [
        { to: '/help', label: 'Help Center' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact Us' },
        { to: '/terms', label: 'Terms of Service' },
        { to: '/privacy', label: 'Privacy Policy' }
    ];

    const socialLinks = [
        { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook', color: 'hover:text-blue-500' },
        { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter', color: 'hover:text-blue-400' },
        { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' },
        { href: 'https://linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn', color: 'hover:text-blue-600' }
    ];

    return (
        <footer className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 border-t border-green-100 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                                    <FaLeaf className="text-white text-xl" />
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    PlantCare Hub
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                Empowering plant lovers worldwide to nurture, grow, and thrive with their green companions. 
                                Your ultimate destination for plant care knowledge and community.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm ${social.color} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
                                            aria-label={social.label}
                                        >
                                            <Icon className="text-lg" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="w-1 h-1 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Support
                            </h3>
                            <ul className="space-y-2">
                                {supportLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="w-1 h-1 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Get in Touch
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                        <FaEnvelope className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <a href="mailto:info@plantcarehub.com" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                            info@plantcarehub.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                        <FaPhoneAlt className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <a href="tel:+8801234567890" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                            +880 123 456 7890
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                        <FaMapMarkerAlt className="text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="py-8 border-t border-green-100 dark:border-gray-700">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Stay Updated with Plant Care Tips
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            Get weekly plant care tips, seasonal guides, and exclusive content delivered to your inbox.
                        </p>
                        <div className="max-w-md mx-auto flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-200"
                            />
                            <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-green-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                            <span>© {currentYear} PlantCare Hub. Made with</span>
                            <FaHeart className="text-red-500 text-xs animate-pulse" />
                            <span>for plant lovers worldwide.</span>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                Terms
                            </Link>
                            <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                Privacy
                            </Link>
                            <Link to="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
