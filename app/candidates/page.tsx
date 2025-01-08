'use client'
import SearchInput from '@/components/SearchInput'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useState } from 'react'
import { format } from 'date-fns'
import { arr_candidate_status, table_candidates, Type_candidate_status } from '@/data/screens/candidates/candidates'
import useFetchHrCandidates from '@/hooks/candidate/candidates'
import Spinner from '@/components/Spinner'

const RenderCandidateStatus = ({ type }: { type: Type_candidate_status }) => {
    switch (type) {
        case 'Applied':
            return (
                <div className='center px-2 py-1 rounded-md border'>Applied</div>
            )
        case 'In progress':
            return (
                <div className='center px-2 py-1 rounded-md bg-yellow-200 text-yellow-500'>In Progress</div>
            )
        case 'Selected':
            return (
                <div className='center px-2 py-1 rounded-md bg-green-200 text-green-500'>Selected</div>
            )
        case 'Rejected':
            return (
                <div className='center px-2 py-1 rounded-md bg-red-200 text-red-500'>Rejected</div>
            )
        default:
            return (
                <div className='center px-2 py-1 rounded-md'>{type}</div>
            )
    }
}

const page = () => {
    const { listHrCandidates, isLoading, refetch, error } = useFetchHrCandidates()
    const [selectedCandidateStatus, setSelectedCandidateStatus] = useState<string>('ALL')
    return (
        <div className='p-4 rounded-md shadow-md border flex flex-col'>
            {
                isLoading ?
                    <Spinner /> :
                    <>
                        <div className="justify-between flex items-center">
                            <SearchInput />
                            <Select onValueChange={(value: Type_candidate_status) => setSelectedCandidateStatus(value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filtered by Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[{ label: 'All', value: 'ALL' }, ...arr_candidate_status].map((item, index) => (
                                        <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col">
                            <h5 className="text-lg font-bold p-2">Candidates</h5>
                            <Table>
                                <TableCaption>A list of recent candidates applied.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Employee Name</TableHead>
                                        <TableHead>Applied For</TableHead>
                                        <TableHead>Applied Date</TableHead>
                                        <TableHead>Contact</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {selectedCandidateStatus === 'ALL' ? (
                                        listHrCandidates.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell className="font-medium w-56 flex items-center gap-1">

                                                    <strong>{item.name}</strong>
                                                </TableCell>
                                                <TableCell>{item.job ? item.job.title : '-'}</TableCell>
                                                <TableCell>{format(new Date(item.applied_date * 1000), "PPP")}</TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <p>email: {item.phone}</p>
                                                        <p>phone: {item.email}</p>
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <RenderCandidateStatus type={item.status} />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        listHrCandidates.filter(item => item.status === selectedCandidateStatus).map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell className="font-medium w-56 flex items-center gap-1">
                                                    <strong>{item.name}</strong>
                                                </TableCell>
                                                <TableCell>{item.job ? item.job.title : '-'}</TableCell>
                                                <TableCell>{format(new Date(item.applied_date * 1000), "PPP")}</TableCell>
                                                <TableCell>
                                                    <div className="flex flex-col">
                                                        <p>email: {item.phone}</p>
                                                        <p>phone: {item.email}</p>
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <RenderCandidateStatus type={item.status} />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}


                                </TableBody>
                            </Table>
                        </div>
                    </>
            }
        </div>
    )
}

export default page
