'use client'
import React, { useState } from 'react'

import { Type_state_view_add_edit_employee_content } from '@/types/screens/employees/componentDataType'
import EmployeeContentRender from '@/components/screens/employees/EmployeeContentRender'




const page = () => {
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