import React from 'react'
import { Button } from './ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

const TabHeaders = ({ id, title, currentProgress, icon, setCurrentProgress }: { id: number, currentProgress: string, title: string, icon: IconDefinition, setCurrentProgress: (value: React.SetStateAction<string>) => void }) => {
    return (
        <Button
            key={id}
            onClick={() => setCurrentProgress(title)}  // Handle tab change
            variant={'ghost'}
            className={`${currentProgress === title ? 'border-b-[4px] hover:rounded-t-md border-violet-600 rounded-none text-violet-600' : ''} flex items-center font-semibold gap-2 border-b-[4px] rounded-none hover:rounded-t-md`}
        >
            <FontAwesomeIcon icon={icon} />
            {title}
        </Button>
    )
}

export default TabHeaders
