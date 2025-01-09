import { ApiResponse } from "@/types/api";
import { Props_SalaryDefinition } from "@/types/screens/payroll/payroll"; // Adjust this import as per your type structure
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchAllPayrollsByDepartment = () => {
    const [listPayroll, setListPayroll] = useState<Props_SalaryDefinition[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchSalaryDefinitions = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>('/payrolls') // Fetch salary definitions data from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setListPayroll(response.data.data); // Store the fetched salary definitions in the state
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

    // Call fetchSalaryDefinitions once on mount to load data initially
    useEffect(() => {
        fetchSalaryDefinitions();
    }, [fetchSalaryDefinitions]);

    return { listPayroll, isLoading, refetch: fetchSalaryDefinitions, error };
};

export default useFetchAllPayrollsByDepartment;
