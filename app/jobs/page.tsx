'use client'
import React from 'react'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faSuitcase, faUserLock, faUserTie } from '@fortawesome/free-solid-svg-icons'

const page = () => {
    return (
        <div className='flex flex-col gap-8'>
            {[{ id: 1, title: 'Active Jobs' }, { id: 2, title: 'Inactive Jobs' }].map((item) => (
                <div key={item.id} className="p-4 rounded-md shadow-md border flex flex-col gap-4">
                    <h5 className='flex items-center gap-2'>{item.title} <div className={`w-2 h-2 ${item.title === 'Active Jobs' ? 'bg-green-500' : 'bg-yellow-500'} rounded-full`}></div></h5>
                    <div className="grid grid-cols-3 gap-4">
                        {[{ id: 1, title: 'Therapist', icon: faSuitcase },
                        { id: 2, title: 'Receptionist', icon: faUserTie },
                        { id: 3, title: 'Marketer', icon: faBullhorn },
                        { id: 4, title: 'Admin', icon: faUserLock }
                        ].map(item => (
                            <div key={item.id} className="p-4 bg-gray-100 rounded-md flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <div className="flex flex-col">
                                        <strong>{item.title}</strong>
                                        <p className='text-gray-500'>{item.title}</p>
                                    </div>
                                </div>
                                <ScrollArea className='w-full'>
                                    <div className="flex items-center gap-1">
                                        {
                                            [{ id: 1, title: '3 Levels' }, { id: 2, title: 'Full-time' }, { id: 3, title: 'Part-time' }].map(item => (
                                                <div key={item.id} className="p-default bg-violet-600 rounded-md text-white whitespace-nowrap">{item.title}</div>

                                            ))
                                        }
                                        <ScrollBar orientation="horizontal" />
                                    </div>

                                </ScrollArea>
                            </div>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default page
