import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { 
    FaLeaf, 
    FaEye, 
    FaEyeSlash, 
    FaEnvelope, 
    FaLock,
    FaSpinner,
    FaArrowRight
} from 'react-icons/fa';

const Singin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: 'Logged in successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: '#22c55e'
            });
            navigate(from, { replace: true });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                background: '#fef2f2',
                iconColor: '#ef4444'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);
        const provider = new GoogleAuthProvider();
        
        try {
            await signInWithPopup(auth, provider);
            Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: 'Logged in with Google successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: '#22c55e'
            });
            navigate(from, { replace: true });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Google Login Failed',
                text: error.message,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                background: '#fef2f2',
                iconColor: '#ef4444'
            });
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-md w-full">
                {/* Main Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-green-500 p-3 rounded-full shadow-lg">
                                <FaLeaf className="text-white text-2xl" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Sign in to continue managing your plants
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <FaEnvelope className="mr-2 text-green-500" />
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <FaLock className="mr-2 text-green-500" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12 pr-12"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" />
                                    Signing In...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <FaArrowRight className="ml-2" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                        <span className="px-4 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">or continue with</span>
                        <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={googleLoading}
                        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {googleLoading ? (
                            <FaSpinner className="animate-spin text-xl mr-3" />
                        ) : (
                            <FcGoogle className="text-xl mr-3" />
                        )}
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {googleLoading ? 'Signing in...' : 'Sign in with Google'}
                        </span>
                    </button>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            Don't have an account?{' '}
                            <Link 
                                to="/register" 
                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors duration-200"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        By signing in, you agree to our{' '}
                        <a href="#" className="text-green-600 dark:text-green-400 hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-green-600 dark:text-green-400 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Singin;
