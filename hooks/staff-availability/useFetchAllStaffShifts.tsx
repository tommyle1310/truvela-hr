import { ApiResponse } from "@/types/api";
import { Props_StaffShift } from "@/types/screens/staff-schedule/staff-shift"; // Assuming you have a corresponding type for staff shifts
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchAllStaffShifts = () => {
    const [listStaffShifts, setListStaffShifts] = useState<Props_StaffShift[]>([]);  // State to store fetched staff shifts
    const [error, setError] = useState<string>('');  // State to store error message
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchAllStaffShifts = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>('/staff-shifts') // Fetch staff shifts data from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setListStaffShifts(response.data.data); // Store the fetched staff shifts in the state
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

    // Call fetchAllStaffShifts once on mount to load data initially
    useEffect(() => {
        fetchAllStaffShifts();
    }, [fetchAllStaffShifts]);

    return { listStaffShifts, isLoading, refetch: fetchAllStaffShifts, error };
};

export default useFetchAllStaffShifts;
