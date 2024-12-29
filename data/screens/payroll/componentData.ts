import { Type_tab_header } from "@/types/componentType";
import { faCalendarCheck, faCircleDollarToSlot, faDrawPolygon, faListCheck, faRectangleList, faShapes, faSuitcase, faTarp, faUser, faUserCheck, faUsersBetweenLines, IconDefinition, } from "@fortawesome/free-solid-svg-icons";

export const vertical_util_tab_payroll: Type_tab_header[] = [
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
export const horizontal_util_tab_payroll_by_department: Type_tab_header[] = [
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