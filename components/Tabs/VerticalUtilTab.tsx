'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

const VerticalUtilTab = ({ listData, selectedUtilTab, setSelectedUtilTab }: {
    listData: { title: string, icon: IconDefinition, id: number }[], selectedUtilTab: string, setSelectedUtilTab: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <div className="w-full bg-red-100 rounded-lg shadow-md border overflow-hidden">
            {listData.map(item => (
                <Button key={item.id}
                    onClick={() => setSelectedUtilTab(item.title)}
                    variant={selectedUtilTab === item.title ? 'default' : 'outline'}
                    className={`flex gap-1 justify-start ${selectedUtilTab === item.title ? 'text-white w-full rounded-none' : ' rounded-none w-full'}`}>
                    <FontAwesomeIcon icon={item.icon} />{item.title}
                </Button>
            ))}
        </div>
    )
}

export default VerticalUtilTab
