import { Type_input_form_personal_information_add_employee } from "@/types/componentDataType";
import { faIdCard, faUnlock, faUser, faUserTie, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { countries } from "./countries";

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

export const input_form_personal_information_add_employee: Type_input_form_personal_information_add_employee[] = [
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