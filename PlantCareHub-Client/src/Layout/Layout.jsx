import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div className="dark:bg-nature-dark dark:text-nature-light">
            <Navbar />
        <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
