'use client'
import React from 'react'
import { faArrowRightFromBracket, faChevronDown, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchInput from "@/components/SearchInput";
import { usePathname } from "next/navigation";
import { Top_Section_Left_Employee_details_breadcrumb } from '@/app/employees/[employeeId]/page';
import { Top_Section_Left_Department_details_breadcrumb } from '@/app/departments/[departmentId]/page';
import IconWithBg from './IconWithBg';
import { Button } from './ui/button';
import { Top_Section_Left_Employee_payroll_update_breadcrumb } from '@/app/payroll/[employeeId]/page';




const RenderTopLeft = ({ pathname }: { pathname: string }) => {

    // Check for paths that start with '/employees/' (i.e., dynamic /employees/... paths)
    if (pathname.startsWith('/employees/')) {
        return <Top_Section_Left_Employee_details_breadcrumb />; // For dynamic employee paths
    }
    if (pathname.startsWith('/departments/')) {
        return <Top_Section_Left_Department_details_breadcrumb />
    }
    if (pathname.startsWith('/payroll/')) {
        return <Top_Section_Left_Employee_payroll_update_breadcrumb />
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
            return (<RenderTopLeft_ByCase title={'Payroll'} subtitle='payroll  management' />);
        case '/candidates':
            return (<RenderTopLeft_ByCase title={'Candidates'} subtitle='show all candidates' />);
        case '/staff-schedule':
            return (<RenderTopLeft_ByCase title={'Staff schedule'} subtitle='schedule for staff availability' />);
        case '/jobs':
            return (<RenderTopLeft_ByCase title={'Jobs'} subtitle='Show All Jobs' />);

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
                    <PopoverContent className='flex flex-col p-0 max-w-[10rem]'>
                        <Button className='flex items-center gap-1 justify-start' variant={'ghost'}><FontAwesomeIcon icon={faIdBadge} />My Profile</Button>
                        <Button className='text-red-500 flex items-center gap-1 justify-start hover hover:text-red-600' variant={'ghost'}><FontAwesomeIcon icon={faArrowRightFromBracket} />Logout</Button>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default TopSectionApp
