'use client'
import IconWithBg from '@/components/iconWithBg'
import { Separator } from '@/components/ui/separator'
import { payroll_dashboard_cards } from '@/data/screens/payroll'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const page = () => {
    return (
        <div className='p-4 flex flex-col gap-8'>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-9 grid grid-cols-2 gap-4">
                    {payroll_dashboard_cards.map((item) => (
                        <div key={item.id} className='p-4 rounded-md border flex flex-col gap-4 shadow-md'>
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
            </div>
        </div>
    )
}

export default page
