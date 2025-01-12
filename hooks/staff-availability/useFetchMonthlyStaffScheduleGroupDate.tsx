import { ApiResponse } from "@/types/api";
import { Props_MonthlyStaffSchedule_GroupStaff } from "@/types/screens/staff-schedule/staff-schedule"; // Adjust this import as per your type structure
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchMonthlyStaffScheduleGroupDate = (month: string) => {
    const [monthlyStaffSchedule, setMonthlyStaffSchedule] = useState<Props_MonthlyStaffSchedule_GroupStaff[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchMonthlyStaffScheduleGroupDate = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>(`/monthly-staff-schedule/group-by-date?month=${month}`) // Fetch monthly staff schedule grouped by date from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setMonthlyStaffSchedule(response.data.data); // Store the fetched monthly staff schedule in the state
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
    }, [month]);

    // Call fetchMonthlyStaffScheduleGroupDate once on mount to load data initially
    useEffect(() => {
        fetchMonthlyStaffScheduleGroupDate();
    }, [fetchMonthlyStaffScheduleGroupDate]);

    return { monthlyStaffSchedule, isLoading, refetch: fetchMonthlyStaffScheduleGroupDate, error };
};

export default useFetchMonthlyStaffScheduleGroupDate;
