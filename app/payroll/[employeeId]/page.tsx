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
import { convertDecimalToTime } from '@/utils/functions'
import { Enum_PayrollAdjustmentType } from '@/types/enums'
import { Props_PayrollAdjustmentReport } from '@/types/screens/payroll/payroll'

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


const table_overtime = [
    { id: 1, date: 1733011200, overtimeHours: 1.467 },
    { id: 2, date: 1733097600, overtimeHours: 1.5 },
    { id: 3, date: 1733184000, overtimeHours: 1 }
];

type TablePopoverProps = {
    amountFieldTitle: string,
    data: {
        id: string,
        name: string,
        amount: number,
        count: number
    }[],
    title: string,
    totalAmount: number,
    isRedTotalAmount?: boolean
};


const TablePopover: React.FC<TablePopoverProps> = ({ title, totalAmount, data, amountFieldTitle, isRedTotalAmount = false }) => {
    return (
        <div className="flex flex-col">
            <div className="items-center flex gap-4">
                <p>{title}: </p>
                {data.length > 0 ? (
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
                                        <TableHead>{amountFieldTitle}</TableHead>
                                        <TableHead className="text-center">Total {amountFieldTitle}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data?.map((item) => (
                                        <TableRow className="text-xs" key={item.id}>
                                            <TableCell className="font-medium">{item.name}</TableCell>
                                            <TableCell className="text-center">{item.count}</TableCell>
                                            <TableCell>${item.amount}</TableCell>
                                            <TableCell className={`${isRedTotalAmount ? 'text-red-600' : 'text-green-600'} text-center`}>
                                                {isRedTotalAmount ? '-' : '+'}${(item['amount'] * (data ? item.count : 1)).toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </PopoverContent>
                    </Popover>
                ) : (
                    <strong className={`${isRedTotalAmount ? 'text-red-600' : 'text-green-600'}`}>
                        ${totalAmount}
                    </strong>
                )}
            </div>
            <Separator className="my-2" />
        </div>
    );
};



function transformData(data: Props_PayrollAdjustmentReport): TablePopoverProps {
    const groupedData: { [key: string]: { count: number; amount: number; name: string } } = {};

    // Group by 'id' and accumulate count and amount
    data.payroll_adjustment_reports && data.payroll_adjustment_reports.forEach(report => {
        if (!groupedData[report.id]) {
            groupedData[report.id] = { count: 0, amount: 0, name: report.name };
        }
        groupedData[report.id].count += 1;
        groupedData[report.id].amount += report.amount;
    });

    // Prepare the final transformed data
    const transformedData: TablePopoverProps = {
        amountFieldTitle: data.type,
        data: [],
        title: data.type,
        totalAmount: 0,
        isRedTotalAmount: true,
    };

    // Populate 'data' and calculate totalAmount
    for (const reportId in groupedData) {
        const report = groupedData[reportId];
        const totalAmountForReport = report.amount * report.count;
        transformedData.data.push({
            id: reportId,
            name: report.name,
            amount: report.amount,
            count: report.count,
        });
        transformedData.totalAmount += totalAmountForReport;
    }

    return transformedData;
}




const page = () => {
    const { employeeId } = useParams()
    const { error, isLoading, payrollAdjustmentReports, refetch } = useFetchPayrollAdjustmentReportsByStaffId(employeeId as string);
    const [ovetimeReports, setOvetimeReports] = useState<{ date: number, created_at: number, updated_at: number, staff_id: string, ovetime_hour: number }[]>();
    const [totalOvertime, setTotalOvertime] = useState<number>(0);
    const [listBonuses, setListBonuses] = useState<TablePopoverProps>();
    const [listReimbursement, setListReimbursement] = useState<TablePopoverProps>();
    const [listBenefits, setListBenefits] = useState<TablePopoverProps>();
    const [listOperationDeductions, setListOperationDeduction] = useState<TablePopoverProps>();
    const [listOtherReduction, setListOtherReduction] = useState<TablePopoverProps>();
    const [listTax, setListTax] = useState<TablePopoverProps>();

    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const bonus = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.BONUS);
            if (bonus) {
                setListBonuses(transformData(bonus));
            } else {
                console.log('Bonus report not found');
            }
        }
    }, [payrollAdjustmentReports]);

    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const reimbursementReport = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.REIMBURSEMENT);
            if (reimbursementReport) {
                setListReimbursement(transformData(reimbursementReport));
            } else {
                console.log('Reimbursement report not found');
            }
        }
    }, [payrollAdjustmentReports]);

    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const benefitReport = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.BENEFIT);
            if (benefitReport) {
                setListBenefits(transformData(benefitReport));
            } else {
                console.log('Benefit report not found');
            }
        }
    }, [payrollAdjustmentReports]);

    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const operationDeductionReport = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.OPERATION_DEDUCTION);
            if (operationDeductionReport) {
                setListOperationDeduction(transformData(operationDeductionReport));
            } else {
                console.log('Operation deduction report not found');
            }
        }
    }, [payrollAdjustmentReports]);
    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const otherReductionReport = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.OTHER_DEDUCTION);
            if (otherReductionReport) {
                setListOtherReduction(transformData(otherReductionReport));
            } else {
                console.log('Other reduction report not found');
            }
        }
    }, [payrollAdjustmentReports]);
    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const taxReport = payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.TAX);
            if (taxReport) {
                setListTax(transformData(taxReport));
            } else {
                console.log('Tax report not found');
            }
        }
    }, [payrollAdjustmentReports]);
    useEffect(() => {
        if (payrollAdjustmentReports !== undefined) {
            const overtime_report = (payrollAdjustmentReports.find(item => item.type === Enum_PayrollAdjustmentType.OVERTIME)?.overtime_reports)
            if (overtime_report) {
                setOvetimeReports(overtime_report.map(item => ({ created_at: item.created_at, updated_at: item.updated_at, date: item.date, ovetime_hour: item.overtime_hour, staff_id: item.staff_id })))
            } else {
                console.log('overtime report not found');
            }
        }
    }, [payrollAdjustmentReports]);

    useEffect(() => {
        if (ovetimeReports?.length) {
            setTotalOvertime(ovetimeReports?.map(item => parseFloat((item.ovetime_hour * HOURS_RATE).toFixed(1))) // Calculate and convert to float
                .reduce((total, current) => total + current, 0))
        }
    }, [ovetimeReports])

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
                                        <strong className='text-green-600 underline'>${totalOvertime}</strong>
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
                                                {ovetimeReports?.map((item, index) => (
                                                    <TableRow key={`${index}`}>
                                                        <TableCell className="font-medium">{format(new Date(item.date * 1000), "PPP")}</TableCell>
                                                        <TableCell className='text-center'>{convertDecimalToTime(item.ovetime_hour)}</TableCell>
                                                        <TableCell>${HOURS_RATE}</TableCell>
                                                        <TableCell className='text-green-600'>+${(item.ovetime_hour * HOURS_RATE).toFixed(1)}</TableCell>
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
                            totalAmount={listBonuses?.totalAmount ?? 0}
                            data={listBonuses?.data ?? []}
                            amountFieldTitle={listBonuses?.title ?? ''}
                        />
                        <TablePopover
                            title="Reimbursements (5)"
                            totalAmount={listReimbursement?.totalAmount ?? 0}
                            data={listReimbursement?.data ?? []}
                            amountFieldTitle={listReimbursement?.title ?? ''}
                        />
                        <TablePopover
                            title="Benefits (6)"
                            totalAmount={listBenefits?.totalAmount ?? 0}
                            data={listBenefits?.data ?? []}
                            amountFieldTitle={listBenefits?.title ?? ''}
                        />
                    </div>
                    <div className="flex-grow p-4 flex flex-col">
                        <TablePopover
                            title="Operational Deductions (7)"
                            totalAmount={listOperationDeductions?.totalAmount ?? 0}
                            data={listOperationDeductions?.data ?? []}
                            amountFieldTitle={listOperationDeductions?.title ?? ''}
                        />
                        <TablePopover
                            title="Other Deductions (8)"
                            totalAmount={listOtherReduction?.totalAmount ?? 0}
                            data={listOtherReduction?.data ?? []}
                            amountFieldTitle={listOtherReduction?.title ?? ''}
                        />
                        <TablePopover
                            title="Taxes (9)"
                            totalAmount={listTax?.totalAmount ?? 0}
                            data={listTax?.data ?? []}
                            amountFieldTitle={listTax?.title ?? ''}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
