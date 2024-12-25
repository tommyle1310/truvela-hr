'use client'
import IconWithBg from "@/components/IconWithBg"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { payroll_dashboard_cards } from "@/data/screens/payroll"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import React from 'react'

const DrawerPayrollDashboard = () => {
    return (
        <Drawer >
            <DrawerTrigger className="w-56 text-left hover:underline hover text-violet-500">View Payroll Summary</DrawerTrigger>
            <DrawerContent className="p-8 max-w-screen-md mx-auto">
                {/* <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader> */}
                <div className="col-span-9 grid grid-cols-2 gap-4">
                    {payroll_dashboard_cards.map((item) => (
                        <div key={item.id} className='p-4  flex flex-col gap-4 shadow-md rounded-lg border '>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <strong className='text-lg font-bold'>{item.title}</strong>
                                    <p>{item.subtitle}</p>
                                </div>
                                <IconWithBg />
                            </div>
                            <Separator />
                            <div className="flex items-center gap-2 text-sm">
                                <FontAwesomeIcon icon={item.isPositiveTrend ? faChevronUp : faChevronDown} className={`${item.isPositiveTrend ? 'text-green-400' : 'text-red-400'}`} />
                                <p>{item.trendDetails}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-3">
                </div>
                {/* <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>

    )
}

export default DrawerPayrollDashboard
