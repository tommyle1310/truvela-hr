import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconWithBg = () => {
    return (
        <div className="w-8 aspect-square flex justify-center items-center bg-gray-100 rounded-md">
            <FontAwesomeIcon icon={faBell} />
        </div>
    )
}

export default IconWithBg
