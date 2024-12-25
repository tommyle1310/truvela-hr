'use client'
import React from 'react'
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchInput from "@/components/SearchInput";
import { usePathname } from "next/navigation";
import { sidebarItems } from '@/data/componentData';
import { Employee_details_topSection_left_breadcrumb } from '@/app/employees/[employeeId]/page';
import { Department_members_topSection_left_breadcrumb } from '@/app/departments/[departmentId]/page';
import IconWithBg from './iconWithBg';




const RenderTopLeft = ({ pathname }: { pathname: string }) => {

    // Check for paths that start with '/employees/' (i.e., dynamic /employees/... paths)
    if (pathname.startsWith('/employees/')) {
        return <Employee_details_topSection_left_breadcrumb />; // For dynamic employee paths
    }
    if (pathname.startsWith('/departments/')) {
        return <Department_members_topSection_left_breadcrumb />
    }

    // Handle the exact '/employees' path
    switch (pathname) {
        case '/':
            return (
                <div className="flex flex-col text-lg">
                    <strong>Hello, <span>{'Tommy Le'}</span>🙌</strong>
                    <p className="text-gray-400 font-thin">Good morning</p>
                </div>
            );
        case '/employees':
            return (<RenderTopLeft_ByCase title={'employees'} subtitle='all employees' />);
        case '/departments':
            return (<RenderTopLeft_ByCase title={'departments'} subtitle='all departments' />);
        case '/attendance':
            return (<RenderTopLeft_ByCase title={'attendance'} subtitle='attendance report' />);
        case '/payroll':
            return (<RenderTopLeft_ByCase title={'payroll'} subtitle='employee payroll' />);
        default:
            return <div></div>;
    }
};

const RenderTopLeft_ByCase = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="flex flex-col">
        <h1 className="font-bold text-lg uppercase">{title}</h1>
        <p className="font-thin text-gray-400 capitalize">{subtitle}</p>
    </div>
);


const TopSectionApp = () => {
    const pathname = usePathname()

    return (
        <div className="flex items-center gap-4 justify-between ">
            <RenderTopLeft pathname={pathname} />
            <div className="flex items-center gap-4">
                <SearchInput />
                <IconWithBg />
                <Popover>
                    <PopoverTrigger>
                        <div className="rounded-md border p-2 flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col text-sm flex-grow">
                                <strong>{'Tommy Le'}</strong>
                                <p>{'HR staff'}</p>
                            </div>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent>Place content for the popover here.</PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default TopSectionApp
