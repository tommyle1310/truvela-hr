'use client'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { table_attendance } from '@/data/screens/attendance/attendance'


export const Top_Section_Left_Department_details_breadcrumb = () => {
    const { departmentId } = useParams()

    return (
        <div className="flex flex-col">
            <strong className='uppercase text-lg font-bold'>{departmentId} department</strong>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/departments">All Departments</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='capitalize'>{departmentId} department</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
const page = () => {
    const router = useRouter()
    const { departmentId } = useParams()
    return (
        <div className='p-4 border shadow-md rounded-md flex flex-col gap-4'>
            <div className="flex justify-between items-center ">
                <div className="max-w-sm">
                    <SearchInput />
                </div>
                <div className="flex items-center gap-2">
                    <Button onClick={() => { }} className='bg-violet-700'>
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
                <TableCaption>A list of <span className='text-violet-500 capitalize'>{departmentId}</span> members.</TableCaption>
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
                    {table_attendance.map((item) => (
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
    )
}

export default page
