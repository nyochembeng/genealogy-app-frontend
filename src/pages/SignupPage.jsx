import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    familyName: '',
    email: '',
    sex: '',
    age: '',
    fatherName: '',
    motherName: '',
    password: '',
    whatsapp: '',
    facebook: '',
    Instagram: '',
    tiktok: '',
    address: '',
    profilePic: '',
    photoAlbum: [], // Array of image URLs (optional)
    biography: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.API_URL}/auth/register`, formData); // Assuming your registration route
      console.log(response.data); // Handle successful registration (e.g., display success message)
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      console.error(err.response.data); // Handle errors from the backend (e.g., display error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for all member data (firstName, middleName, etc.) based on your model */}
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
