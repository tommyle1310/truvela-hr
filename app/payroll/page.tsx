'use client'
import IconWithBg from '@/components/IconWithBg'
import { Separator } from '@/components/ui/separator'
import { horizontal_util_tab_payroll_by_department, vertical_util_tab_payroll } from '@/data/componentData'
import { payroll_dashboard_cards, payrollTableData } from '@/data/screens/payroll'
import { faChevronDown, faChevronUp, faCircleUp } from '@fortawesome/free-solid-svg-icons'
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


export const RenderTopLeft_payroll = () => {
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));

    return (
        <div className="flex items-center gap-4">
            <div className="flex flex-col">
                <h1 className="font-bold text-lg uppercase">Payroll</h1>
                <p className="font-thin text-gray-400 capitalize">employee payroll</p>
            </div>
            <DatePicker selectedDate={selectedDate} setPropSelectedDate={setSelectedDate} />

        </div>
    )
}

const page = () => {
    const [currentProgress, setCurrentProgress] = useState<string>(horizontal_util_tab_payroll_by_department[0].title)
    const [selectedUtilTab, setSelectedUtilTab] = useState<string>(vertical_util_tab_payroll[0].title)

    return (
        <div className='p-4 flex flex-col gap-8'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <div className="flex flex-col gap-4 ">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3 flex flex-col gap-4">
                                <DrawerPayrollDashboard />
                                <VerticalUtilTab listData={vertical_util_tab_payroll} selectedUtilTab={selectedUtilTab} setSelectedUtilTab={setSelectedUtilTab} />
                            </div>
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
                                        {payrollTableData.find(item => item.departmentName === currentProgress)?.tableEmployeePayroll.map((item) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
