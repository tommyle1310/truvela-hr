'use client'
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
import { table_staff_schedule_monthly, Type_departments_enum } from "@/data/screens/staff-schedule";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
import { useState } from "react";


const RenderDecorationDepartmentCount = ({
    department,
    count,
    employees
}: {
    department: Type_departments_enum,
    count: number,
    employees: { id: number, name: string, avatar: string, department: Type_departments_enum }[] // Employee details
}) => {
    const renderEmployeeDetails = () => {
        return employees.map((employee, index) => (
            <Link href={`/employees/${employee.id}`} key={index} className="flex items-center gap-2 px-2 py-1 hover hover:bg-gray-100 rounded-md">
                <Avatar>
                    <AvatarImage src={employee.avatar} alt={employee.name} />
                    <AvatarFallback>{employee.name[0]}</AvatarFallback>
                </Avatar>
                <span>{employee.name}</span>
            </Link>
        ));
    };

    switch (department) {
        case 'ADMIN':
            return (
                <HoverCard>
                    <HoverCardTrigger className='flex items-center gap-1'>
                        <div className="bg-green-100 text-green-500 p-1 rounded-md">
                            Admin ({count})
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        {renderEmployeeDetails()}
                    </HoverCardContent>
                </HoverCard>
            );
        case 'FRONTDESK':
            return (
                <HoverCard>
                    <HoverCardTrigger className='flex items-center gap-1'>
                        <div className="bg-cyan-100 text-cyan-500 p-1 rounded-md">
                            Frontdesk ({count})
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        {renderEmployeeDetails()}
                    </HoverCardContent>
                </HoverCard>
            );
        case 'MARKETING':
            return (
                <HoverCard>
                    <HoverCardTrigger className='flex items-center gap-1'>
                        <div className="bg-orange-100 text-orange-500 p-1 rounded-md">
                            Marketing ({count})
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        {renderEmployeeDetails()}
                    </HoverCardContent>
                </HoverCard>
            );
        case 'THERAPIST':
            return (
                <HoverCard>
                    <HoverCardTrigger className='flex items-center gap-1'>
                        <div className="bg-violet-100 text-violet-500 p-1 rounded-md">
                            Therapist ({count})
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        {renderEmployeeDetails()}
                    </HoverCardContent>
                </HoverCard>
            );
        default:
            return null; // Add default case to handle unexpected departments
    }
};

// Function to count employees by department for a specific shift and return the department count and employee details
const countEmployeesByDepartment = (
    employees: { id: number, name: string, avatar: string, department: Type_departments_enum }[]
) => {
    const counts = employees.reduce((acc, employee) => {
        acc[employee.department] = (acc[employee.department] || 0) + 1;
        return acc;
    }, {} as { [key in Type_departments_enum]: number });

    return (Object.keys(counts) as Type_departments_enum[]).map((department) => (
        <RenderDecorationDepartmentCount
            count={counts[department]}
            department={department}
            employees={employees.filter(employee => employee.department === department)} // Filter employees by department
        />
    ));
};

const data_table_staff_schedule_monthly_sorted = (order: 'ASC' | 'DESC') => {
    return table_staff_schedule_monthly.sort((a, b) => {
        // Compare the dates
        if (order === 'ASC') {
            return a.date - b.date;  // Ascending order
        } else if (order === 'DESC') {
            return b.date - a.date;  // Descending order
        } else {
            throw new Error('Invalid order value. Use "asc" or "desc".');
        }
    });
}
const Page = () => {
    const [sortRule, setSortRule] = useState<'ASC' | 'DESC'>('DESC')

    return (
        <div className="flex flex-col p-4 rounded-md shadow-md border">
            <div className="flex items-center justify-between">
                <h5 className="text-lg font-bold p-2">Staff Schedule</h5>
                <Select onValueChange={(value: 'ASC' | 'DESC') => setSortRule(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filtered by date" />
                    </SelectTrigger>
                    <SelectContent>
                        {[{ label: 'Oldest to Newest', value: 'ASC' }, { label: 'Newest to Oldest', value: 'DESC' }].map((item, index) => (
                            <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Table>
                <TableCaption>Table representing staff availability.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Morning</TableHead>
                        <TableHead>Afternoon</TableHead>
                        <TableHead>Evening</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data_table_staff_schedule_monthly_sorted(sortRule).map((item) => (
                        <TableRow key={item.date}>
                            <TableCell className="font-medium w-56 flex items-center gap-1">
                                {/* Format the date to a readable format */}
                                {format(new Date(item.date * 1000), "PPP")}
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the morning shift */}
                                <div className="flex flex-col gap-1">
                                    {countEmployeesByDepartment(item.morning_employees)}
                                </div>
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the afternoon shift */}
                                <div className="flex flex-col gap-1">
                                    {countEmployeesByDepartment(item.afternoon_employees)}
                                </div>
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the evening shift */}
                                <div className="flex flex-col gap-1">
                                    {countEmployeesByDepartment(item.evening_employees)}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
