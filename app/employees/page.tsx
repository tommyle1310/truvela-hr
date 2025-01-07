'use client'
import React, { useEffect, useState } from 'react'

import { Type_state_view_add_edit_employee_content } from '@/types/screens/employees/componentDataType'
import EmployeeContentRender from '@/components/screens/employees/EmployeeContentRender'
import axiosInstance from '@/utils/axiosConfig'
import { ApiResponse } from '@/types/api'
import { Props_Staff } from '@/types/screens/employees/employeeDetails'




const page = () => {
    const [listStaffs, setlistStaffs] = useState<Props_Staff[]>([])
    const [error, setError] = useState('')
    useEffect(() => {
        // Fetch data using axiosInstance
        axiosInstance
            .get<ApiResponse>('/staffs') // Get response typed as ApiResponse
            .then((response) => {
                if (response.data.EC === 0) {
                    setlistStaffs(response.data.data.staffs);  // Store the response data in state
                } else {
                    setError('Error fetching data: ' + response.data.EM);
                }
            })
            .catch((err) => {
                setError('Error fetching data');
                console.error('Error fetching data:', err);
            });
    }, []);
    console.log(listStaffs)
    const [employeeContentState, setEmployeeContentState] = useState<Type_state_view_add_edit_employee_content>('ALL_EMPLOYEE')
    return (
        <div className='flex flex-col gap-8'>
            <EmployeeContentRender
                type={employeeContentState}
                data={listStaffs}
                switchContentRender={setEmployeeContentState} // Switch to ADD when needed
            />
        </div>
    )
}

export default page