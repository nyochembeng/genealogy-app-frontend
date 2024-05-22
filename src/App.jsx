import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FamilyProfile from './pages/FamilyProfile';
import UserProfilePage from './pages/UserProfilePage';
import SettingsPage from './pages/SettingsPage';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<FamilyProfile />} />
        <Route path="/profile/:userId" element={<UserProfilePage />} /> {/* Dynamic route for user profile */}
        <Route path="/settings" element={<SettingsPage />} />
        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
