import { ApiResponse } from "@/types/api";
import { Props_Department } from "@/types/screens/departments/departments"; // Adjust the type for departments
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchDepartments = () => {
    const [listDepartments, setListDepartments] = useState<Props_Department[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchDepartments = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>('/departments') // Fetch departments data from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setListDepartments(response.data.data); // Store the fetched departments in the state
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
    }, []);

    // Call fetchDepartments once on mount to load data initially
    useEffect(() => {
        fetchDepartments();
    }, [fetchDepartments]);

    return { listDepartments, isLoading, refetch: fetchDepartments, error };
};

export default useFetchDepartments;
