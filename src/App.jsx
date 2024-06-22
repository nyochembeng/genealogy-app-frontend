import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FamilyProfile from "./pages/FamilyProfile";
import UserProfilePage from "./pages/UserProfilePage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import config from './config.json'
// Import other pages as needed

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/user/me`);
        setUser(response.data);
      } catch (error) {
        console.error(error); // Handle errors appropriately
      }
    };

    fetchUser();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes (redirect to login if not authenticated) */}
        <Route
          path="/profile"
          element={user ? <FamilyProfile /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile/:userId"
          element={user ? <UserProfilePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Navigate to="/login" replace />}
        />
        {/* Add other protected routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
