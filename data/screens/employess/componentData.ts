import {
    faIdCard, faUnlock, faUserTie, IconDefinition, faCalendarCheck,
    faRectangleList,
    faUser, faTarp
} from "@fortawesome/free-solid-svg-icons";
import { countries } from "@/data/countries";
import { Type_input_form_add_edit_employee, Type_states_add_edit_employee } from "@/types/screens/employees/componentDataType";
import { Type_tab_header } from "@/types/componentType";



export const tabs_add_edit_employee: Type_tab_header[] = [
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

export const vertical_util_tab_employee: Type_tab_header[] = [
    {
        id: 1,
        title: 'Profile',
        icon: faUser,
    },
    {
        id: 2,
        title: 'Attendance',
        icon: faCalendarCheck,
    },
    {
        id: 3,
        title: 'Projects',
        icon: faTarp,
    },
    {
        id: 4,
        title: 'Leave',
        icon: faRectangleList,
    },
]