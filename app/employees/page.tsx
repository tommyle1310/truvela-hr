'use client'
import React, { useState } from 'react'

import { TypeEmployeeContent } from '@/types/screens/employees/componentDataType'
import EmployeeContentRender from '@/components/screens/employees/EmployeeContentRender'




const page = () => {
    const [employeeContentState, setEmployeeContentState] = useState<TypeEmployeeContent>('ALL_EMPLOYEE')
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