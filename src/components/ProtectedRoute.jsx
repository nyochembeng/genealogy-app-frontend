import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isAuthenticated = localStorage.getItem('accessToken'); // Check for stored access token
  return isAuthenticated ? props.children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
