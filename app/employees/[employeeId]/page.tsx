'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSuitcase, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Type_states_add_edit_employee } from '@/types/screens/employees/componentDataType'
import TabHeaders from '@/components/TabHeaders'
import InputControl from '@/components/InputControl'
import { tabs_add_edit_employee } from '@/data/screens/employess/componentData'
import { employee_details_account_access_data, employee_details_documents_data, employee_details_professional_information_data } from '@/data/screens/employess/employees'
import { vertical_util_tab_employee } from '@/data/screens/employess/componentData'
import VerticalUtilTab from '@/components/Tabs/VerticalUtilTab'
import { employee_details_personal_information_data } from '@/data/screens/employess/employees'
import axiosInstance from '@/utils/axiosConfig'
import { ApiResponse } from '@/types/api'
import { Props_Staff, Type_employee_details_data } from '@/types/screens/employees/employeeDetails'

export const Top_Section_Left_Employee_details_breadcrumb = () => {
    const { employeeId } = useParams()
    const [staffDetails, setStaffDetails] = useState<Props_Staff>({
        account_access: '',
        address: '',
        active_points: 0,
        avatar: { url: '', key: 'string' },
        created_at: 0,
        updated_at: 0,
        date_of_birth: 0,
        department: null,
        work_office: {
            name: ''
        },
        first_name: '',
        last_name: '',
        joining_date: '',
        email: '',
        phone: '',
        gender: 'Male',
        job: null,
        level: '',
        status: '',
        total_days_worked: '',
        is_fulltime: false,
        id: ''
    })
    const [error, setError] = useState('')
    useEffect(() => {
        axiosInstance
            .get<ApiResponse>(`/staffs/${employeeId}`) // Get response typed as ApiResponse
            .then((response) => {
                if (response.data.EC === 0) {
                    // setStaffDetails(response.data.data);  // Store the response data in state
                    setStaffDetails(response.data.data)
                } else {
                    setError('Error fetching data: ' + response.data.EM);
                }
            })
            .catch((err) => {
                setError('Error fetching data');
                console.error('Error fetching data:', err);
            });
    }, [employeeId])

    return (
        <div className="flex flex-col">
            <strong className='uppercase text-lg font-bold'>{staffDetails.first_name}</strong>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/employees">All Employees</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Employee Details</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

const TabAddEmployeeContentRender = ({
    data,
    selectedDate,
    setSelectedDate,
    type
}: {
    data: Props_Staff,
    type: string,
    selectedDate?: number,
    setSelectedDate?: React.Dispatch<React.SetStateAction<number>>
}) => {
    const [personalInformation, setPersonalInformation] = useState<Type_employee_details_data[]>([]);
    const [professionalInformation, setProfessionalInformation] = useState<Type_employee_details_data[]>([]);
    const [documentsData, setDocumentsData] = useState<Type_employee_details_data[]>([]);
    const [accountAccessData, setAccountAccessData] = useState<Type_employee_details_data[]>([]);

    useEffect(() => {
        if (data) {
            // Personal Information
            const personalInfo = [
                { id: 1, label: 'First Name', value: data.first_name || '-' },
                { id: 2, label: 'Last Name', value: data.last_name || '-' },
                { id: 3, label: 'Phone Number', value: data.phone || '-' },
                { id: 4, label: 'Email Address', value: data.email || '-' },
                { id: 5, label: 'Date of Birth', value: data.date_of_birth ? new Date(data.date_of_birth * 1000).toLocaleDateString() : '-' },
                { id: 6, label: 'Gender', value: data.gender || '-' },
                { id: 7, label: 'Nationality', value: 'Vietnam' }, // Static placeholder
                { id: 8, label: 'Address', value: '102 Phan Van Teo, P.TTN, District 12, Saigon, Vietnam' } // Static placeholder
            ];
            setPersonalInformation(personalInfo);

            // Professional Information
            const professionalInfo = [
                { id: 1, label: 'Employee ID', value: data.job ? data.job.title : '-' }, // Using job as placeholder for Employee ID
                { id: 2, label: 'Username', value: data.first_name || '-' }, // Placeholder
                { id: 3, label: 'Employee Type', value: data.is_fulltime ? 'Full Time' : 'Part Time' },
                { id: 4, label: 'Department', value: data.department ? data.department.name : '-' },
                { id: 5, label: 'Designation', value: data.level || '-' },
                { id: 6, label: 'Joining Date', value: data.joining_date ? data.joining_date : '-' }, // Convert timestamp to date string
                { id: 7, label: 'Office Location', value: data.work_office ? data.work_office.name : '-' }
            ];
            setProfessionalInformation(professionalInfo);

            // Documents Data (Static for now)
            const documentsInfo = [
                { id: 1, label: 'Appointment Letters', uploadFile: { filename: ['appointment_letter.pdf'] } },
                { id: 2, label: 'Salary Slips', uploadFile: { filename: ['salary_slip_nov.pdf', 'salary_slip_dec.pdf'] } },
                { id: 3, label: 'Reliving Letters', uploadFile: { filename: ['reliving_letter.pdf'] } },
                { id: 4, label: 'Experience Letters', uploadFile: { filename: ['experience_letter.pdf'] } }
            ];
            setDocumentsData(documentsInfo);

            // Account Access Data (Extracting from JSON string)
            const accountAccessInfo = [
                { id: 1, label: 'Facebook ID', value: data.account_access ? JSON.parse(data.account_access)[0]?.facebook || '-' : '-' }
            ];
            setAccountAccessData(accountAccessInfo);
        }
    }, [data]); // Effect will run whenever `data` changes

    console.log('check dep', data?.department);

    switch (type) {
        case tabs_add_edit_employee[0].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {personalInformation.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            );
        case tabs_add_edit_employee[1].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {professionalInformation.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            );
        case tabs_add_edit_employee[2].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {documentsData.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} uploadedFileValue={item.uploadFile} />
                    ))}
                </div>
            );
        case tabs_add_edit_employee[3].title:
            return (
                <div className="grid grid-cols-2 gap-4">
                    {accountAccessData.map(item => (
                        <InputControl key={item.label} readOnly label={item.label} value={item.value} />
                    ))}
                </div>
            );
        default:
            return null;
    }
};


const page = () => {
    const { employeeId } = useParams()
    const [currentProgress, setCurrentProgress] = useState<string>(tabs_add_edit_employee[0].title);
    const [employeeInputs, setEmployeeInputs] = useState<Type_states_add_edit_employee>()
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));
    const [selectedUtilTab, setSelectedUtilTab] = useState<string>(vertical_util_tab_employee[0].title)

    const [staffDetails, setStaffDetails] = useState<Props_Staff>({
        account_access: '',
        address: '',
        active_points: 0,
        avatar: { url: '', key: 'string' },
        created_at: 0,
        updated_at: 0,
        date_of_birth: 0,
        department: null,
        work_office: {
            name: ''
        },
        first_name: '',
        last_name: '',
        joining_date: '',
        email: '',
        phone: '',
        gender: 'Male',
        job: null,
        level: '',
        status: '',
        total_days_worked: '',
        is_fulltime: false,
        id: ''
    })
    const [error, setError] = useState('')

    useEffect(() => {
        axiosInstance
            .get<ApiResponse>(`/staffs/${employeeId}`) // Get response typed as ApiResponse
            .then((response) => {
                if (response.data.EC === 0) {
                    // setStaffDetails(response.data.data);  // Store the response data in state
                    setStaffDetails(response.data.data)
                } else {
                    setError('Error fetching data: ' + response.data.EM);
                }
            })
            .catch((err) => {
                setError('Error fetching data');
                console.error('Error fetching data:', err);
            });
    }, [employeeId])

    return (
        <div className='p-4 border rounded-lg shadow flex flex-col gap-4'>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://github.com/shadcn.png" alt="" className='w-20 aspect-square rounded-md' />
                    <div className="flex flex-col">
                        <strong className='text-lg font-semibold'>{staffDetails.first_name ?? ''}</strong>
                        <div className="flex gap-1 items-center"><FontAwesomeIcon icon={faUserTie} /></div>
                        <div className="flex gap-1 items-center"><FontAwesomeIcon icon={faSuitcase} />{staffDetails.email}</div>
                    </div>
                </div>
                <Button className='flex items-center gap-1'><FontAwesomeIcon icon={faEdit} />Edit Profile</Button>
            </div>
            <Separator />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                    <VerticalUtilTab listData={vertical_util_tab_employee} selectedUtilTab={selectedUtilTab} setSelectedUtilTab={setSelectedUtilTab} />
                </div>
                <div className="col-span-9 flex flex-col gap-8">
                    <div className="flex items-center">
                        {tabs_add_edit_employee.map(item => (
                            <TabHeaders currentProgress={currentProgress} icon={item.icon} title={item.title} id={item.id} setCurrentProgress={setCurrentProgress} key={item.id} />
                        ))}
                    </div>
                    <TabAddEmployeeContentRender data={staffDetails} type={currentProgress} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>
            </div>
        </div>
    )
}

export default page
