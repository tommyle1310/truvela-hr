'use client'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from '@/data/componentData';




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
