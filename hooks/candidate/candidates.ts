
import { ApiResponse } from "@/types/api";
import { Props_Candidate } from "@/types/screens/candidate/candidates";
import axiosInstance from "@/utils/axiosConfig";
import { useCallback, useEffect, useState } from "react";

const useFetchHrCandidates = () => {
    const [listHrCandidates, setListHrCandidates] = useState<Props_Candidate[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true); // Initially set to true as the request is loading

    // Fetch the data when the hook is called
    const fetchHrCandidates = useCallback(() => {
        setIsLoading(true); // Set loading state to true when refetching
        setError(''); // Reset any previous error

        axiosInstance
            .get<ApiResponse>('/hr-candidates') // Fetch HR candidates data from the API
            .then((response) => {
                if (response.data.EC === 0) {
                    setListHrCandidates(response.data.data); // Store the fetched HR candidates in the state
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

    // Call fetchHrCandidates once on mount to load data initially
    useEffect(() => {
        fetchHrCandidates();
    }, [fetchHrCandidates]);

    return { listHrCandidates, isLoading, refetch: fetchHrCandidates, error };
};

export default useFetchHrCandidates;
