import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '../main';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error('API Error Response:', error.response);
      throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      // Request was made but no response received
      console.error('API No Response:', error.request);
      throw new Error('No response received from server. Please check your connection.');
    } else {
      // Something else happened while setting up the request
      console.error('API Request Error:', error.message);
      throw new Error('Error setting up the request. Please try again.');
    }
  }
);

// API endpoints
export const getAbout = () => api.get('/about');
export const getFormation = () => api.get('/formation');
export const getExperience = () => api.get('/experience');
export const getProjects = () => api.get('/projects');
export const getSkills = () => api.get('/skills');
export const getContact = () => api.get('/contact');
