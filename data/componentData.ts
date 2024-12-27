import { Type_vertical_util_tab } from "@/types/componentType";
import { faCalendarCheck, faCircleDollarToSlot, faDrawPolygon, faListCheck, faRectangleList, faShapes, faSuitcase, faTarp, faUser, faUserCheck, faUsersBetweenLines, IconDefinition, } from "@fortawesome/free-solid-svg-icons";



export const sidebarItems = [
    {
        id: '1',
        title: 'Dashboard',
        onClick: () => { },
        link: '/',
        icon: faShapes
    },
    {
        id: '2',
        title: 'All Employees',
        onClick: () => { },
        link: '/employees',
        icon: faUsersBetweenLines
    },
    {
        id: '3',
        title: 'All Departments',
        onClick: () => { },
        link: '/departments',
        icon: faDrawPolygon
    },
    {
        id: '4',
        title: 'Attendance',
        onClick: () => { },
        link: '/attendance',
        icon: faCalendarCheck
    },
    {
        id: '5',
        title: 'Staff Schedule',
        onClick: () => { },
        link: '/staff-schedule',
        icon: faListCheck
    },
    {
        id: '6',
        title: 'Payroll',
        onClick: () => { },
        link: '/payroll',
        icon: faCircleDollarToSlot
    },
    {
        id: '7',
        title: 'Candidates',
        onClick: () => { },
        link: '/candidates',
        icon: faUserCheck
    },
    {
        id: '8',
        title: 'Jobs',
        onClick: () => { },
        link: '/jobs',
        icon: faSuitcase
    },
    {
        id: '9',
        title: 'Leaves',
        onClick: () => { },
        link: '/leaves',
        icon: faRectangleList
    },
]


export const vertical_util_tab_employee: Type_vertical_util_tab[] = [
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
export const vertical_util_tab_payroll: Type_vertical_util_tab[] = [
    {
        id: 1,
        title: 'Employee Payroll',
        icon: faUser,
    },
    {
        id: 2,
        title: 'Salary Definition',
        icon: faCalendarCheck,
    },
    {
        id: 3,
        title: 'Employee Payroll Logs',
        icon: faTarp,
    },
    {
        id: 4,
        title: 'Tax & Deductions',
        icon: faRectangleList,
    },
]
export const vertical_util_tab_update_staff_schedule : {
    id: number,
    title: string,
    icon?: IconDefinition
}[] = [
    {
        id: 1,
        title: 'Requested Availability List',
    },
    {
        id: 2,
        title: 'Previous Dates',
    },
    {
        id: 3,
        title: 'Replicate an existing date',
    },
    {
        id: 4,
        title: 'Clear All',
    },
]
export const horizontal_util_tab_payroll_by_department: Type_vertical_util_tab[] = [
    {
        id: 1,
        title: 'Therapist',
        icon: faUser,
    },
    {
        id: 2,
        title: 'Frontdesk',
        icon: faCalendarCheck,
    },
    {
        id: 3,
        title: 'Admin',
        icon: faTarp,
    },
    {
        id: 4,
        title: 'Marketing',
        icon: faRectangleList,
    },
]

