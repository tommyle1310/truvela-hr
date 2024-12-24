'use client'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { faEllipsis, faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { tabs_add_edit_employee } from '@/data/screens/employees'
import { attendanceReviewData } from '@/data/screens/employees'
import { Type_states_add_edit_employee, TypeEmployeeContent } from '@/types/screens/employees/componentDataType'
import TabAddEditEmployeeContentRender from './TabAddEditEmployeeContentRender'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export const EmployeeContentRender = ({
    type,
    switchContentRender
}: {
    type: TypeEmployeeContent;  // The state passed down from parent
    switchContentRender: React.Dispatch<React.SetStateAction<TypeEmployeeContent>>;  // The function to change the state in parent
}) => {
    const router = useRouter(); // Get the router instance
    switch (type) {
        case 'ALL_EMPLOYEE':
            return (
                <div className="border p-4 rounded-lg flex flex-col gap-4 shadow-md">
                    <div className="justify-between flex items-center">
                        <div className="max-w-sm">
                            <SearchInput />
                        </div>
                        <div className="flex items-center gap-2">
                            <Button onClick={() => switchContentRender('ADD')} className='bg-violet-700'>
                                <FontAwesomeIcon icon={faPlusCircle} /> Add New Employee
                            </Button>
                            <Popover>
                                <PopoverTrigger className='flex items-center gap-1 px-2 py-1 rounded-sm border'>
                                    <FontAwesomeIcon icon={faFilter} /> Filter
                                </PopoverTrigger>
                                <PopoverContent>Place content for the popover here.</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <Table>
                        <TableCaption>A list of Truvela staff.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Employee Name</TableHead>
                                <TableHead className='text-center'>Employee ID</TableHead>
                                <TableHead className='text-center'>Designation</TableHead>
                                <TableHead className='text-center'>Type</TableHead>
                                <TableHead className='text-center'>Active Points</TableHead>
                                <TableHead className='text-center'>Work Location</TableHead>
                                <TableHead className='text-center'></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attendanceReviewData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell onClick={() => router.push(`/employees/${item.id}`)} className="cursor-pointer hover hover:bg-gray-100 font-medium w-56 flex items-center gap-1">
                                        <Avatar >
                                            <AvatarImage src={item.avatar} />
                                            <AvatarFallback>{item.name}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <strong>{item.name}</strong>
                                            <p className='text-gray-500 text-sm'>{item.email}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">{item.id}</TableCell>
                                    <TableCell className="text-center">{item.designation}</TableCell>
                                    <TableCell className="text-center">
                                        {item.isFulltime ? (
                                            <div className='p-default bg-violet-100 text-violet-500 rounded-sm text-center'>Full time</div>
                                        ) : (
                                            <div className='bg-white border p-default rounded-sm text-center text-violet-500'>Part time</div>
                                        )}
                                    </TableCell>
                                    <TableCell className={`${item.activePoint > 70 ? 'text-green-400' : 'text-red-400'} font-bold text-center`}>
                                        {item.activePoint}
                                    </TableCell>
                                    <TableCell className="text-center">{item.workLocation}</TableCell>
                                    <TableCell className="text-center">
                                        <Popover>
                                            <PopoverTrigger>
                                                <FontAwesomeIcon icon={faEllipsis} />
                                            </PopoverTrigger>
                                            <PopoverContent className='flex flex-col p-0 max-w-[120px]'>
                                                <Button variant={'ghost'} onClick={() => router.push(`/employees/${item.id}`)}>View Details</Button>
                                                <Button variant={'ghost'} >Edit Details</Button>
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            );
        case 'ADD':
            const [currentProgress, setCurrentProgress] = useState<string>(tabs_add_edit_employee[0].title);
            const [employeeInputs, setEmployeeInputs] = useState<Type_states_add_edit_employee>()
            // Reset currentTab to the first tab when switching back to ADD
            const handleCancel = () => {
                switchContentRender('ALL_EMPLOYEE');
                setCurrentProgress(tabs_add_edit_employee[0].title);  // Reset to the first tab
            };

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

            return <TabAddEditEmployeeContentRender handleNextStep={handleNextStep} setCurrentProgress={setCurrentProgress} handleCancel={handleCancel} currentProgress={currentProgress} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

    }
};

export default EmployeeContentRender
