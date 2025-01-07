import { Type_states_add_edit_employee } from "@/types/screens/employees/componentDataType";
import { Type_employee_details_data } from "@/types/screens/employees/employeeDetails"

export const state_default_staff_details = {
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
    joining_date: 1633030200,
    email: '',
    phone: '',
    gender: 'Male',
    job: null,
    level: '',
    status: '',
    total_days_worked: '',
    is_fulltime: false,
    id: ''
}

export const input_default_state_add_edit_employee: Type_states_add_edit_employee = {
    address: '',
    avatar: '',
    dateOfBirth: Math.floor(new Date().getTime() / 1000),
    department: '',
    designation: '',
    email: '',
    employeeId: '',
    employeeType: 'FULL_TIME',
    facebookId: '',
    firstName: '',
    gender: '',
    joiningDate: Math.floor(new Date().getTime() / 1000),
    lastName: '',
    level: '',
    nationality: '',
    officeLocation: '',
    phone: '',
    truvelaId: '',
    username: '',
    zaloId: '',
}




export const employee_details_personal_information_data: Type_employee_details_data[] = [
    {
        id: 1,
        label: 'First Name',
        value: 'Canker'
    },
    {
        id: 2,
        label: 'Last Name',
        value: 'Dogman'
    },
    {
        id: 3,
        label: 'Phone Number',
        value: '(+84) 707171164'
    },
    {
        id: 4,
        label: 'Email Address',
        value: 'cankerdogman@gmail.com'
    },
    {
        id: 5,
        label: 'Date of Birth',
        value: 'October 13, 1924'
    },
    {
        id: 6,
        label: 'Gender',
        value: 'Male'
    },
    {
        id: 7,
        label: 'Nationality',
        value: 'Vietnam'
    },
    {
        id: 8,
        label: 'Address',
        value: '102 Phan Van Teo, P.TTN, District 12, Saigon, Vietnam'
    }
]
export const employee_details_professional_information_data: Type_employee_details_data[] = [
    {
        id: 1,
        label: 'Employee ID',
        value: '13101924'
    },
    {
        id: 2,
        label: 'Username',
        value: 'cdogman13101924'
    },
    {
        id: 3,
        label: 'Employee Type',
        value: 'Full Time'
    },
    {
        id: 4,
        label: 'Department',
        value: 'Admin'
    },
    {
        id: 5,
        label: 'Designation',
        value: 'Staff'
    },
    {
        id: 6,
        label: 'Joining Date',
        value: 'October 23, 2024'
    },
    {
        id: 7,
        label: 'Office Location',
        value: 'Bremare'
    }
]
export const employee_details_documents_data: Type_employee_details_data[] = [
    {
        id: 1,
        label: 'Appointment Letters',
        uploadFile: { filename: ['appointment_letter_oct.pdf', 'appointment_letter_oct_2.pdf', 'appointment_letter_dec.pdf'] }
    },
    {
        id: 2,
        label: 'Salary Slips',
        uploadFile: { filename: ['salary_slip_nov.pdf', 'salary_slip_dec.pdf'] }
    },
    {
        id: 3,
        label: 'Reliving Letters',
        uploadFile: { filename: ['reliving_letter_nov.pdf'] }
    },
    {
        id: 4,
        label: 'Experience Letters',
        uploadFile: { filename: ['experience_letter_nov.pdf', 'experience_letter_dec.pdf'] }

    },
]

export const employee_details_account_access_data: Type_employee_details_data[] = [
    {
        id: 1,
        label: 'Facebook ID',
        value: 'phuc.le.884150'
    },
    {
        id: 2,
        label: 'Zalo ID',
        value: '0707171164'
    },
    {
        id: 3,
        label: 'Truvela ID',
        value: 'STF_1'
    }
]