import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../auth/AuthProvider';
import { ThemeContext } from '../Context/ThemeContext';
import { auth } from '../Firebase/firebase.config';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { FaSun, FaMoon, FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            Swal.fire({
                icon: 'success',
                title: 'Logged out',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
            });
            navigate('/');
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Logout Failed',
                text: err.message,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/plants', label: 'All Plants' },
        ...(user ? [
            { to: '/my-plants', label: 'My Plants' },
            { to: '/add-plant', label: 'Add Plant' }
        ] : [])
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300">
                            <FaLeaf className="text-white text-xl" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            PlantCare Hub
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                            : 'text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-900/20'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <FaSun className="text-yellow-500 text-lg" />
                            ) : (
                                <FaMoon className="text-gray-600 text-lg" />
                            )}
                        </button>

                        {/* User Actions */}
                        {user ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                                    <img
                                        src={user.photoURL}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full border-2 border-green-500"
                                    />
                                    <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {user.displayName}
                                    </span>
                                </button>
                                
                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden md:flex items-center space-x-2">
                                <NavLink
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors duration-200"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Register
                                </NavLink>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            {isMenuOpen ? (
                                <FaTimes className="text-gray-600 dark:text-gray-300 text-lg" />
                            ) : (
                                <FaBars className="text-gray-600 dark:text-gray-300 text-lg" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-900/20'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            
                            {!user && (
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <NavLink
                                        to="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 dark:text-gray-300 dark:hover:text-green-400 dark:hover:bg-green-900/20 transition-colors duration-200"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base font-medium rounded-md hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                                    >
                                        Register
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
