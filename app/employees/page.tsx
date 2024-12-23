import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { faEllipsis, faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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

const page = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className="flex flex-col ">
                <h1 className='font-bold text-lg'>All Employees</h1>
                <p className='font-thin text-gray-400'>All Employees Information</p>
            </div>
            <div className="justify-between flex items-center">
                <div className="max-w-sm">
                    <SearchInput />
                </div>
                <div className="flex items-center gap-2">
                    <Button className='bg-violet-700'><FontAwesomeIcon icon={faPlusCircle} />Add New Employee</Button>
                    <Popover>
                        <PopoverTrigger className='flex items-center gap-1 px-2 py-1 rounded-sm border'>
                            <FontAwesomeIcon icon={faFilter} />Filter
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
                        <TableHead>Employee ID</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Active Points</TableHead>
                        <TableHead>Work Location</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {attendanceReviewData.map((item) => (
                        <TableRow key={item.id} className="">
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
                            <TableCell className="">{item.id}</TableCell>
                            <TableCell className="">{item.designation}</TableCell>
                            <TableCell className="">{item.isFulltime ? <div className='p-default bg-violet-100 text-violet-500 rounded-sm text-center'>Full time</div> : <div className='bg-white border p-default rounded-sm text-center text-violet-500'>Part time</div>}</TableCell>
                            <TableCell className={`${item.activePoint > 70 ? 'text-green-400' : 'text-red-400'} font-bold`}>{item.activePoint}</TableCell>
                            <TableCell className="">{item.workLocation}</TableCell>
                            <TableCell className="">
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
    )
}

export default page