import React from 'react'
import { Label } from './ui/label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
    return (
        <Label className="flex items-center gap-2 border cursor-text rounded-md p-2">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="outline-none border-none ring-0" placeholder="Search" />
        </Label>
    )
}

export default SearchInput
