'use client'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSuitcase, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Type_states_add_edit_employee } from '@/types/screens/employees/componentDataType'
import TabHeaders from '@/components/TabHeaders'
import InputControl from '@/components/InputControl'
import { tabs_add_edit_employee } from '@/data/screens/employees'
import { employee_details_account_access_data, employee_details_documents_data, employee_details_personal_information_data, employee_details_professional_information_data } from '@/data/screens/employeeDetails'

export const TsxForTopLeftSectionApp = () => {
    const { employeeId } = useParams()

    return (
        <div className="flex flex-col">
            <strong className='uppercase text-lg font-bold'>Employee {employeeId}</strong>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/employees">All Employees</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Employee {employeeId} Details</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

const TabAddEmployeeContentRender = ({ selectedDate, setSelectedDate, type }: { type: string, selectedDate?: number, setSelectedDate?: React.Dispatch<React.SetStateAction<number>> }) => {
    switch (type) {
        case tabs_add_edit_employee[0].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {employee_details_personal_information_data.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            );
        case tabs_add_edit_employee[1].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {employee_details_professional_information_data.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            )
        case tabs_add_edit_employee[2].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {employee_details_documents_data.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} uploadedFileValue={item.uploadFile} />
                    ))}
                </div>
            )
        case tabs_add_edit_employee[3].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {employee_details_account_access_data.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            )

    }
}

const page = () => {
    const { employeeId } = useParams()
    const [currentProgress, setCurrentProgress] = useState<string>(tabs_add_edit_employee[0].title);
    const [employeeInputs, setEmployeeInputs] = useState<Type_states_add_edit_employee>()

    const handleNextStep = () => {
        switch (currentProgress) {
            case tabs_add_edit_employee[0].title:
                return setCurrentProgress(tabs_add_edit_employee[1].title)
            case tabs_add_edit_employee[1].title:
                return setCurrentProgress(tabs_add_edit_employee[2].title)
            case tabs_add_edit_employee[2].title:
                return setCurrentProgress(tabs_add_edit_employee[3].title)
            case tabs_add_edit_employee[3].title:
                return setCurrentProgress(tabs_add_edit_employee[3].title)
        }
    }

    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));
    return (
        <div className='p-4 border rounded-lg shadow flex flex-col gap-4'>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://github.com/shadcn.png" alt="" className='w-20 aspect-square rounded-md' />
                    <div className="flex flex-col">
                        <strong className='text-lg font-semibold'>{employeeId}</strong>
                        <div className="flex gap-1 items-center"><FontAwesomeIcon icon={faUserTie} />Therapist</div>
                        <div className="flex gap-1 items-center"><FontAwesomeIcon icon={faSuitcase} />tommyle1310@gmail.com</div>
                    </div>
                </div>
                <Button className='flex items-cente gap-1'><FontAwesomeIcon icon={faEdit} />Edit Profile</Button>
            </div>
            <Separator />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3"></div>
                <div className="col-span-9 flex flex-col gap-8">
                    <div className="flex items-center">
                        {tabs_add_edit_employee.map(item => (
                            <TabHeaders currentProgress={currentProgress} icon={item.icon} title={item.title} id={item.id} setCurrentProgress={setCurrentProgress} key={item.id} />
                        ))}
                    </div>
                    <TabAddEmployeeContentRender type={currentProgress} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>
            </div>
        </div>
    )
}

export default page
