'use client'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromWaterPump, faCalendarCheck, faCircleDollarToSlot, faDrawPolygon, faListCheck, faRectangleList, faShapes, faSuitcase, faUserCheck, faUsersBetweenLines, } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";


const sidebarItems = [
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

export const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className="fixed  bg-gray-100 h-screen p-4 flex flex-col gap-4 text-sm w-48">
            <div className="w-32 aspect-video bg-black"></div>
            {sidebarItems.map(item => (
                <Link href={item.link} key={item.id} className={`flex  ${item.link === pathname ? 'text-violet-600 bg-gray-300  duration-500 border-l-2 border-violet-600 font-bold hover:rounded-r-md rounded-r-md' : 'duration-500 hover:rounded-md'} hover:bg-gray-300 px-2 py-1  items-center gap-2`}>
                    <div className="flex w-4 aspect-square">
                        <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <strong>{item.title}</strong>
                </Link>
            ))}

        </div>
    )
}

export default Sidebar
