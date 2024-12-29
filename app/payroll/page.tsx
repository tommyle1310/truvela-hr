'use client'
import { horizontal_util_tab_payroll_by_department, vertical_util_tab_payroll } from '@/data/screens/payroll/componentData'
import {
    table_payroll_this_month_log,
    table_payroll_salary_definition,
    table_payroll_tax_deductions,
    table_payroll_employee_payroll_log
} from '@/data/screens/payroll/payroll'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
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
import TabHeaders from '@/components/TabHeaders'
import { DatePicker } from '@/components/DatePicker'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import VerticalUtilTab from '@/components/Tabs/VerticalUtilTab'
import DrawerPayrollDashboard from '@/components/screens/payroll/DrawerPayrollDashboard'
import { format } from 'date-fns'


const RenderMainContentPayroll = ({ type, currentProgress, setCurrentProgress }: {
    type: string, currentProgress: string, setCurrentProgress: React.Dispatch<React.SetStateAction<string>>
}) => {
    switch (type) {
        case vertical_util_tab_payroll[0].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <div className="flex items-center">
                        {horizontal_util_tab_payroll_by_department.map(item => (
                            <TabHeaders key={item.id}
                                currentProgress={currentProgress}
                                setCurrentProgress={setCurrentProgress}
                                icon={item.icon}
                                id={item.id}
                                title={item.title}
                            />
                        ))}
                    </div>
                    <h5 className="text-lg font-bold p-2 my-0">{currentProgress} Payroll</h5>
                    <Table>
                        <TableCaption>A list of {currentProgress} payroll.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Employee Name</TableHead>
                                <TableHead className=''>CTC</TableHead>
                                <TableHead className=''>Salary Per Month</TableHead>
                                <TableHead className=''>Deduction</TableHead>
                                <TableHead className=''>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_this_month_log.find(item => item.departmentName === currentProgress)?.tableSalaryDefinition.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className="font-medium w-56 flex items-center gap-1">
                                        <Avatar>
                                            <AvatarImage src={item.avatar} />
                                            <AvatarFallback>{item.name}</AvatarFallback>
                                        </Avatar>
                                        <strong>{item.name}</strong>
                                    </TableCell>
                                    <TableCell className=" ">${item.ctc}</TableCell>
                                    <TableCell className=" ">${item.salaryPerMonth}</TableCell>
                                    <TableCell className=" ">${item.deduction}</TableCell>
                                    <TableCell className="text-center flex">
                                        <div className={`px-2 py-1  font-bold ${item.status === 'COMPLETED' ? 'bg-green-100 text-green-500' : 'bg-yellow-100 text-yellow-500'} flex rounded-sm `}>
                                            {item.status}</div></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        case vertical_util_tab_payroll[1].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <div className="flex items-center">
                        {horizontal_util_tab_payroll_by_department.map(item => (
                            <TabHeaders key={item.id}
                                currentProgress={currentProgress}
                                setCurrentProgress={setCurrentProgress}
                                icon={item.icon}
                                id={item.id}
                                title={item.title}
                            />
                        ))}
                    </div>
                    <h5 className="text-lg font-bold p-2 my-0">{currentProgress} Payroll</h5>
                    <Table>
                        <TableCaption>A list of {currentProgress} salary definition.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Job</TableHead>
                                <TableHead className=''>Level</TableHead>
                                <TableHead className=''>Base Salary</TableHead>
                                <TableHead className=''>Bonus</TableHead>
                                <TableHead className=''>CTC</TableHead>
                                <TableHead className=''>Deductions</TableHead>
                                <TableHead className=''>Total CTC</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_salary_definition.find(item => item.departmentName === currentProgress)?.tableSalaryDefinition.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className="  flex items-center gap-1"> {item.job}</TableCell>
                                    <TableCell className=" ">{item.level}</TableCell>
                                    <TableCell className=" ">${item.baseSalary}</TableCell>
                                    <TableCell className=" ">${item.bonus}</TableCell>
                                    <TableCell className=" ">${item.ctc}</TableCell>
                                    <TableCell className=" ">${item.deductions}</TableCell>
                                    <TableCell className=" ">${item.totalCTC}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        case vertical_util_tab_payroll[2].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <h5 className="text-lg font-bold p-2 my-0"> Payroll Logs</h5>
                    <Table>
                        <TableCaption>A list of payroll logs.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">Employee Name</TableHead>
                                <TableHead className=''>Change Type</TableHead>
                                <TableHead className=''>Old Salary</TableHead>
                                <TableHead className=''>New Salary</TableHead>
                                <TableHead className=''>Effective Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_employee_payroll_log.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className="  flex items-center gap-1"> {item.employeeName}</TableCell>
                                    <TableCell className=" ">{item.changeType}</TableCell>
                                    <TableCell className=" ">${item.oldSalary}</TableCell>
                                    <TableCell className=" ">${item.newSalary}</TableCell>
                                    <TableCell className=" ">{format(new Date(item.effectiveDate * 1000), "PPP")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        case vertical_util_tab_payroll[3].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <h5 className="text-lg font-bold p-2 my-0">Tax & Deductions</h5>
                    <Table>
                        <TableCaption>A list of tax & deductions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className=''>Tax Type</TableHead>
                                <TableHead className=''>Tax Amount</TableHead>
                                <TableHead className=''>Total Deductions</TableHead>
                                <TableHead className=''>Effective Period</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_tax_deductions.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className=" ">{item.taxType}</TableCell>
                                    <TableCell className=" ">${item.taxAmount}</TableCell>
                                    <TableCell className=" ">${item.totalDeduction}</TableCell>
                                    <TableCell className=" ">{format(new Date(item.effectivePeriod * 1000), "PPP")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        default:
            return <div>not defined</div>
    }
}

const page = () => {
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));
    const [currentProgress, setCurrentProgress] = useState<string>(horizontal_util_tab_payroll_by_department[0].title)
    const [verticalselectedUtilTab, setVerticalSelectedUtilTab] = useState<string>(vertical_util_tab_payroll[0].title)

    return (
        <div className='p-4 flex flex-col gap-8'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <div className="flex flex-col gap-4 ">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3 flex flex-col gap-4">
                                <DatePicker selectedDate={selectedDate} setPropSelectedDate={setSelectedDate} />
                                <DrawerPayrollDashboard />

                                <VerticalUtilTab listData={vertical_util_tab_payroll} selectedUtilTab={verticalselectedUtilTab} setSelectedUtilTab={setVerticalSelectedUtilTab} />
                            </div>
                            <RenderMainContentPayroll type={verticalselectedUtilTab} currentProgress={currentProgress} setCurrentProgress={setCurrentProgress} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
