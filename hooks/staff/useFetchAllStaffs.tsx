import { ApiResponse } from "@/types/api";
import { Props_Staff } from "@/types/screens/employees/employeeDetails";
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchStaffs = () => {
    const [listStaffs, setListStaffs] = useState<Props_Staff[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchStaffs = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>('/staffs') // Fetch staff data from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setListStaffs(response.data.data.staffs); // Store the fetched staffs in the state
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

    // Call fetchStaffs once on mount to load data initially
    useEffect(() => {
        fetchStaffs();
    }, [fetchStaffs]);

    return { listStaffs, isLoading, refetch: fetchStaffs, error };
};

export default useFetchStaffs;
