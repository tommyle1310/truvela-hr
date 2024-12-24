'use client'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { all_departments_members } from '@/data/screens/departments'
import { useRouter } from 'next/navigation'


const page = () => {
    const router = useRouter()
    return (
        <div className='p-4 border shadow-md rounded-md grid grid-cols-2 gap-4'>
            <div className="col-span-2 max-w-sm">
                <SearchInput />
            </div>
            {all_departments_members.map(item => (
                <div key={item.id} className="p-4 rounded-md border flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <strong className='text-lg font-bold'>{item.departmentTitle}</strong>
                            <p className='text-gray-400'>{item.members.length + ' members'}</p>
                        </div>
                        <Button onClick={() => router.push(item.href)} variant={'link'}>View All</Button>
                    </div>
                    <Separator />
                    <div className="flex flex-col">
                        {item.members.slice(-5).map(item => (
                            <div key={item.id} className="items-center justify-between flex hover hover:bg-gray-100 px-2 py-1 rounded-md">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={item.avatar} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col text-sm">
                                        <strong>{item.name}</strong>
                                        <p className='text-gray-400'>{item.designation}</p>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default page
