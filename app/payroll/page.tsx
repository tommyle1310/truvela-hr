'use client'
import { horizontal_util_tab_payroll_by_department, vertical_util_tab_payroll } from '@/data/screens/payroll/componentData'
import {
    table_payroll_this_month_log,
    table_payroll_salary_definition,
    table_payroll_tax_deductions,
    table_payroll_employee_payroll_log
} from '@/data/screens/payroll/payroll'
import { faCircleUp, faEllipsis, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TabHeaders from '@/components/TabHeaders'
import { DatePicker } from '@/components/DatePicker'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import VerticalUtilTab from '@/components/Tabs/VerticalUtilTab'
import DrawerPayrollDashboard from '@/components/screens/payroll/DrawerPayrollDashboard'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import useFetchSalaryDefinition from '@/hooks/payroll/useFetchSalaryDefinition'
import Spinner from '@/components/Spinner'
import useFetchAllPayrollsByDepartment from '@/hooks/payroll/useFetchAllPayrollsByDepartment'
import { calculateCtc, calculateSalaryPerMonth } from '@/utils/functions'
import { Enum_PayrollStatus } from '@/types/enums'



const RenderMainContentPayroll = ({ type, currentProgress, setCurrentProgress }: {
    type: string, currentProgress: string, setCurrentProgress: React.Dispatch<React.SetStateAction<string>>
}) => {
    const router = useRouter(); // Get the router instance
    const { refetch: refetchSalaryDefinition, error: errorSalaryDefinition, isLoading: isLoadingSalaryDefinition, listSalaryDefinitions } = useFetchSalaryDefinition()
    const { refetch: refetchPayroll, error: errorPayroll, isLoading: isLoadingPayroll, listPayroll } = useFetchAllPayrollsByDepartment()
    switch (type) {
        case vertical_util_tab_payroll[0].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    {isLoadingPayroll ?
                        <Spinner /> :
                        <>
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
                            <h5 className="text-lg font-bold p-2 my-0"><span className='text-violet-600'>{currentProgress}</span> Payroll</h5>
                            <Table>
                                <TableCaption>A list of <span className='text-violet-500'>{currentProgress}</span> payroll.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Employee Name</TableHead>
                                        <TableHead className=''>CTC</TableHead>
                                        <TableHead className=''>Salary Per Month</TableHead>
                                        <TableHead className=''>Deduction</TableHead>
                                        <TableHead className=''>Status</TableHead>
                                        <TableHead className=''>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {listPayroll.find(item => item.department_name === currentProgress)?.staffs_payroll.map((item) => (
                                        <TableRow key={item.id} className="">
                                            <TableCell className="font-medium w-56 flex items-center gap-1">
                                                <Avatar>
                                                    <AvatarImage src={item.id} />
                                                    <AvatarFallback>{item.staff.avatar.url}</AvatarFallback>
                                                </Avatar>
                                                <strong>{item.staff.last_name} {item.staff.first_name}</strong>
                                            </TableCell>
                                            <TableCell className=" ">${calculateCtc(item.base_salary)}</TableCell>
                                            <TableCell className=" ">${calculateSalaryPerMonth(item.base_salary)}</TableCell>
                                            <TableCell className=" ">${item.other_deduction_amount + item.operation_deduction_amount}</TableCell>
                                            <TableCell className="text-center">
                                                <div
                                                    className={`px-2 py-1 font-bold flex rounded-sm ${item.status === Enum_PayrollStatus.APPROVED || item.status === Enum_PayrollStatus.COMPLETED
                                                        ? 'bg-green-100 text-green-500'
                                                        : 'bg-yellow-100 text-yellow-500'
                                                        }`}
                                                >
                                                    {item.status}
                                                </div>
                                            </TableCell>

                                            <TableCell className=" text-center">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <FontAwesomeIcon icon={faEllipsis} />
                                                    </PopoverTrigger>
                                                    <PopoverContent className='flex flex-col p-0 max-w-[120px]'>
                                                        <Button variant={'ghost'} onClick={() => router.push(`/payroll/${item.staff_id}`)}>Update payroll</Button>
                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </>
                    }
                </div>
            )
        case vertical_util_tab_payroll[1].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    {isLoadingSalaryDefinition ?
                        <Spinner /> :
                        <>
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
                            <h5 className="text-lg font-bold p-2 my-0"><span className='text-violet-600'>{currentProgress}</span> Salary Definition</h5>
                            <Table>
                                <TableCaption>A list of <span className='text-violet-500'>{currentProgress}</span> salary definition.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="">Job</TableHead>
                                        <TableHead className=''>Level</TableHead>
                                        <TableHead className=''>Base Salary</TableHead>
                                        <TableHead className=''>CTC</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {listSalaryDefinitions.find(item => item.department_name === currentProgress)?.jobs_salary_definition.map((item) => (
                                        <TableRow key={item.id} className="">
                                            <TableCell className="  flex items-center gap-1"> {item.title}</TableCell>
                                            <TableCell className=" ">{item.level}</TableCell>
                                            <TableCell className=" ">${item.base_salary}</TableCell>
                                            <TableCell className=" ">${calculateCtc(item.base_salary)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </>
                    }
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
                    <div className="text-lg font-bold my-0 flex items-center justify-between">
                        <h5>Tax</h5>
                        <Button className='bg-blue-500 hover:bg-blue-700'><FontAwesomeIcon icon={faPlusCircle} />Add</Button>
                    </div>
                    <Table>
                        <TableCaption>A list of tax & deductions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className=''>Tax Type</TableHead>
                                <TableHead className=''>Tax Amount</TableHead>
                                <TableHead className=''>Effective Period</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_tax_deductions.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className=" ">{item.taxType}</TableCell>
                                    <TableCell className=" ">${item.taxAmount}</TableCell>
                                    <TableCell className=" ">{format(new Date(item.effectivePeriod * 1000), "PPP")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        case vertical_util_tab_payroll[4].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <div className="text-lg font-bold my-0 flex items-center justify-between">
                        <h5>Bonuses</h5>
                        <Button className='bg-blue-500 hover:bg-blue-700'><FontAwesomeIcon icon={faPlusCircle} />Add</Button>
                    </div>
                    <Table>
                        <TableCaption>A list of bonuses.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className=''>Tax Type</TableHead>
                                <TableHead className=''>Tax Amount</TableHead>
                                <TableHead className=''>Effective Period</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_tax_deductions.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className=" ">{item.taxType}</TableCell>
                                    <TableCell className=" ">${item.taxAmount}</TableCell>
                                    <TableCell className=" ">{format(new Date(item.effectivePeriod * 1000), "PPP")}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )
        case vertical_util_tab_payroll[5].title:
            return (
                <div className="col-span-9 p-4 rounded-lg shadow-md border flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <SearchInput />
                        <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faCircleUp} />Export</Button>
                    </div>
                    <div className="text-lg font-bold my-0 flex items-center justify-between">
                        <h5>Deductions</h5>
                        <Button className='bg-blue-500 hover:bg-blue-700'><FontAwesomeIcon icon={faPlusCircle} />Add</Button>
                    </div>
                    <Table>
                        <TableCaption>A list of deductions.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className=''>Tax Type</TableHead>
                                <TableHead className=''>Tax Amount</TableHead>
                                <TableHead className=''>Effective Period</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {table_payroll_tax_deductions.map((item) => (
                                <TableRow key={item.id} className="">
                                    <TableCell className=" ">{item.taxType}</TableCell>
                                    <TableCell className=" ">${item.taxAmount}</TableCell>
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
