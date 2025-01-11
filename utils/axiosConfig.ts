// utils/axiosConfig.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Define the interface for the staff
interface Avatar {
    key: string;
    url: string;
}

interface Job {
    created_at: number;
    benefits: string;
    job_type: string[];
    closing_date: number;
    level_needs: string[];
    posting_date: number;
    status: string;
    title: string;
    description: string;
    skills_required: string;
    department: string;
}

interface Department {
    name: string;
    description: string;
    created_at: number;
}

interface Staff {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    gender: string;
    date_of_birth: number;
    avatar: Avatar;
    job: Job;
    is_fulltime: boolean;
    is_active: boolean;
    joining_date: number;
    total_days_worked: number;
    level: string;
    account_access: string;
    created_at: number;
    active_points: number;
    department: Department | null;
}

// Define the interface for the data
interface Data {
    staffs: Staff[];
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
}

// Define the response structure
interface ApiResponse {
    EC: number;       // Status code
    EM: string;       // Status message
    data: Data;       // Data object
}

// Create an Axios instance with a predefined base URL
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
