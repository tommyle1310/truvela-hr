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
import { table_staff_schedule_monthly } from "@/data/screens/staff-schedule/staff-schedule";
import { format, setMinutes } from "date-fns";
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
import { useEffect, useState } from "react";
import { EditScheduleSheet } from "@/components/screens/staff-schedule/EditScheduleSheet";
import useFetchMonthlyStaffScheduleGroupDate from "@/hooks/staff-availability/useFetchMonthlyStaffScheduleGroupDate";
import useFetchAllStaffShifts from "@/hooks/staff-availability/useFetchAllStaffShifts";
import { Props_MonthlyStaffSchedule } from "@/types/screens/staff-schedule/staff-schedule";
import Spinner from "@/components/Spinner";


const RenderDecorationDepartmentCount = ({
    department,
    count,
    employees
}: {
    department: string,
    count: number,
    employees: { id: string, name: string, avatar: string, department: string }[] // Employee details
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
        case 'Admin':
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
        case 'Frontdesk':
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
        case 'Marketing':
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
        case 'Therapist':
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
    employees: { id: string, name: string, avatar: string, department: string }[]
) => {
    // Accumulator with a flexible string key and number value
    const counts = employees.reduce((acc, employee) => {
        // Safely increment the department count in the accumulator
        acc[employee.department] = (acc[employee.department] || 0) + 1;
        return acc;
    }, {} as Record<string, number>); // Use Record<string, number> to allow any string as a department key

    return (Object.keys(counts) as string[]).map((department, i) => (
        <RenderDecorationDepartmentCount
            key={i}
            count={counts[department]}
            department={department}
            employees={employees.filter(employee => employee.department === department)} // Filter employees by department
        />
    ));
};


const data_table_staff_schedule_monthly_sorted = (order: 'ASC' | 'DESC', data: Type_staff_schedule_daily[]) => {
    return data.sort((a, b) => {
        new Date(a.date).getTime()
        // Compare the dates
        if (order === 'ASC') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();  // Ascending order
        } else if (order === 'DESC') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();  // Descending order
        } else {
            throw new Error('Invalid order value. Use "asc" or "desc".');
        }
    });
}

export interface Type_staff_schedule_daily {
    date: string;
    shifts: {
        shift_id: string;
        shift_name: string;
        staffs: {
            id: string;
            name: string;
            avatar: { key: string; url: string };
            department: { id: string, name: string };
        }[];
    }[];
}


async function transformStaffSchedule(
    monthlyStaffSchedule: Props_MonthlyStaffSchedule[]
): Promise<Type_staff_schedule_daily[]> {
    const transformedData: Type_staff_schedule_daily[] = [];

    for (const record of monthlyStaffSchedule) {
        const { date, note, staffs, created_at, updated_at, month } = record;

        // Initialize shifts array
        const shifts: Type_staff_schedule_daily['shifts'] = [];

        // Group by shift_id (assuming shifts are provided as part of the records)
        staffs.forEach((staff) => {
            const {
                shift,
                shift_name,
                // Check if 'staff_id' is defined in the staff type, else fix accordingly
                first_name,
                last_name,
                email,
                avatar,
                status,
                blocked_time,
                attended_hours,
                department,
            } = staff;

            // If 'staff_id' is missing from the staff object, ensure to use the correct property name or define it correctly in the staff type.
            const staff_id = staff.staff_id || '';  // Fallback or proper assignment if necessary.

            // Prepare department details
            const departmentDetails: { id: string; name: string } = {
                id: department.id,  // Make sure this matches the expected 'department' structure.
                name: department.name
            };

            // Prepare staff details
            const staffDetails = {
                id: staff_id,
                name: `${first_name} ${last_name}`,
                avatar: {
                    key: avatar.key,
                    url: avatar.url,
                },
                department: { id: departmentDetails.id, name: departmentDetails.name },
                shift_name
            };

            // If shift doesn't exist yet, initialize it
            let shiftGroup = shifts.find((s) => s.shift_id === shift);
            if (!shiftGroup) {
                shiftGroup = {
                    shift_id: shift,
                    staffs: [],
                    shift_name: shift_name
                };
                shifts.push(shiftGroup);
            }

            // Add staff to the correct shift group
            shiftGroup.staffs.push(staffDetails);
        });

        // Push the transformed data for this date
        transformedData.push({
            date,
            shifts,
        });
    }

    return transformedData;
}


const Page = () => {
    const [sortRule, setSortRule] = useState<'ASC' | 'DESC'>('DESC')
    const [selectedUpdatingDate, setSelectedUpdatingDate] = useState<number>(Math.floor(new Date().getTime() / 1000))
    const { error: errorMonthlyStaffSchedule, isLoading: isLoadingMonthlyStaffSchedule, monthlyStaffSchedule, refetch: refetchMonthlyStaffSchedule } = useFetchMonthlyStaffScheduleGroupDate('12/2024')
    const { error: errorstaffShifts, isLoading: isLoadingstaffShifts, listStaffShifts, refetch: refetchstaffShifts } = useFetchAllStaffShifts()
    const [listDailyStaffSchedule, setListDailyStaffSchedule] = useState<Type_staff_schedule_daily[]>([])

    useEffect(() => {
        // Call the async function and set the state when it resolves
        const fetchData = async () => {
            const transformedData = await transformStaffSchedule(monthlyStaffSchedule);
            setListDailyStaffSchedule(transformedData);
        };

        fetchData();
    }, [monthlyStaffSchedule]);



    return (
        <div className="flex flex-col p-4 rounded-md shadow-md border">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h5 className="text-lg font-bold p-2">Staff Schedule</h5>
                </div>
                <div className="items-center flex gap-2">
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

            </div>
            {
                isLoadingMonthlyStaffSchedule ? <Spinner /> : <Table>
                    <TableCaption>Table representing staff availability.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            {listStaffShifts?.map(item => (

                                <TableHead key={item.id}>{item.shift_type}</TableHead>
                            ))}
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data_table_staff_schedule_monthly_sorted(sortRule, listDailyStaffSchedule).map((item) => (
                            <TableRow key={item.date}>
                                <TableCell className="font-medium w-56 flex items-center gap-1">
                                    {item.date}
                                </TableCell>

                                {/* Dynamically render department counts for each shift */}
                                {listStaffShifts.map((shift, index) => (
                                    <TableCell key={index}>
                                        <div className="flex flex-col gap-1">
                                            {countEmployeesByDepartment(
                                                item.shifts
                                                    .filter(shiftItem => shiftItem.shift_name === shift.shift_type)
                                                    .map(filteredShift => (
                                                        filteredShift.staffs.map(staff => ({
                                                            name: staff.name,
                                                            department: staff.department.name,
                                                            avatar: staff.avatar.url,
                                                            id: staff.id
                                                        }))
                                                    )).flat() // Flatten the array of staff objects
                                            )}
                                        </div>
                                    </TableCell>
                                ))}

                                {/* Render the edit schedule cell */}
                                <TableCell>
                                    <div className="flex gap-1 flex-col">
                                        <EditScheduleSheet date={listDailyStaffSchedule?.[0]?.date ? Math.floor(Date.UTC(new Date(listDailyStaffSchedule[0].date).getFullYear(), new Date(listDailyStaffSchedule[0].date).getMonth(), new Date(listDailyStaffSchedule[0].date).getDate()) / 1000) : 0} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>}
        </div>
    );
};




export default Page;
