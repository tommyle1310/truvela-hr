import { ApiResponse } from "@/types/api";
import { Props_Department, Props_Detail_Department } from "@/types/screens/departments/departments"; // Adjust the type for departments
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

// Custom hook to fetch department details by ID
const useFetchDetailDepartment = (id: string) => {
    const [department, setDepartment] = useState<Props_Detail_Department | null>(null);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch department details by ID
    const fetchDepartmentDetail = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>(`/departments/${id}`) // Fetch department data by ID from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setDepartment(response.data.data); // Store the fetched department in the state
                } else {
                    setError('Error fetching data: ' + response.data.EM); // Set error message
                }
            })
            .catch((err) => {
                setError('Error fetching data');
                console.error('Error fetching data:', err); // Log the error to the console
            })
            .finally(() => {
                setIsLoading(false); // Set loading to false once the request is complete (either success or failure)
            });
    }, [id]);

    // Call fetchDepartmentDetail once on mount or when the `id` changes
    useEffect(() => {
        fetchDepartmentDetail();
    }, [fetchDepartmentDetail]);

    return { department, isLoading, refetch: fetchDepartmentDetail, error };
};

export default useFetchDetailDepartment;
