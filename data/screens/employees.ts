import { Type_input_form_add_edit_employee, Type_states_add_edit_employee } from "@/types/screens/employees/componentDataType";
import { faIdCard, faUnlock, faUser, faUserTie, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { countries } from "../countries";


export const attendanceReviewData: { id: number, email: string, name: string, isFulltime: boolean, activePoint: number, workLocation: string, avatar: string, clockIn: string, checkIn: string, designation: string, status: 'LATE' | 'EARLY' | 'ON_TIME' }[] = [
    {
        id: 1,
        name: "Tommy Teo",
        avatar: "https://github.com/shadcn.png",
        clockIn: '08:55 AM',
        designation: 'Therapist staff',
        checkIn: '09:00 AM',
        status: 'LATE',
        email: 'tommyle1310@gmail.com',
        isFulltime: true,
        activePoint: 20,
        workLocation: 'Truvela'
    },
    {
        id: 2,
        name: "Alice Brown",
        avatar: "https://github.com/alicebrown.png",
        clockIn: '08:59 AM',
        designation: 'Frontdesk',
        checkIn: '09:00 AM',
        status: 'ON_TIME',
        email: 'alice0@gmail.com',
        isFulltime: false,
        activePoint: 90,
        workLocation: 'Bremare'
    },
];

export const employeeInputsDefault: Type_states_add_edit_employee = {
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

export const tabs_add_edit_employee: { id: number, icon: IconDefinition, title: string }[] = [
    {
        id: 1,
        icon: faUser,
        title: 'Personal Information',
    },
    {
        id: 2,
        icon: faUserTie,
        title: 'Professional Information',
    },
    {
        id: 3,
        icon: faIdCard,
        title: 'Documents',
    },
    {
        id: 4,
        icon: faUnlock,
        title: 'Account Access',
    },
]
export const input_form_personal_information_add_employee: Type_input_form_add_edit_employee[] = [
    {
        id: 1,
        label: 'First Name',
        placeholder: 'First Name'
    },
    {
        id: 2,
        label: 'Last Name',
        placeholder: 'Last Name'
    },
    {
        id: 3,
        label: 'Phone Number',
        placeholder: 'Phone Number'
    },
    {
        id: 4,
        label: 'Email Address',
        placeholder: 'Email Address'
    },
    {
        id: 5,
        label: 'Date of Birth',
        datePicker: { placeholder: 'Date of Birth' },
        placeholder: 'Date of Birth'
    },
    {
        id: 6,
        label: 'Gender',
        dropdownValue: [
            { label: 'Male', value: 'MALE' },
            { label: 'Female', value: 'FEMALE' },
            { label: 'Other', value: 'OTHER' },
        ],
        placeholder: 'Gender'
    },
    {
        id: 7,
        label: 'Nationality',
        dropdownValue: countries,
        placeholder: 'Nationality'
    },
    {
        id: 8,
        label: 'Address',
        placeholder: 'Address'
    },
    {
        id: 9,
        label: 'Avatar',
        placeholder: 'Avatar',
        isImage: true,
        // value: 'https://github.com/shadcn.png'
    },
]
export const input_form_professional_information_add_employee: Type_input_form_add_edit_employee[] = [
    {
        id: 1,
        label: 'Employee ID',
        placeholder: 'Employee ID'
    },
    {
        id: 2,
        label: 'Username',
        placeholder: 'Username'
    },
    {
        id: 3,
        label: 'Employee Type',
        placeholder: 'Select Employee Type',
        dropdownValue: [{ value: 'PART_TIME', label: 'Part Time' }, { value: 'FULL_TIME', label: 'Full Time' }]
    },
    {
        id: 4,
        label: 'Department',
        placeholder: 'Select Department',
        dropdownValue: [
            { value: 'DEP_1', label: 'Therapist' },
            { value: 'DEP_2', label: 'Frontdesk' },
            { value: 'DEP_3', label: 'Admin' },
            { value: 'DEP_4', label: 'Marketing' },
            { value: 'DEP_5', label: 'Human Resource' },
        ]
    },
    {
        id: 5,
        label: 'Enter Designation',
        placeholder: 'Enter Designation'
    },
    {
        id: 6,
        label: 'Select Joining Date',
        placeholder: 'Select Joining Date',
        datePicker: { placeholder: 'Joining Date' }
    },
    {
        id: 7,
        label: 'Level',
        placeholder: 'Level',
        dropdownValue: [
            { value: 'LVL_1', label: 'Intern' },
            { value: 'LVL_2', label: 'Junior' },
            { value: 'LVL_3', label: 'Elite' },
            { value: 'LVL_4', label: 'Senior' },
            { value: 'LVL_5', label: 'Leader' },
            { value: 'LVL_6', label: 'Supervisor' },
        ],

    },
    {
        id: 8,
        label: 'Office Location',
        dropdownValue: [{ value: 'SPA_1', label: 'Brelex' }, { value: 'SPA_2', label: 'Bremare' }],
        placeholder: 'Select Office Location'
    },
]