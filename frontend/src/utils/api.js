import axios from 'axios';

const API_URL = 'http://localhost:3001';  // Change to your API URL

// Function to book an appointment
export const bookAppointment = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/appointments`, data);
    return response.data;
  } catch (error) {
    console.error('Error booking appointment:', error);
    throw error;
  }
};

// Function to get profiles of counselors
export const getProfile = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/profiles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};
