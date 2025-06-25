import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate, Link } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { 
    FaLeaf, 
    FaEye, 
    FaEyeSlash, 
    FaEnvelope, 
    FaLock, 
    FaUser, 
    FaImage,
    FaSpinner,
    FaArrowRight,
    FaCheck,
    FaTimes
} from 'react-icons/fa';

const Singup = () => {
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const navigate = useNavigate();

    const isPasswordValid = (pass) => {
        return /[A-Z]/.test(pass) && /[a-z]/.test(pass) && pass.length >= 6;
    };

    const getPasswordStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 6) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[a-z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        return strength;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (!isPasswordValid(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be at least 6 characters and include both uppercase and lowercase letters.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                background: '#fef2f2',
                iconColor: '#ef4444'
            });
            return;
        }

        setLoading(true);

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL,
            });
            Swal.fire({
                icon: 'success',
                title: 'Welcome to PlantCare!',
                text: 'Account created successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: '#22c55e'
            });
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
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
                title: 'Welcome to PlantCare!',
                text: 'Account created with Google successfully!',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: '#f0fdf4',
                iconColor: '#22c55e'
            });
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Google Registration Failed',
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

    const passwordStrength = getPasswordStrength(password);
    const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

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
                            Join PlantCare
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Create an account to start your plant care journey
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleRegister} className="space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <FaUser className="mr-2 text-green-500" />
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* Photo URL Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                <FaImage className="mr-2 text-green-500" />
                                Profile Photo URL (Optional)
                            </label>
                            <div className="relative">
                                <input
                                    type="url"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 pl-12"
                                    placeholder="https://example.com/your-photo.jpg"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                />
                                <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

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
                                    placeholder="Create a strong password"
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

                            {/* Password Requirements */}
                            {password && (
                                <div className="mt-3 space-y-2">
                                    {/* Password Strength Bar */}
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full transition-all duration-300 ${strengthColors[passwordStrength - 1] || 'bg-gray-300'}`}
                                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                                        </span>
                                    </div>

                                    {/* Password Criteria */}
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2 text-xs">
                                            {password.length >= 6 ? (
                                                <FaCheck className="text-green-500" />
                                            ) : (
                                                <FaTimes className="text-red-500" />
                                            )}
                                            <span className={password.length >= 6 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                                At least 6 characters
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-xs">
                                            {/[A-Z]/.test(password) ? (
                                                <FaCheck className="text-green-500" />
                                            ) : (
                                                <FaTimes className="text-red-500" />
                                            )}
                                            <span className={/[A-Z]/.test(password) ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                                One uppercase letter
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-xs">
                                            {/[a-z]/.test(password) ? (
                                                <FaCheck className="text-green-500" />
                                            ) : (
                                                <FaTimes className="text-red-500" />
                                            )}
                                            <span className={/[a-z]/.test(password) ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                                One lowercase letter
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || !isPasswordValid(password)}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account
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

                    {/* Google Sign Up */}
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
                            {googleLoading ? 'Creating account...' : 'Sign up with Google'}
                        </span>
                    </button>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            Already have an account?{' '}
                            <Link 
                                to="/login" 
                                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors duration-200"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        By creating an account, you agree to our{' '}
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

export default Singup;
