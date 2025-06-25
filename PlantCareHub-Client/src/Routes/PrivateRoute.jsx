import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../auth/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    // You can render a spinner or skeleton here while checking auth
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (user) {
    return children;
  }

  // If not logged in, redirect to login page, saving current location
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;