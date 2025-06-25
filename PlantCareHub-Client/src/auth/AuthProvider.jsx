import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';  // your firebase config file
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

// Create Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            Swal.fire({
                icon: 'success',
                title: 'Logged Out',
                text: 'You have been logged out successfully.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, handleLogout }}>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen bg-primary-color text-white">
                    <p>Loading...</p>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
