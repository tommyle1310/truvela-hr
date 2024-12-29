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
import { useState } from "react"
import { RequestedAvailabilityTable } from "./RequestedAvailabilityTable"
import { arr_staff_schedule_employee_list } from "@/data/screens/staff-schedule/staff-schedule"
import { vertical_util_tab_update_staff_schedule } from "@/data/screens/staff-schedule/componentData"

export function EditScheduleSheet({ date }: { date: number }) {
    const [selectedUtilTab, setSelectedUtilTab] = useState<string>('')
    const [isModalRequestAvailabilityOpen, setIsModalRequestAvailabilityOpen] = useState<boolean>(false)
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
                            <Button onClick={() => {
                                item.onClick && item.onClick(() => setIsModalRequestAvailabilityOpen(!isModalRequestAvailabilityOpen))
                            }} className="border-indigo-400 hover:bg-indigo-100" variant={'outline'}>{item.title}</Button>
                        ))}
                    </div>
                    <div className="w-full flex flex-col gap-4 col-span-9">
                        {['Therapist', 'Frontdesk', 'Admin', 'Marketer'].map((item, index) => (
                            <div key={index} className="rounded-md border shadow-md p-4 flex flex-col gap-2">
                                <strong>{item}</strong>
                                {['Morning', 'Afternoon', 'Evening'].map((item, index) => (
                                    <div key={index} className="flex flex-col gap-1">
                                        {item} (10:00 AM - 04:00 PM)
                                        <MultiSelect data={arr_staff_schedule_employee_list.map(item => ({ label: item.name, value: item.id }))} />
                                    </div>
                                ))}
                            </div>
                        ))}
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
