'use client'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { faEllipsis, faFilter, faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'
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
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { input_form_personal_information_add_employee, tabs_add_edit_employee } from '@/data/componentData'
import { DatePicker } from '@/components/DatePicker'
import { Input } from '@/components/ui/input'
import InputControl from '@/components/InputControl'


const attendanceReviewData: { id: number, email: string, name: string, isFulltime: boolean, activePoint: number, workLocation: string, avatar: string, clockIn: string, checkIn: string, designation: string, status: 'LATE' | 'EARLY' | 'ON_TIME' }[] = [
    {
        id: 1,
        name: "Tommy Teo",
        avatar: "https://github.com/shadcn.png",
        clockIn: '08:55 AM',
        designation: 'Therapist staff',
        checkIn: '09:00 AM',
        status: 'LATE',
        email: 'tommyle1310@gmail.com',
        isFulltime: true,
        activePoint: 20,
        workLocation: 'Truvela'
    },
    {
        id: 2,
        name: "Alice Brown",
        avatar: "https://github.com/alicebrown.png",
        clockIn: '08:59 AM',
        designation: 'Frontdesk',
        checkIn: '09:00 AM',
        status: 'ON_TIME',
        email: 'alice0@gmail.com',
        isFulltime: false,
        activePoint: 90,
        workLocation: 'Bremare'
    },
];

export type EmployeeContentType = 'ALL_EMPLOYEE' | 'ADD' | 'EDIT'


export const EmployeeContentRender = ({
    type,
    switchContentRender
}: {
    type: EmployeeContentType;  // The state passed down from parent
    switchContentRender: React.Dispatch<React.SetStateAction<EmployeeContentType>>;  // The function to change the state in parent
}) => {
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
                        <TableCaption>A list of recent staff attendance.</TableCaption>
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
                                    <TableCell className="font-medium w-56 flex items-center gap-1">
                                        <Avatar>
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
                                            <PopoverContent>Place content for the popover here.</PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            );
        case 'ADD':
            const [currentTab, setCurrentTab] = useState<string>(tabs_add_edit_employee[0].title);

            // Reset currentTab to the first tab when switching back to ADD
            const handleCancel = () => {
                switchContentRender('ALL_EMPLOYEE');
                setCurrentTab(tabs_add_edit_employee[0].title);  // Reset to the first tab
            };

            const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));


            return (
                <div className="border p-4 rounded-lg flex flex-col gap-4 shadow-md">
                    <div className="flex items-center">
                        {tabs_add_edit_employee.map(item => (
                            <Button
                                key={item.id}
                                onClick={() => setCurrentTab(item.title)}  // Handle tab change
                                variant={'ghost'}
                                className={`${currentTab === item.title ? 'border-b-[4px] hover:rounded-t-md border-violet-600 rounded-none text-violet-600' : ''} flex items-center font-semibold gap-2`}
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                {item.title}
                            </Button>
                        ))}
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        {input_form_personal_information_add_employee.map(item => {
                            if (item.label === 'Address') {
                                return (
                                    <div className='col-span-8'>
                                        <InputControl
                                            placeholder={item.placeholder}
                                            label={item.label}

                                            value={item.value}
                                        />
                                    </div>
                                )
                            }
                            return (
                                <div className="col-span-4">
                                    <InputControl
                                        placeholder={item.placeholder}
                                        label={item.label}
                                        value={item.value}
                                        isImage={item.isImage}
                                        dropdownValue={item.dropdownValue}
                                        multiSelectValue={item.multiSelectValue}
                                        imageGallery={item.imageGallery}
                                        imageSize={0.3}
                                        datePicker={item.datePicker && { selectedDate, setSelectedDate, placeholder: 'Date of Birth' }}
                                    />
                                </div>
                            )
                        })}

                    </div>
                    <div className='flex justify-end items-center gap-4'>
                        <Button onClick={handleCancel} variant={'outline'}>Cancel</Button>
                        <Button>Next</Button>
                    </div>
                </div>
            );
    }
};


const page = () => {
    const [employeeContentState, setEmployeeContentState] = useState<EmployeeContentType>('ALL_EMPLOYEE')
    return (
        <div className='flex flex-col gap-8'>
            <div className="flex flex-col ">
                <h1 className='font-bold text-lg'>All Employees</h1>
                <p className='font-thin text-gray-400'>All Employees Information</p>
            </div>
            <EmployeeContentRender
                type={employeeContentState}
                switchContentRender={setEmployeeContentState} // Switch to ADD when needed
            />
        </div>
    )
}

export default page