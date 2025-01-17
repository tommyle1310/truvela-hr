'use client'
import SearchInput from '@/components/SearchInput'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { cards_all_department_members } from '@/data/screens/departments/departments'
import Link from 'next/link'
import useFetchDepartments from '@/hooks/department/useFetchAllDepartments'
import Spinner from '@/components/Spinner'


const page = () => {
    const router = useRouter()
    const { listDepartments, isLoading, refetch, error } = useFetchDepartments();
    console.log(listDepartments)
    return (
        <div className='p-4 border shadow-md rounded-md grid grid-cols-2 gap-4'>
            {isLoading ?
                <div className="col-span-2 flex justify-center">
                    <Spinner />
                </div>
                :
                <>
                    <div className="col-span-2 max-w-sm">
                        <SearchInput />
                    </div>
                    {listDepartments.map(item => (
                        <div key={item.id} className="p-4 rounded-md border flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <strong className='text-lg font-bold'>{item.name}</strong>
                                    <p className='text-gray-400'>{item.staff_list.length + ' members'}</p>
                                </div>
                                <Button onClick={() => router.push(`departments/${item.id}`)} variant={'link'}>View All</Button>
                            </div>
                            <Separator />
                            <div className="flex flex-col">
                                {item.staff_list.map(item => (
                                    <Link href={`/employees/${item.id}`} key={item.id} className="items-center justify-between flex hover hover:bg-gray-100 px-2 py-1 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <Avatar>
                                                <AvatarImage src={item.avatar.url} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col text-sm">
                                                <strong>{item.last_name} {item.first_name}</strong>
                                                <p className='text-gray-400'>{item.department && item.department.name}</p>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            }

        </div>
    )
}

export default page
