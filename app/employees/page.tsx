'use client'
import React, { useEffect, useState } from 'react'

import { Type_state_view_add_edit_employee_content } from '@/types/screens/employees/componentDataType'
import EmployeeContentRender from '@/components/screens/employees/EmployeeContentRender'
import axiosInstance from '@/utils/axiosConfig'




const page = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        // Now you can use the instance with base URL set
        axiosInstance
            .get('/staffs') // You only need the relative endpoint
            .then((response) => {
                console.log('check res', response)
                setData(response.data); // Store the response data in state
            })
            .catch((err) => {
                setError('Error fetching data');
                console.error('Error fetching data:', err);
            });
    }, []);
    console.log('data', data)
    const [employeeContentState, setEmployeeContentState] = useState<Type_state_view_add_edit_employee_content>('ALL_EMPLOYEE')
    return (
        <div className='flex flex-col gap-8'>
            <EmployeeContentRender
                type={employeeContentState}
                switchContentRender={setEmployeeContentState} // Switch to ADD when needed
            />
        </div>
    )
}

export default page