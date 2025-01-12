'use client'
import { DashboardAtendanceReviewTable } from "@/components/Dashboard/AttendanceReview"
import Modal from "@/components/Modal"
import MultiSelect from "@/components/MultiSelect"
import VerticalUtilTab from "@/components/Tabs/VerticalUtilTab"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { RequestedAvailabilityTable } from "./RequestedAvailabilityTable"
import { arr_staff_schedule_employee_list } from "@/data/screens/staff-schedule/staff-schedule"
import { vertical_util_tab_update_staff_schedule } from "@/data/screens/staff-schedule/componentData"
import useFetchDepartments from "@/hooks/department/useFetchAllDepartments"
import useFetchAllStaffShifts from "@/hooks/staff-availability/useFetchAllStaffShifts"
import { Props_StaffShift } from "@/types/screens/staff-schedule/staff-shift"
import Spinner from "@/components/Spinner"

export function EditScheduleSheet({ date }: { date: number }) {
    const [selectedUtilTab, setSelectedUtilTab] = useState<string>('')
    const [isModalRequestAvailabilityOpen, setIsModalRequestAvailabilityOpen] = useState<boolean>(false)
    const [listShifts, setListShifts] = useState<Props_StaffShift[]>()

    const { error: errorDepartment, isLoading: isLoadingDepartment, listDepartments, refetch: refetchDepartment } = useFetchDepartments()
    const { error: errorStaffShifts, isLoading: isLoadingStaffShifts, listStaffShifts, refetch: refetchStaffShifts } = useFetchAllStaffShifts()


    useEffect(() => {
        setListShifts(listStaffShifts)
    }, [listStaffShifts, listDepartments])
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="rounded-full p-2 w-10 aspect-square center hover hover:bg-gray-200">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            </SheetTrigger>
            <SheetContent side={'left'} className="overflow-y-auto">
                <Modal isOpen={isModalRequestAvailabilityOpen} setIsOpen={setIsModalRequestAvailabilityOpen}>
                    <RequestedAvailabilityTable />
                </Modal>

                <SheetHeader>
                    <SheetTitle>{format(new Date(date * 1000), "PPP")}</SheetTitle>
                    <SheetDescription>
                        Make changes to your staff schedule here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid grid-cols-12 gap-4 my-4">
                    <div className="col-span-3 flex flex-col gap-2">
                        {vertical_util_tab_update_staff_schedule.map(item => (
                            <Button key={item.id} onClick={() => {
                                item.onClick && item.onClick(() => setIsModalRequestAvailabilityOpen(!isModalRequestAvailabilityOpen))
                            }} className="border-indigo-400 hover:bg-indigo-100" variant={'outline'}>{item.title}</Button>
                        ))}
                    </div>
                    <div className="w-full flex flex-col gap-4 col-span-9">
                        {isLoadingDepartment && isLoadingStaffShifts ?
                            <Spinner /> : (

                                listDepartments.map((item, index) => (
                                    <div key={index} className="rounded-md border shadow-md p-4 flex flex-col gap-2">
                                        <strong>{item.name}</strong>
                                        {listShifts?.map((shift, index) => (
                                            <div key={index} className="flex flex-col gap-1">
                                                {shift.shift_type} ({shift.shift_start} - {shift.shift_end})
                                                <MultiSelect data={item.staff_list.map(item => ({ label: `${item.last_name} ${item.first_name}`, value: item.id }))} />
                                            </div>
                                        ))}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
