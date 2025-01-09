import { ApiResponse } from "@/types/api";
import { Props_PayrollAdjustmentReport } from "@/types/screens/payroll/payroll"; // Adjust this import as per your type structure
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchPayrollAdjustmentReportsByStaffId = (staffId: string) => {
    const [payrollAdjustmentReports, setPayrollAdjustmentReports] = useState<Props_PayrollAdjustmentReport[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchPayrollAdjustmentReports = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>(`/payroll-adjustment-reports/staffId/${staffId}`) // Fetch payroll adjustment reports by staffId from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setPayrollAdjustmentReports(response.data.data); // Store the fetched payroll adjustment reports in the state
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
    }, [staffId]);

    // Call fetchPayrollAdjustmentReports once on mount to load data initially
    useEffect(() => {
        fetchPayrollAdjustmentReports();
    }, [fetchPayrollAdjustmentReports]);

    return { payrollAdjustmentReports, isLoading, refetch: fetchPayrollAdjustmentReports, error };
};

export default useFetchPayrollAdjustmentReportsByStaffId;
