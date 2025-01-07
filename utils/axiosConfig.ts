// utils/axiosConfig.ts

import axios, { AxiosInstance } from 'axios';

// Create an Axios instance with a predefined base URL
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000', // Use environment variable or default to localhost
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json', // Set default headers if needed
    },
});

export default axiosInstance;
