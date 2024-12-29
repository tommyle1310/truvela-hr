import { faCalendarCheck, faCircleDollarToSlot, faDrawPolygon, faListCheck, faRectangleList, faShapes, faSuitcase, faTarp, faUser, faUserCheck, faUsersBetweenLines, IconDefinition, } from "@fortawesome/free-solid-svg-icons";


// side bar
export const sidebarItems: { id: string, title: string, onClick: () => void, link: string, icon: IconDefinition }[] = [
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







