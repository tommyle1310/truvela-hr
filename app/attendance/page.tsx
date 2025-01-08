'use client'
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
import React from 'react'
import { table_attendance } from "@/data/screens/attendance/attendance"
import SearchInput from "@/components/SearchInput"
import { todayTimestamp } from "@/utils/functions"
import useFetchAttendanceByDate from "@/hooks/attendance/useFetchAttendanceByDate"
import Spinner from "@/components/Spinner"

const page = () => {
    const { attendanceDetails, isLoading, refetch, error } = useFetchAttendanceByDate(todayTimestamp);
    console.log('cehck ', attendanceDetails)
    return (
        <div className='p-4 rounded-md shadow-md border'>
            {isLoading ?
                <Spinner /> :
                <div className="flex flex-col">
                    <div className="max-w-sm">
                        <SearchInput />
                    </div>
                    <Table>
                        <TableCaption>A list of recent staff attendance.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Employee Name</TableHead>
                                <TableHead>Department</TableHead>
                                <TableHead>Clock In</TableHead>
                                <TableHead>Check In Time</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {attendanceDetails && attendanceDetails.length > 0 ? (
                                attendanceDetails.map((item) => (
                                    <TableRow key={item.staff_id} className="">
                                        <TableCell className="font-medium w-56 flex items-center gap-1">
                                            <Avatar>
                                                <AvatarImage src={item.staff.avatar.url} />
                                                <AvatarFallback>{item.staff.first_name}</AvatarFallback>
                                            </Avatar>
                                            <strong>{item.staff.last_name} {item.staff.first_name}</strong>
                                        </TableCell>
                                        <TableCell className="">{item.staff.department ? item.staff.department.name : '-'}</TableCell>
                                        <TableCell className="">{item.clock_in}</TableCell>
                                        <TableCell className="">{item.check_in}</TableCell>
                                        <TableCell className="flex">
                                            <div className={`px-2 py-1 font-bold ${item.status_clock_in === 'Early' || item.status_clock_in === 'On time' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} flex rounded-sm`}>
                                                {item.status_clock_in === 'Early' ? 'Early' : (item.status_clock_in === 'Late' ? 'Late' : 'On time')}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-gray-500">
                                        No attendance records available.
                                    </TableCell>
                                </TableRow>
                            )}

                        </TableBody>
                    </Table>
                </div>

            }
        </div>
    )
}

export default page
