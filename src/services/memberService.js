import axios from 'axios';

const url = `${process.env.API_URL}/members`;

export const getMembers = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const addMember = async (memberData) => {
  const response = await axios.post(url, memberData);
  return response.data;
};
