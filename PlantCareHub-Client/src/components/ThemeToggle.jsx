import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 bg-primary-color text-white px-3 py-2 rounded shadow-lg hover:bg-secondary-color transition"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? '🌙 Dark Mode' : '☀ Light Mode'}
        </button>
    );
};

export default ThemeToggle;
