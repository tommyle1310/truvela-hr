import { state_default_attendance_details } from "@/data/screens/attendance/attendance";
import { ApiResponse } from "@/types/api";
import { Props_Attendance } from "@/types/screens/attendance/attendance";
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";


interface UseAttendanceByDateReturn {
    attendanceDetails: Props_Attendance[];
    isLoading: boolean;
    error: string;
    refetch: () => void;
}

const useFetchAttendanceByDate = (timestamp: number): UseAttendanceByDateReturn => {
    const [attendanceDetails, setAttendanceDetails] = useState<Props_Attendance[]>(state_default_attendance_details);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const refetch = useCallback
        (() => {
            setIsLoading(true);
            setError(''); // Clear previous error

            axiosInstance
                .get<ApiResponse>(`/daily-attendance/date/${timestamp}`)
                .then((response) => {
                    if (response.data.EC === 0) {
                        setAttendanceDetails(response.data.data);
                    } else {
                        setError('Error fetching data: ' + response.data.EM);
                    }
                })
                .catch((err) => {
                    setError('Error fetching data');
                    console.error('Error fetching data:', err);
                })
                .finally(() => {
                    setIsLoading(false); // Set loading to false once the request finishes
                });
        }, [timestamp]);

    useEffect(() => {
        refetch(); // Call refetch when timestamp changes
    }, [timestamp, refetch]);

    return {
        attendanceDetails,
        isLoading,
        error,
        refetch,
    };
};

export default useFetchAttendanceByDate;
