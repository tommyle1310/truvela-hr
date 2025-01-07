import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '@/utils/axiosConfig'; // Adjust the import as per your file structure
import { Props_Staff } from '@/types/screens/employees/employeeDetails';
import { state_default_staff_details } from '@/data/screens/employess/employees';

interface ApiResponse {
    EC: number;
    EM: string;
    data: Props_Staff;
}

interface UseStaffDetailsReturn {
    staffDetails: Props_Staff;
    isLoading: boolean;
    error: string;
    refetch: () => void;
}

const useStaffDetails = (employeeId: string): UseStaffDetailsReturn => {
    const [staffDetails, setStaffDetails] = useState<Props_Staff>(state_default_staff_details);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const refetch = useCallback(() => {
        setIsLoading(true);
        setError(''); // Clear previous error

        axiosInstance
            .get<ApiResponse>(`/staffs/${employeeId}`)
            .then((response) => {
                if (response.data.EC === 0) {
                    setStaffDetails(response.data.data);
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
    }, [employeeId]);

    useEffect(() => {
        refetch(); // Call refetch when employeeId changes
    }, [employeeId, refetch]);

    return {
        staffDetails,
        isLoading,
        error,
        refetch,
    };
};

export default useStaffDetails;
