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
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";


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
                        📟 Admin ({count})
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
                        👔 Frontdesk ({count})
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
                        📣 Marketing ({count})
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
                        🪺 Therapist ({count})
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

const Page = () => {
    return (
        <div className="flex flex-col">
            <h5 className="text-lg font-bold p-2">Attendance Overview</h5>
            <Table>
                <TableCaption>A list of recent staff attendance.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Morning</TableHead>
                        <TableHead>Afternoon</TableHead>
                        <TableHead>Evening</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {table_staff_schedule_monthly.map((item) => (
                        <TableRow key={item.date}>
                            <TableCell className="font-medium w-56 flex items-center gap-1">
                                {/* Format the date to a readable format */}
                                {format(new Date(item.date * 1000), "PPP")}
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the morning shift */}
                                <div className="flex flex-col">
                                    {countEmployeesByDepartment(item.morning_employees)}
                                </div>
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the afternoon shift */}
                                <div className="flex flex-col">
                                    {countEmployeesByDepartment(item.afternoon_employees)}
                                </div>
                            </TableCell>
                            <TableCell>
                                {/* Render the department count for the evening shift */}
                                <div className="flex flex-col">
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
