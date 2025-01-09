'use client'
import { useParams } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
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
import { format } from 'date-fns'
import { HOURS_RATE } from '@/constants/payroll'
import useFetchPayrollAdjustmentReportsByStaffId from '@/hooks/payroll/useFetchPayrollByStaffId'



export const Top_Section_Left_Employee_payroll_update_breadcrumb = () => {
    const { employeeId } = useParams()

    return (
        <div className="flex flex-col">
            <strong className='uppercase text-lg font-bold'>Payroll Update</strong>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/payroll">Payroll</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Payroll Update of {employeeId}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
function convertDecimalToTime(decimalHours: number) {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

const table_overtime = [
    {
        id: 1,
        date: 1733011200,
        overtimeHours: 1.467
    },
    {
        id: 2,
        date: 1733097600,
        overtimeHours: 1.5
    },
    {
        id: 3,
        date: 1733184000,
        overtimeHours: 1
    },
]
const table_bonuses = [
    {
        id: 1,
        name: 'Weekly Best Peformer',
        count: 3,
        bonus: 30,
    },
    {
        id: 2,
        name: 'Holiday Bonus',
        count: 1,
        bonus: 60
    },
    {
        id: 3,
        name: 'Weekend Contribution',
        count: 6,
        bonus: 35
    },
]
const table_reimbursements = [
    {
        id: 1,
        name: 'Travel Expenses',
        count: 28,
        amount: 10,
    }
]
const table_benefits = [
    {
        id: 1,
        name: 'Lunch Support',
        count: 30,
        amount: 15,
    }
]
const table_operation_deductions = [
    {
        id: 1,
        name: 'Bad Feedback from Client',
        count: 30,
        deduction: 5,
    }
]
const table_other_deductions = [
    {
        id: 1,
        name: 'Uniform',
        count: 2,
        deduction: 30,
    }
]
const table_taxes: any[] = []

interface TablePopoverProps {
    title: string;
    totalAmount: number;
    data: Array<any>;  // Fix type for data to be an array of any type
    amountField: string;
    isRedTotalAmount?: boolean;
}

type Type_adjustment_api = {
    amount: number;
    createdAt: number;
    name: string;
    description: string;
    staff_name: string;
    staff_id: string;
    payroll_adjustment_id: string;
    note: string;
    updated_at: number;
};

type GroupedAdjustment = {
    id: string;
    name: string;
    amount: number;
    count: number;
};

const covertResponsePraToTablePopover = (data: Type_adjustment_api[]): GroupedAdjustment[] => {
    return Object.values(
        data.reduce((acc, curr) => {
            const { payroll_adjustment_id, name, amount } = curr;

            if (!acc[payroll_adjustment_id]) {
                // Initialize the group for this payroll_adjustment_id
                acc[payroll_adjustment_id] = {
                    id: payroll_adjustment_id,
                    name: name,
                    amount: 0, // Initialize to 0
                    count: 0
                };
            }

            // Sum the amounts for each payroll_adjustment_id
            acc[payroll_adjustment_id].amount += amount;

            // Increment the count for the specific payroll_adjustment_id
            acc[payroll_adjustment_id].count++;

            return acc;
        }, {} as Record<string, GroupedAdjustment>) // Define the accumulator type
    );
};

const TablePopover: React.FC<TablePopoverProps> = ({ title, totalAmount, data, amountField, isRedTotalAmount = false }) => {
    return (
        <div className="flex flex-col">
            <div className="items-center flex gap-4">
                <p>{title}: </p>
                {data.length > 0 ?
                    <Popover>
                        <PopoverTrigger>
                            <strong className={`underline ${isRedTotalAmount ? 'text-red-600' : 'text-green-600'}`}>
                                ${totalAmount}
                            </strong>
                        </PopoverTrigger>
                        <PopoverContent className="flex w-[30rem] flex-col text-xs">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Count</TableHead>
                                        <TableHead>{amountField}</TableHead>
                                        <TableHead className="text-center">Total {amountField}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((item) => (
                                        <TableRow className="text-xs" key={item.id}>
                                            <TableCell className="font-medium">{item.name}</TableCell>
                                            <TableCell className="text-center">{item.count}</TableCell>
                                            <TableCell>${item[amountField]}</TableCell>
                                            <TableCell className={`${isRedTotalAmount ? 'text-red-600' : 'text-green-600'} text-center`}>
                                                {isRedTotalAmount ? '-' : '+'}${(item[amountField] * item.count).toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </PopoverContent>
                    </Popover>
                    :
                    <strong className={`${isRedTotalAmount ? 'text-red-600' : 'text-green-600'}`}>
                        ${totalAmount}
                    </strong>
                }
            </div>
            <Separator className="my-2" />
        </div>
    );
};




const page = () => {
    const { employeeId } = useParams()
    const { error, isLoading, payrollAdjustmentReports, refetch } = useFetchPayrollAdjustmentReportsByStaffId(employeeId as string)
    const [listBonuses, setListBonuses] = useState([])

    useEffect(() => {
        if (payrollAdjustmentReports.length > 0 && payrollAdjustmentReports[0].adjustments) {
            console.log(
                payrollAdjustmentReports.find(item => item.type === 'Bonus')
                    ? covertResponsePraToTablePopover(payrollAdjustmentReports.find(item => item.type === 'Bonus')?.adjustments || [])  // Use empty array if adjustments is undefined
                    : 'nasn'
            );

        }
    }, [payrollAdjustmentReports])

    return (
        <div className="flex flex-col gap-8">
            <div className="p-4 rounded-md shadow-md border flex flex-col gap-4">
                <strong className=''>Employee Details</strong>
                <div className="grid grid-cols-12 gap-8 ">
                    {/* avatar */}
                    <div className="col-span-1 aspect-square rounded-lg overflow-hidden">
                        <img src="https://github.com/shadcn.png" alt="" />
                    </div>
                    {/* name, id, department, role */}
                    <div className="col-span-4 flex flex-col text-sm">
                        <div className="grid grid-cols-12">
                            <p className='col-span-5'>Name: </p>
                            <strong className='col-span-7'>John Doe</strong>
                        </div>
                        <div className="grid grid-cols-12">
                            <p className='col-span-5'>ID: </p>
                            <strong className='col-span-7'>STF_10</strong>
                        </div>
                        <div className="grid grid-cols-12">
                            <p className='col-span-5'>Department: </p>
                            <strong className='col-span-7'>Therapist</strong>
                        </div>
                        <div className="grid grid-cols-12">
                            <p className='col-span-5'>Role: </p>
                            <strong className='col-span-7'>Lead</strong>
                        </div>
                    </div>

                    {/* contact, phone, status */}
                    <div className="col-span-4 flex flex-col text-sm">
                        <div className="grid grid-cols-12">
                            <p className='col-span-3'>Contact: </p>
                            <strong className='col-span-9'>john@example.com</strong>
                        </div>
                        <div className="grid grid-cols-12">
                            <p className='col-span-3'>Phone: </p>
                            <strong className='col-span-9'>+84 707171164</strong>
                        </div>
                        <div className="grid grid-cols-12">
                            <p className='col-span-3'>Status: </p>
                            <strong className='col-span-9'>Full-time</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col rounded-md shadow-md border">
                <strong className='px-4 mt-4'>Payroll Details</strong>
                <div className=' overflow-hidden flex w-full'>
                    <div className="flex-grow p-4 flex flex-col">
                        <div className="flex flex-col">
                            <div className="items-center flex gap-4">
                                <p>Hourly Rate (1): </p>
                                <strong className='text-green-600'>${20}/h</strong>
                            </div>
                            <Separator className='my-2' />
                        </div>
                        <div className="flex flex-col">
                            <div className="items-center flex gap-4">
                                <p>Hours Worked (2): </p>
                                <strong className='text-violet-600'>{160}</strong>
                            </div>
                            <Separator className='my-2' />
                        </div>
                        <div className="flex flex-col">
                            <div className="items-center flex gap-4">
                                <p>Overtime Earning (3): </p>
                                <Popover>
                                    <PopoverTrigger>
                                        <strong className='text-green-600 underline'>${198.4}</strong>
                                    </PopoverTrigger>
                                    <PopoverContent className='flex w-[30rem] flex-col text-xs'>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead className='text-center'>Overtime hours</TableHead>
                                                    <TableHead>Rate</TableHead>
                                                    <TableHead>Total Earnings</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {table_overtime.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell className="font-medium">{format(new Date(item.date * 1000), "PPP")}</TableCell>
                                                        <TableCell className='text-center'>{convertDecimalToTime(item.overtimeHours)}</TableCell>
                                                        <TableCell>${HOURS_RATE}</TableCell>
                                                        <TableCell className='text-green-600'>+${(item.overtimeHours * HOURS_RATE).toFixed(1)}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>

                                    </PopoverContent>
                                </Popover>

                            </div>
                            <Separator className='my-2' />
                        </div>
                    </div>
                    <div className="flex-grow p-4 flex flex-col">
                        <TablePopover
                            title="Bonuses (4)"
                            totalAmount={360}
                            data={table_bonuses}
                            amountField="bonus"
                        />
                        <TablePopover
                            title="Reimbursements (5)"
                            totalAmount={280}
                            data={table_reimbursements}
                            amountField="amount"
                        />
                        <TablePopover
                            title="Benefits (6)"
                            totalAmount={450}
                            data={table_benefits}
                            amountField="amount"
                        />
                    </div>
                    <div className="flex-grow p-4 flex flex-col">
                        <TablePopover
                            title="Operation Deductions (7)"
                            totalAmount={360}
                            data={table_operation_deductions}
                            isRedTotalAmount
                            amountField="deduction"
                        />
                        <TablePopover
                            title="Other Deductions (8)"
                            totalAmount={60}
                            data={table_other_deductions}
                            isRedTotalAmount
                            amountField="deduction"
                        />
                        <TablePopover
                            title="Taxes (9)"
                            totalAmount={0}
                            data={table_taxes}
                            isRedTotalAmount
                            amountField="deduction"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
