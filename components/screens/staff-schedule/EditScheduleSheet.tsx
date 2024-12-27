'use client'
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
import { vertical_util_tab_update_staff_schedule } from "@/data/componentData"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"
import { useState } from "react"

export function EditScheduleSheet({ date }: { date: number }) {
    const [selectedUtilTab, setSelectedUtilTab] = useState<string>('')
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="rounded-full p-2 w-10 aspect-square center hover hover:bg-gray-200">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            </SheetTrigger>
            <SheetContent side={'left'} className="overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>{format(new Date(date * 1000), "PPP")}</SheetTitle>
                    <SheetDescription>
                        Make changes to your staff schedule here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
              <div className="grid grid-cols-12 gap-4 my-4">
                <div className="col-span-3 flex flex-col gap-2">
                    {vertical_util_tab_update_staff_schedule.map(item => (
                        <Button variant={'outline'}>{item.title}</Button>
                    ))}
                </div>
                    <div className="w-full flex flex-col gap-4 col-span-9">
                        {['Therapist', 'Frontdesk', 'Admin', 'Marketer'].map((item, index) => (
                            <div key={index} className="rounded-md border shadow-md p-4 flex flex-col gap-2">
                                <strong>{item}</strong>
                                {['Morning', 'Afternoon', 'Evening'].map((item, index) => (
                                    <div className="flex flex-col gap-1">
                                        {item} (10:00 AM - 04:00 PM)
                                        <MultiSelect />
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
