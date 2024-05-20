import axios from 'axios';

const url = `${process.env.API_URL}/auth`;

export const login = async (email, password) => {
  const response = await axios.post(`${url}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
};

export const register = async (email, password) => {
  const response = await axios.post(`${url}/register`, { email, password });
  localStorage.setItem('token', response.data.token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
